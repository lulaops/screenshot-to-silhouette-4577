// Dados oficiais da barbearia — edite aqui para atualizar todo o site.

export const BUSINESS_NAME = "Barbearia Los Cordeiros Lins";

/** Link oficial do WhatsApp: todos os botões de agendamento usam exatamente este link. */
export const WHATSAPP_URL =
  "https://wa.me/5511960687142?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es";

export const PHONE_DISPLAY = "(11) 96068-7142";
export const PHONE_E164 = "+5511960687142";

export const ADDRESS = {
  street: "Av. Lins de Vasconcelos, 864",
  district: "Cambuci",
  city: "São Paulo",
  state: "SP",
  postalCode: "01538-000",
  country: "BR",
} as const;

export const ADDRESS_FULL = `${ADDRESS.street} - ${ADDRESS.district}, ${ADDRESS.city} - ${ADDRESS.state}, ${ADDRESS.postalCode}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUSINESS_NAME}, ${ADDRESS_FULL}`,
)}`;

export const SERVICE_AREA = "Cambuci, São Paulo - SP";

/** TEMPORÁRIO: substituir pela URL final do site após a publicação. */
export const SITE_URL = "https://SEU-DOMINIO.com.br";

/** TEMPORÁRIO: horário de funcionamento não informado — preencher no formato Schema.org (ex.: "Mo-Sa 09:00-19:00"). */
export const OPENING_HOURS_TEMP = ["A CONFIRMAR"];

export const SERVICES = [
  { name: "Corte", description: "Cortes masculinos e infantis, do clássico ao degradê." },
  { name: "Barba", description: "Desenho, aparo e acabamento da barba." },
  { name: "Corte + Barba", description: "O combo completo em um só atendimento." },
  { name: "Sobrancelha", description: "Limpeza e alinhamento das sobrancelhas." },
  { name: "Depilação Nasal", description: "Remoção dos pelos nasais com praticidade." },
  { name: "Hidratação", description: "Tratamento para fios mais macios e saudáveis." },
  { name: "Selagem", description: "Redução de volume e frizz com acabamento alinhado." },
  { name: "Relaxamento", description: "Fios mais soltos e fáceis de modelar." },
  { name: "Tintura de Barba", description: "Cor uniforme para a barba." },
  { name: "Coloração Capilar", description: "Coloração para os cabelos." },
] as const;
