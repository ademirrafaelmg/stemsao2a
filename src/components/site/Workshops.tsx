import { workshops } from "@/data/workshops";

export function Workshops() {
  return (
    <section id="oficinas" className="relative bg-background py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.24em] text-copper">
            Oficinas
          </div>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">
            Ciência para experimentar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">
            Conheça as atividades práticas que farão parte da programação do STEMsão.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl border-t border-border">
          {workshops.map((workshop, index) => {
            const panelId = `oficina-${index + 1}`;

            return (
              <details
                key={`${workshop.title}-${workshop.responsible}`}
                className="group/workshop border-b border-border"
              >
                <summary
                  aria-controls={panelId}
                  className="group/summary relative flex cursor-pointer list-none items-center gap-4 py-5 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden"
                >
                  <span className="w-9 shrink-0 text-sm font-bold text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-left text-lg font-bold leading-snug text-primary transition-colors group-hover/summary:text-copper md:text-xl">
                    {workshop.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-xl font-semibold text-primary transition-transform group-open/workshop:rotate-45"
                  >
                    +
                  </span>

                  <span
                    role="tooltip"
                    className="pointer-events-none absolute bottom-[calc(100%-0.25rem)] left-12 z-30 hidden w-[min(34rem,calc(100vw-5rem))] rounded-lg border border-border bg-popover p-5 text-left text-popover-foreground opacity-0 shadow-[var(--shadow-soft)] transition-opacity group-hover/summary:opacity-100 group-focus-visible/summary:opacity-100 md:block"
                  >
                    <strong className="block text-base font-bold text-primary">
                      {workshop.title}
                    </strong>
                    <span className="mt-2 block whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {workshop.description}
                    </span>
                  </span>
                </summary>

                <div id={panelId} className="pb-7 pl-0 sm:pl-13">
                  <div className="border-l-2 border-copper px-5 py-1 md:px-7">
                    <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(14rem,1fr)]">
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-copper">
                          Descrição
                        </h3>
                        <p className="mt-3 whitespace-pre-line text-justify text-base leading-relaxed text-foreground/80">
                          {workshop.description}
                        </p>
                      </div>
                      <dl className="space-y-5">
                        <div>
                          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-copper">
                            Responsável
                          </dt>
                          <dd className="mt-1.5 font-bold leading-relaxed text-primary">
                            {workshop.responsible}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs font-bold uppercase tracking-[0.14em] text-copper">
                            Departamento
                          </dt>
                          <dd className="mt-1.5 leading-relaxed text-foreground/75">
                            {workshop.department}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}