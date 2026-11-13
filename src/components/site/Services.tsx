import { SERVICES, WHATSAPP_URL } from "@/lib/business";

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="eyebrow">Serviços</p>
            <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl">
              Tudo para o seu visual, <span className="italic text-primary">em um só lugar</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Consulte valores e disponibilidade pelo WhatsApp.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service, i) => (
            <li key={service.name} className="group bg-background">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full items-start gap-4 p-6 transition-colors duration-300 hover:bg-card sm:flex-col sm:gap-6 lg:p-7"
              >
                <span className="heading-display w-8 shrink-0 text-2xl text-primary/70 transition-colors group-hover:text-primary sm:w-auto">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="heading-display text-2xl text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
