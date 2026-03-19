import { Section } from '@components/layout/Section/Section';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-border-dark">
      <span className="section-label">── 05 / contacto</span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
        <h2 id="contact-heading" className="display-title">
          Contacto
        </h2>
        <p className="text-[0.72rem] text-muted sm:text-right leading-relaxed">
          ¿Tienes un proyecto<br />o quieres charlar?
        </p>
      </div>

      <span className="gold-rule block mb-10 w-12" />

      <div className="max-w-lg">
        <ContactForm />
      </div>
    </Section>
  );
}
