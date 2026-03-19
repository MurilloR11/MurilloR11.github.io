import { useState } from 'react';

interface FormFields {
  name: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export type FormErrors = Partial<Record<keyof FormFields, string>>;

interface UseContactFormReturn {
  fields: FormFields;
  status: FormStatus;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = 'El nombre es obligatorio.';
  if (!fields.email.trim()) {
    errors.email = 'El email es obligatorio.';
  } else if (!EMAIL_REGEX.test(fields.email)) {
    errors.email = 'Ingresa un email válido.';
  }
  if (!fields.message.trim()) errors.message = 'El mensaje es obligatorio.';
  return errors;
}

// Custom hook — all form logic extracted from ContactForm per SKILL
export function useContactForm(): UseContactFormReturn {
  const [fields, setFields] = useState<FormFields>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus('sending');
    try {
      // TODO: replace with EmailJS or Formspree call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFields({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('[ContactForm] submit failed:', err);
      setStatus('error');
    }
  };

  return { fields, status, errors, handleChange, handleSubmit };
}
