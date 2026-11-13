import { ArrowUp } from "lucide-react";

import { ADDRESS_FULL, BUSINESS_NAME, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/business";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 pb-28 md:pb-12">
      <div className="container-site grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="min-w-0 space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {ADDRESS_FULL}
            <br />
            WhatsApp:{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS_NAME}. Todos os direitos reservados.
          </p>
        </div>
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 self-start text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-primary md:self-end"
        >
          <ArrowUp className="h-4 w-4" />
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
