import interiorImg from "@/assets/fotos/interior-cadeiras.webp.asset.json";
import { ADDRESS, WHATSAPP_URL } from "@/lib/business";

export function About() {
  return (
    <section id="sobre" className="bg-olive-deep py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="frame-gold order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <img
            src={interiorImg.url}
            alt="Interior da Barbearia Los Cordeiros Lins com cadeiras de barbeiro pretas e paredes verde-oliva"
            width={900}
            height={1200}
            loading="lazy"
            decoding="async"
            className="shadow-card relative aspect-[4/5] w-full rounded-lg object-cover"
          />
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <p className="eyebrow">Sobre</p>
          <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl">
            Sua barbearia no <span className="italic text-primary">{ADDRESS.district}</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A Barbearia Los Cordeiros Lins fica na {ADDRESS.street}, no {ADDRESS.district}, em São
              Paulo. Um espaço pensado para quem quer sair com o visual em dia, com atendimento
              para cortes, barba e tratamentos capilares.
            </p>
            <p>
              Do degradê ao corte social, do acabamento da barba à coloração: você escolhe o
              serviço e agenda seu horário com praticidade pelo WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-8"
          >
            Fale com a barbearia
          </a>
        </div>
      </div>
    </section>
  );
}
