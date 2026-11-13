import degradeNavalhado from "@/assets/fotos/corte-degrade-navalhado.webp.asset.json";
import corteAfro from "@/assets/fotos/corte-afro.webp.asset.json";
import degradeBarba from "@/assets/fotos/corte-degrade-barba.webp.asset.json";
import corteInfantil from "@/assets/fotos/corte-infantil.webp.asset.json";
import barbaToalha from "@/assets/fotos/barba-toalha-quente.webp.asset.json";
import interior from "@/assets/fotos/interior-cadeiras.webp.asset.json";

const PHOTOS = [
  { src: degradeNavalhado.url, w: 675, h: 1200, alt: "Corte degradê bem marcado com acabamento na navalha" },
  { src: barbaToalha.url, w: 1200, h: 900, alt: "Cliente recebendo toalha quente durante o serviço de barba" },
  { src: corteAfro.url, w: 900, h: 1200, alt: "Corte afro com contorno na nuca feito na barbearia" },
  { src: corteInfantil.url, w: 900, h: 1200, alt: "Corte infantil com degradê e franja texturizada" },
  { src: degradeBarba.url, w: 900, h: 1200, alt: "Corte degradê com topo texturizado e barba alinhada" },
  { src: interior.url, w: 900, h: 1200, alt: "Cadeiras de barbeiro e ambiente da Barbearia Los Cordeiros Lins" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="container-site">
        <p className="eyebrow">Galeria</p>
        <h2 className="heading-display mt-4 text-4xl text-foreground sm:text-5xl">
          Trabalhos <span className="italic text-primary">da casa</span>
        </h2>

        <div className="mt-12 columns-2 gap-3 md:columns-3 md:gap-4">
          {PHOTOS.map((photo) => (
            <figure key={photo.src} className="group mb-3 break-inside-avoid overflow-hidden rounded-lg md:mb-4">
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
