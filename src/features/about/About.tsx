import { Section } from '@components/layout/Section/Section';

export function About() {
  return (
    <Section id="about" className="border-t border-border-dark">
      <span className="section-label">── 02 / sobre mí</span>

      <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-16">

        {/* Left: photo — altura = altura del contenido derecho */}
        <div className="shrink-0 mx-auto max-w-xs w-full md:mx-0 md:w-56 lg:w-64 md:h-auto">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border-dark md:aspect-auto md:h-full">
            <img
              src="/avatar.jpg"
              alt="Foto de perfil de Santiago"
              width={400}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
            {/* Subtle gold overlay at bottom */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-gold/10 to-transparent"
            />
          </div>
        </div>

        {/* Right: heading + bio */}
        <div className="flex flex-col justify-start pt-1">
          <h2 id="about-heading" className="display-title mb-2">
            Sobre mí
          </h2>
          <span className="gold-rule block mb-7 w-12" />

          <div className="space-y-5 max-w-prose">
            <p className="text-[0.82rem] leading-[1.95] text-muted">
              Soy un desarrollador frontend junior apasionado por la creación de interfaces
              web modernas, rápidas y accesibles. Sigo buenas prácticas de código y patrones
              de diseño que me permiten construir proyectos escalables y mantenibles desde
              el primer día.
            </p>

            <p className="text-[0.82rem] leading-[1.95] text-muted">
              Me caracterizo por mi atención al detalle, mi enfoque en la experiencia del
              usuario y mis ganas constantes de aprender. Me gusta entender el porqué
              detrás de cada decisión técnica, y me esfuerzo por escribir código limpio,
              bien estructurado y fácil de mantener en equipo.
            </p>

            <p className="text-[0.82rem] leading-[1.95] text-muted">
              Actualmente estoy en búsqueda de mi primera oportunidad profesional donde
              pueda seguir creciendo, colaborar con un equipo talentoso y aportar valor
              real. Si tienes un proyecto interesante o simplemente quieres hablar de
              código, con gusto te escucho.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="https://github.com/MurilloR11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-murillo-99137a297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.2em] text-subtle transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}
