import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { FinalCta } from "@/components/site/FinalCta";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Highlights } from "@/components/site/Highlights";
import { Location } from "@/components/site/Location";
import { Services } from "@/components/site/Services";
import {
  ADDRESS,
  BUSINESS_NAME,
  MAPS_URL,
  OPENING_HOURS_TEMP,
  PHONE_E164,
  SERVICES,
  SITE_URL,
} from "@/lib/business";

const TITLE = "Barbearia Los Cordeiros Lins | Barbearia no Cambuci, São Paulo";
const DESCRIPTION =
  "Barbearia no Cambuci, São Paulo. Corte, barba, sobrancelha, hidratação, selagem, coloração e mais. Agende seu horário pelo WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: BUSINESS_NAME,
  url: SITE_URL, // TEMPORÁRIO: substituir pela URL final
  telephone: PHONE_E164,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  hasMap: MAPS_URL,
  areaServed: { "@type": "Place", name: `${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}` },
  openingHours: OPENING_HOURS_TEMP, // TEMPORÁRIO: horário não informado
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Highlights />
        <Gallery />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
