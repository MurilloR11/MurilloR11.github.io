import { Button } from '@components/ui/Button/Button';
import { useTranslation } from '@i18n/translations';
import { useContactForm } from './useContactForm';

export function ContactForm() {
  const { fields, status, errors, handleChange, handleSubmit } = useContactForm();
  const t = useTranslation();

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-[0.62rem] font-medium uppercase tracking-widest text-muted"
        >
          {t.contact.form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
          placeholder={t.contact.form.namePlaceholder}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
          className="input-dark"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-[0.65rem] text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-[0.62rem] font-medium uppercase tracking-widest text-muted"
        >
          {t.contact.form.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange}
          placeholder={t.contact.form.emailPlaceholder}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
          className="input-dark"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-[0.65rem] text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-[0.62rem] font-medium uppercase tracking-widest text-muted"
        >
          {t.contact.form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          value={fields.message}
          onChange={handleChange}
          placeholder={t.contact.form.messagePlaceholder}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          className="input-dark"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-[0.65rem] text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === 'sending'} className="w-full justify-center">
        {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
      </Button>

      {status === 'success' && (
        <p role="alert" className="text-[0.75rem] text-gold">
          {t.contact.form.success}
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-[0.75rem] text-muted">
          {t.contact.form.error}
        </p>
      )}
    </form>
  );
}
