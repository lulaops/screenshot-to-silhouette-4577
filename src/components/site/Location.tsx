import { MapPin, Navigation, Phone, Store } from "lucide-react";

import { ADDRESS, MAPS_URL, PHONE_DISPLAY, SERVICE_AREA, WHATSAPP_URL } from "@/lib/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Location() {
  return (
    <section id="localizacao" className="bg-card py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="min-w-0">
          <p className="eyebrow">Localização</p>
          <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl">
            Venha nos <span className="italic text-primary">visitar</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Fácil acesso pela Av. Lins de Vasconcelos, no coração do Cambuci.
          </p>
        </div>

        <div className="min-w-0 rounded-lg border border-border bg-background p-6 sm:p-10">
          <dl className="grid gap-8">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div className="min-w-0">
                <dt className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">Endereço</dt>
                <dd className="mt-2 text-lg text-foreground">
                  <address className="not-italic">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.district}, {ADDRESS.city} - {ADDRESS.state}
                    <br />
                    CEP {ADDRESS.postalCode}
                  </address>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div className="min-w-0">
                <dt className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Telefone / WhatsApp
                </dt>
                <dd className="mt-2 text-lg">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Store className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <div className="min-w-0">
                <dt className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">Região atendida</dt>
                <dd className="mt-2 text-lg text-foreground">{SERVICE_AREA}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
