import { Section } from '@components/layout/Section/Section';
import { useTranslation } from '@i18n/translations';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  const t = useTranslation();

  return (
    <Section id="contact" className="border-t border-border-dark">
      <span className="section-label">{t.contact.sectionLabel}</span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
        <h2 id="contact-heading" className="display-title">
          {t.contact.heading}
        </h2>
        <p className="text-[0.72rem] text-muted sm:text-right leading-relaxed">
          {t.contact.subtitleLine1}<br />{t.contact.subtitleLine2}
        </p>
      </div>

      <span className="gold-rule block mb-10 w-12" />

      <div className="max-w-lg">
        <ContactForm />
      </div>
    </Section>
  );
}
