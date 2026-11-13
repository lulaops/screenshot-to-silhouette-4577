import heroImg from "@/assets/fotos/barbeiro-fazendo-barba.webp.asset.json";
import { WHATSAPP_URL } from "@/lib/business";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="bg-hero-glow relative overflow-hidden pt-[4.5rem]">
      <div className="container-site grid items-center gap-12 py-12 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div className="min-w-0">
          <p className="eyebrow animate-rise">Cambuci · São Paulo</p>
          <h1 className="heading-display animate-rise delay-1 mt-6 text-5xl text-foreground sm:text-6xl lg:text-7xl">
            Barbearia <span className="text-gold-gradient italic">Los Cordeiros</span> Lins
          </h1>
          <p className="heading-display animate-rise delay-2 mt-5 text-2xl text-muted-foreground italic sm:text-3xl">
            Estilo, precisão e cuidado em cada detalhe.
          </p>
          <p className="animate-rise delay-2 mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Corte, barba e tratamentos capilares em um ambiente moderno e confortável. Escolha seu
            serviço e agende seu horário direto pelo WhatsApp.
          </p>
          <div className="animate-rise delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <WhatsAppIcon />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn btn-outline">
              Ver serviços
            </a>
          </div>
        </div>

        <div className="animate-rise delay-2 frame-gold mx-auto w-full max-w-md lg:max-w-none">
          <img
            src={heroImg.url}
            alt="Barbeiro da Los Cordeiros Lins fazendo a barba de um cliente com toalha quente"
            width={900}
            height={1200}
            fetchPriority="high"
            className="shadow-card relative aspect-[4/5] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
