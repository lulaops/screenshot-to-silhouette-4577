export function Logo() {
  return (
    <a href="#inicio" className="group flex min-w-0 flex-col leading-none" aria-label="Barbearia Los Cordeiros Lins — início">
      <span className="text-[0.6rem] font-bold tracking-[0.34em] text-primary uppercase">Barbearia</span>
      <span className="heading-display truncate text-2xl text-foreground transition-colors group-hover:text-primary">
        Los Cordeiros <span className="italic text-primary">Lins</span>
      </span>
    </a>
  );
}
