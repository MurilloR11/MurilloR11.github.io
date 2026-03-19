import { Button } from '@components/ui/Button/Button';
import { useContactForm } from './useContactForm';

export function ContactForm() {
  const { fields, status, errors, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-[0.62rem] font-medium uppercase tracking-widest text-muted"
        >
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
          placeholder="Tu nombre"
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
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="tu@email.com"
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
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          value={fields.message}
          onChange={handleChange}
          placeholder="Cuéntame sobre tu proyecto..."
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
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje ↗'}
      </Button>

      {status === 'success' && (
        <p role="alert" className="text-[0.75rem] text-gold">
          ¡Mensaje enviado! Te responderé pronto.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-[0.75rem] text-muted">
          Hubo un error. Inténtalo de nuevo o escríbeme directamente.
        </p>
      )}
    </form>
  );
}
