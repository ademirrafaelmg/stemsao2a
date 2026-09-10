import { useEffect, useState } from "react";
import logoStemsao from "@/assets/logo-stemsao.png.asset.json";
import logoIceb from "@/assets/iceb.png.asset.json";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programacao", label: "Programação" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#organizacao", label: "Organização" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent")
      }
    >
      <div className="container-narrow flex h-16 items-center justify-between gap-6 md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoStemsao.url}
            alt="STEMsão"
            className="hidden md:block h-14 w-auto object-contain md:h-16"
            width={144}
            height={144}
          />
          <div className="block leading-tight ml-3">
            <div
              className={
                "font-display text-2xl font-extrabold tracking-tight " +
                (scrolled ? "text-primary" : "text-primary-foreground")
              }
            >
              STEM<span className="text-copper">são</span>
            </div>
            <div
              className={
                "text-[11px] font-semibold uppercase tracking-[0.18em] " +
                (scrolled ? "text-muted-foreground" : "text-primary-foreground/70")
              }
            >
              UFOP · ICEB · 2026
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                "px-3 py-2 text-base font-bold tracking-wide transition-colors " +
                (scrolled
                  ? "text-foreground/85 hover:text-primary"
                  : "text-primary-foreground/90 hover:text-copper")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-copper-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-[1.02] hover:brightness-105 -ml-4"
        >
          Inscreva-se
        </a>

        <div className="flex items-center gap-3">
          <img
            src={logoIceb.url}
            alt="Instituto de Ciências Exatas e Biológicas — ICEB"
            className="hidden md:block h-14 w-auto object-contain md:h-16"
            loading="lazy"
          />
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            className={
              "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border " +
              (scrolled
                ? "border-border text-foreground"
                : "border-primary-foreground/40 text-primary-foreground")
            }
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 12h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container-narrow flex flex-col py-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground"
            >
              Inscreva-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
