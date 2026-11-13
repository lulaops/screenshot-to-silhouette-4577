import ctaImg from "@/assets/fotos/barba-toalha-quente.webp.asset.json";
import { WHATSAPP_URL } from "@/lib/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="relative isolate overflow-hidden">
      <img
        src={ctaImg.url}
        alt=""
        width={1200}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/85" />
      <div className="container-site py-24 text-center md:py-32">
        <p className="eyebrow justify-center">Agende seu horário</p>
        <h2 id="cta-titulo" className="heading-display mx-auto mt-5 max-w-3xl text-4xl text-foreground sm:text-6xl">
          Pronto para renovar <span className="text-gold-gradient italic">o seu visual?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          Mande uma mensagem e garanta seu horário na Los Cordeiros Lins.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold mt-10 w-full sm:w-auto"
        >
          <WhatsAppIcon />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
