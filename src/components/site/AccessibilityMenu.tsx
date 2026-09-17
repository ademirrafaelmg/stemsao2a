import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  X,
  ZoomIn,
  ZoomOut,
  Contrast,
  Droplet,
  Link2,
  Pause,
  RotateCcw,
} from "lucide-react";

type Prefs = {
  fontStep: 0 | 1 | 2 | 3 | 4;
  contrast: boolean;
  grayscale: boolean;
  underline: boolean;
  reduceMotion: boolean;
};

const DEFAULTS: Prefs = {
  fontStep: 0,
  contrast: false,
  grayscale: false,
  underline: false,
  reduceMotion: false,
};

const STORAGE_KEY = "stemsao-a11y";

function apply(prefs: Prefs) {
  const el = document.documentElement;
  el.classList.remove("a11y-font-1", "a11y-font-2", "a11y-font-3", "a11y-font-4");
  if (prefs.fontStep > 0) el.classList.add(`a11y-font-${prefs.fontStep}`);
  el.classList.toggle("a11y-contrast", prefs.contrast);
  el.classList.toggle("a11y-grayscale", prefs.grayscale);
  el.classList.toggle("a11y-underline", prefs.underline);
  el.classList.toggle("a11y-reduce-motion", prefs.reduceMotion);
}

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Prefs>) };
        setPrefs(saved);
        apply(saved);
        return;
      }
    } catch {
      /* ignora preferências inválidas */
    }
    apply(DEFAULTS);
  }, []);

  const update = (patch: Partial<Prefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* armazenamento indisponível */
      }
      return next;
    });
  };

  const reset = () => update(DEFAULTS);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const rowBase =
    "flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm font-semibold transition-colors min-h-11";

  return (
    <div className="fixed bottom-4 right-4 z-[100] print:hidden">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Opções de acessibilidade"
          className="mb-3 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-[var(--shadow-soft)]"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="font-display text-lg font-bold">Acessibilidade</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar opções de acessibilidade"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:bg-secondary"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mb-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Tamanho do texto
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => update({ fontStep: Math.max(0, prefs.fontStep - 1) as Prefs["fontStep"] })}
                disabled={prefs.fontStep === 0}
                aria-label="Diminuir tamanho do texto"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground hover:bg-secondary disabled:opacity-50"
              >
                <ZoomOut className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="flex-1 text-center text-sm font-bold" aria-live="polite">
                {["Normal", "Maior", "Super", "Ultra", "Máximo"][prefs.fontStep]}
              </span>
              <button
                type="button"
                onClick={() => update({ fontStep: Math.min(4, prefs.fontStep + 1) as Prefs["fontStep"] })}
                disabled={prefs.fontStep === 4}
                aria-label="Aumentar tamanho do texto"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground hover:bg-secondary disabled:opacity-50"
              >
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <button
              type="button"
              aria-pressed={prefs.contrast}
              onClick={() => update({ contrast: !prefs.contrast })}
              className={`${rowBase} ${prefs.contrast ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              <Contrast className="h-4 w-4 shrink-0" aria-hidden="true" />
              Alto contraste
            </button>
            <button
              type="button"
              aria-pressed={prefs.grayscale}
              onClick={() => update({ grayscale: !prefs.grayscale })}
              className={`${rowBase} ${prefs.grayscale ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              <Droplet className="h-4 w-4 shrink-0" aria-hidden="true" />
              Escala de cinza
            </button>
            <button
              type="button"
              aria-pressed={prefs.underline}
              onClick={() => update({ underline: !prefs.underline })}
              className={`${rowBase} ${prefs.underline ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              <Link2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              Sublinhar links
            </button>
            <button
              type="button"
              aria-pressed={prefs.reduceMotion}
              onClick={() => update({ reduceMotion: !prefs.reduceMotion })}
              className={`${rowBase} ${prefs.reduceMotion ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              <Pause className="h-4 w-4 shrink-0" aria-hidden="true" />
              Reduzir animações
            </button>
            <button
              type="button"
              onClick={reset}
              className={`${rowBase} text-muted-foreground hover:bg-secondary hover:text-foreground`}
            >
              <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
              Restaurar padrões
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Opções de acessibilidade"
        className="ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-105"
      >
        <Accessibility className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
