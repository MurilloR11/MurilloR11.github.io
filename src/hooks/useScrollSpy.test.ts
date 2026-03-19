import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollSpy } from './useScrollSpy';

let observerCallback: IntersectionObserverCallback;
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

class MockIntersectionObserver {
  constructor(cb: IntersectionObserverCallback) {
    observerCallback = cb;
  }
  observe = mockObserve;
  disconnect = mockDisconnect;
  unobserve = vi.fn();
}

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  mockObserve.mockClear();
  mockDisconnect.mockClear();
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('useScrollSpy', () => {
  it('returns the first section id as default activeId', () => {
    const { result } = renderHook(() => useScrollSpy(['about', 'skills', 'projects']));
    expect(result.current).toBe('about');
  });

  it('returns empty string when sectionIds is empty', () => {
    const { result } = renderHook(() => useScrollSpy([]));
    expect(result.current).toBe('');
  });

  it('calls observe for each section element found in the DOM', () => {
    const section = document.createElement('section');
    section.id = 'about';
    document.body.appendChild(section);

    renderHook(() => useScrollSpy(['about', 'skills']));

    expect(mockObserve).toHaveBeenCalledWith(section);
    document.body.removeChild(section);
  });

  it('updates activeId when IntersectionObserver fires an intersecting entry', () => {
    const section = document.createElement('section');
    section.id = 'skills';
    document.body.appendChild(section);

    const { result } = renderHook(() => useScrollSpy(['about', 'skills', 'projects']));
    expect(result.current).toBe('about');

    act(() => {
      observerCallback(
        [{ isIntersecting: true, target: section } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(result.current).toBe('skills');
    document.body.removeChild(section);
  });

  it('does not update activeId when entry is not intersecting', () => {
    const section = document.createElement('section');
    section.id = 'contact';
    document.body.appendChild(section);

    const { result } = renderHook(() => useScrollSpy(['about', 'contact']));

    act(() => {
      observerCallback(
        [{ isIntersecting: false, target: section } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(result.current).toBe('about');
    document.body.removeChild(section);
  });

  it('calls disconnect on cleanup', () => {
    const { unmount } = renderHook(() => useScrollSpy(['about']));
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
