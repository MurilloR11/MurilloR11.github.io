import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { LanguageProvider } from '@context/LanguageContext';
import { useContactForm } from './useContactForm';

// useContactForm reads translated validation messages via useTranslation(),
// so every renderHook needs a LanguageProvider ancestor.
function renderContactForm() {
  return renderHook(() => useContactForm(), { wrapper: LanguageProvider });
}

describe('useContactForm', () => {
  it('starts with empty fields and idle status', () => {
    const { result } = renderContactForm();
    expect(result.current.fields).toEqual({ name: '', email: '', message: '' });
    expect(result.current.status).toBe('idle');
    expect(result.current.errors).toEqual({});
  });

  it('handleChange updates the correct field', () => {
    const { result } = renderContactForm();
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'Santiago' },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.fields.name).toBe('Santiago');
    expect(result.current.fields.email).toBe('');
  });

  it('sets validation errors when submitting empty form', async () => {
    const { result } = renderContactForm();
    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: () => {},
      } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.errors.name).toBeTruthy();
    expect(result.current.errors.email).toBeTruthy();
    expect(result.current.errors.message).toBeTruthy();
    expect(result.current.status).toBe('idle');
  });

  it('sets email error when email format is invalid', async () => {
    const { result } = renderContactForm();
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Santiago' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { name: 'email', value: 'no-es-email' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { name: 'message', value: 'Hola' } } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.errors.email).toBeTruthy();
    expect(result.current.errors.name).toBeUndefined();
    expect(result.current.errors.message).toBeUndefined();
  });

  it('sets status to "sending" then "success" on valid submission', async () => {
    const { result } = renderContactForm();
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'Santiago' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { name: 'email', value: 'santiago@email.com' } } as React.ChangeEvent<HTMLInputElement>);
      result.current.handleChange({ target: { name: 'message', value: 'Hola mundo' } } as React.ChangeEvent<HTMLInputElement>);
    });
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.status).toBe('success');
    expect(result.current.fields).toEqual({ name: '', email: '', message: '' });
  });

  it('clears field error when user types in that field', async () => {
    const { result } = renderContactForm();
    // Trigger validation errors
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as React.FormEvent<HTMLFormElement>);
    });
    expect(result.current.errors.name).toBeTruthy();
    // Type in name field
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'S' } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.errors.name).toBeUndefined();
  });
});
