import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { useIntersectionObserver } from './useIntersectionObserver';

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

// Test component that attaches the ref to a real DOM element
function ObserverTarget({
  options,
}: {
  options?: Parameters<typeof useIntersectionObserver>[0];
}) {
  const { ref, isIntersecting } = useIntersectionObserver(options);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} data-testid="target">
      {String(isIntersecting)}
    </div>
  );
}

describe('useIntersectionObserver', () => {
  it('renders with isIntersecting false initially', () => {
    render(<ObserverTarget />);
    expect(screen.getByTestId('target').textContent).toBe('false');
  });

  it('calls observe on the target element', () => {
    render(<ObserverTarget />);
    const target = screen.getByTestId('target');
    expect(mockObserve).toHaveBeenCalledWith(target);
  });

  it('sets isIntersecting to true when observer fires an intersecting entry', () => {
    render(<ObserverTarget />);
    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(screen.getByTestId('target').textContent).toBe('true');
  });

  it('disconnects after first intersection when triggerOnce is true (default)', () => {
    render(<ObserverTarget />);
    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it('does not disconnect when triggerOnce is false', () => {
    render(<ObserverTarget options={{ triggerOnce: false }} />);
    act(() => {
      observerCallback(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(mockDisconnect).not.toHaveBeenCalled();
  });

  it('does not update isIntersecting when entry is not intersecting', () => {
    render(<ObserverTarget />);
    act(() => {
      observerCallback(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });
    expect(screen.getByTestId('target').textContent).toBe('false');
  });

  it('calls disconnect on unmount', () => {
    const { unmount } = render(<ObserverTarget />);
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
