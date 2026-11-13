import { describe, expect, it } from "vitest";

import { MAPS_URL, SERVICES, WHATSAPP_URL } from "@/lib/business";

describe("Dados da barbearia", () => {
  it("usa exatamente o link de WhatsApp do cliente", () => {
    expect(WHATSAPP_URL).toBe(
      "https://wa.me/5511960687142?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es",
    );
  });

  it("'Como chegar' busca o endereço no Google Maps", () => {
    expect(MAPS_URL.startsWith("https://www.google.com/maps/search/?api=1&query=")).toBe(true);
    expect(decodeURIComponent(MAPS_URL)).toContain("Av. Lins de Vasconcelos, 864");
    expect(decodeURIComponent(MAPS_URL)).toContain("01538-000");
  });

  it("lista os 10 serviços do briefing", () => {
    expect(SERVICES.map((s) => s.name)).toEqual([
      "Corte",
      "Barba",
      "Corte + Barba",
      "Sobrancelha",
      "Depilação Nasal",
      "Hidratação",
      "Selagem",
      "Relaxamento",
      "Tintura de Barba",
      "Coloração Capilar",
    ]);
  });
});
