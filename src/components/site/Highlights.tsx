import { Armchair, CalendarCheck, Scissors, Users } from "lucide-react";

const ITEMS = [
  {
    icon: Armchair,
    title: "Ambiente moderno",
    text: "Espaço confortável, organizado e bem iluminado.",
  },
  {
    icon: Scissors,
    title: "Variedade de estilos",
    text: "Degradê, social, afro e acabamento de barba.",
  },
  {
    icon: Users,
    title: "Para todas as idades",
    text: "Atendimento para adultos e crianças.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento fácil",
    text: "Marque seu horário em poucos toques pelo WhatsApp.",
  },
];

export function Highlights() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="border-y border-border py-16 md:py-20">
      <div className="container-site">
        <h2 id="diferenciais-titulo" className="sr-only">
          Diferenciais
        </h2>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/40 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="min-w-0">
                <h3 className="heading-display text-2xl text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
