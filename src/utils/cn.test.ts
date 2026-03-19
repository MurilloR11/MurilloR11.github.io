import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('px-2', 'py-4')).toBe('px-2 py-4');
  });

  it('resolves Tailwind conflicts — last class wins', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('handles falsy clsx values', () => {
    expect(cn('base', false, 'added')).toBe('base added');
  });

  it('handles undefined and null without crashing', () => {
    expect(cn(undefined, null, 'valid')).toBe('valid');
  });

  it('handles object syntax from clsx', () => {
    expect(cn({ 'text-red-500': true, 'text-blue-500': false })).toBe('text-red-500');
  });

  it('handles array syntax from clsx', () => {
    expect(cn(['px-2', 'py-2'])).toBe('px-2 py-2');
  });

  it('returns empty string when no arguments', () => {
    expect(cn()).toBe('');
  });
});
