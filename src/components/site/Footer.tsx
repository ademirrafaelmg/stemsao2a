import logoStemsao from "@/assets/logo-stemsao.png.asset.json";
import logoUfop from "@/assets/logo-ufop-v3.png.asset.json";

export function Footer() {
  return (
    <footer className="surface-plate">
      <div className="container-narrow py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex items-center gap-4 md:block">
            <div className="min-w-0 flex-1">
              <div className="flex items-start gap-4">
                <img
                  src={logoStemsao.url}
                  alt="STEMsão"
                  className="-mt-11 h-[7.5rem] w-[7.5rem] object-contain"
                  width={144}
                  height={144}
                  loading="lazy"
                />
                <div className="pt-0.5">
                  <div className="font-display text-3xl font-extrabold">
                    STEM<span className="text-copper">são</span>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                    Evento de Extensão · UFOP
                  </div>
                </div>
              </div>
              <p className="-mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/75">
                Evento gratuito de ciência, tecnologia, engenharia e matemática
                promovido pelo ICEB — Universidade Federal de Ouro Preto.
              </p>
            </div>
            <img
              src={logoUfop.url}
              alt="Universidade Federal de Ouro Preto"
              className="h-28 w-auto shrink-0 object-contain md:hidden"
              loading="lazy"
            />
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-copper">Local</h4>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
              Instituto de Ciências Exatas e Biológicas (ICEB)
              <br />
              Campus Universitário Morro do Cruzeiro
              <br />
              Universidade Federal de Ouro Preto (UFOP)
              <br />
              Ouro Preto — MG
            </p>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex-1">
              <h4 className="text-xs uppercase tracking-[0.2em] text-copper">Data</h4>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                12 e 13 de novembro de 2026
              </p>
              <h4 className="mt-6 text-xs uppercase tracking-[0.2em] text-copper">Contato</h4>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                <a href="mailto:stemsao@ufop.edu.br" className="underline-offset-4 hover:underline">
                  stemsao@ufop.edu.br
                </a>
              </p>
            </div>
            <img
              src={logoUfop.url}
              alt="Universidade Federal de Ouro Preto"
              className="hidden h-40 w-auto self-stretch object-contain md:block"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <p>© 2026 STEMsão · UFOP / ICEB. Todos os direitos reservados.</p>
          <p>Evento de extensão universitária.</p>
        </div>
      </div>
    </footer>
  );
}
