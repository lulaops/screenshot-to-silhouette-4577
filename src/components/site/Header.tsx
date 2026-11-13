import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/business";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "header-solid" : ""
      }`}
    >
      <div className="container-site grid h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Logo />

        <div className="flex items-center gap-6">
          <nav aria-label="Menu principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden min-h-0 py-2.5 text-xs md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agendar pelo WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <nav aria-label="Menu mobile" className="container-site flex min-h-[calc(100svh-4.5rem)] flex-col pb-8">
          <ul className="flex flex-col border-t border-border">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-border">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="heading-display block py-4 text-3xl text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-8 w-full"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
