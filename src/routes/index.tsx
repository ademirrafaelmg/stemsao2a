import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import heroImgAsset from "@/assets/hero-ouro-preto.jpg.asset.json";
import sobreImg from "@/assets/section-sobre.jpg";
import ctaImgAsset from "@/assets/cta-background.jpg.asset.json";
const heroImg = heroImgAsset.url;
const ctaImg = ctaImgAsset.url;
import speaker1 from "@/assets/speaker-placeholder-1.jpg";
import speaker2 from "@/assets/speaker-placeholder-2.jpg";
import speaker3 from "@/assets/speaker-placeholder-3.jpg";
import speaker4 from "@/assets/speaker-placeholder-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STEMsão 2026 · Evento de Extensão UFOP/ICEB · 12 e 13 de novembro" },
      {
        name: "description",
        content:
          "STEMsão é um evento gratuito de ciência, tecnologia, engenharia e matemática promovido pelo ICEB — Universidade Federal de Ouro Preto. 12 e 13 de novembro de 2026, em Ouro Preto/MG.",
      },
      { property: "og:title", content: "STEMsão 2026 · Evento de Extensão UFOP/ICEB · 12 e 13 de novembro" },
      {
        property: "og:description",
        content:
          "STEMsão é um evento gratuito de ciência, tecnologia, engenharia e matemática promovido pelo ICEB — Universidade Federal de Ouro Preto. 12 e 13 de novembro de 2026, em Ouro Preto/MG.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "STEMsão 2026 · Evento de Extensão UFOP/ICEB · 12 e 13 de novembro" },
      {
        name: "twitter:description",
        content:
          "STEMsão é um evento gratuito de ciência, tecnologia, engenharia e matemática promovido pelo ICEB — Universidade Federal de Ouro Preto. 12 e 13 de novembro de 2026, em Ouro Preto/MG.",
      },
    ],
  }),
  component: Index,
});

const speakers = [
  {
    name: "Profª. Denise Carvalho",
    role: "Presidenta da CAPES",
    bio: "Presidenta da CAPES, com vasta experiência em políticas educacionais e ampla atuação pela inclusão de mulheres nas áreas STEM.",
    img: speaker1,
  },
  {
    name: "Profª. Márcia Barbosa",
    role: "Reitora da UFRGS",
    bio: "Especialista em Ciência da Água, seu trabalho aborda desde a Era do Gelo até a Nanociência, com reconhecimento internacional.",
    img: speaker2,
  },
  {
    name: "Profª. Rita Mesquita",
    role: "MMA · INPA",
    bio: "Bióloga do Instituto Nacional de Pesquisas da Amazônia com longa trajetória em conservação, biodiversidade e políticas ambientais, tendo atuado no Ministério do Meio Ambiente.",
    img: speaker3,
  },
  {
    name: "Profª. Andrea Gomes Campos",
    role: "Docente da UFOP",
    bio: "Desenvolve pesquisas em áreas interdisciplinares, contribuindo para a educação científica local e a formação de novas gerações.",
    img: speaker4,
  },
  {
    name: "Profª. Tatiana Sampaio",
    role: "Docente da UFRJ",
    bio: "Pesquisadora da Universidade Federal do Rio de Janeiro, com produção acadêmica voltada à divulgação científica e à formação de estudantes em ciência e tecnologia.",
    img: speaker1,
  },
  {
    name: "Profª. Deborah Malta",
    role: "Pesquisadora da UFMG",
    bio: "Referência em saúde coletiva e epidemiologia, com atuação destacada em vigilância de doenças crônicas e promoção da saúde no Brasil.",
    img: speaker2,
  },
  {
    name: "Profª. Roberta Fróes",
    role: "Vice-reitora da UFOP",
    bio: "Vice-reitora da Universidade Federal de Ouro Preto, com trajetória dedicada à gestão universitária, ensino e extensão em ciência e educação.",
    img: speaker3,
  },
];

const organizers = [
  {
    name: "Instituto de Ciências Exatas e Biológicas — ICEB",
    text: "O Instituto de Ciências Exatas e Biológicas da UFOP é responsável pela organização e execução do evento, promovendo conhecimento e pesquisa científica.",
  },
  {
    name: "Universidade Federal de Ouro Preto — UFOP",
    text: "A Universidade Federal de Ouro Preto proporciona infraestrutura e recursos para o evento, reforçando seu compromisso com a difusão do conhecimento.",
  },
  {
    name: "Prefeitura de Ouro Preto",
    text: "Apoia o evento reconhecendo a importância da educação científica para o desenvolvimento local e o engajamento da comunidade.",
  },
];

function Index() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Programacao />
        <Palestrantes />
        <Organizacao />
        <CTA />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={heroImg}
        alt="Vista de Ouro Preto ao entardecer"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        width={1920}
        height={1088}
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_transparent,_color-mix(in_oklab,var(--purple-deep)_60%,transparent)_75%)]" />

      <div className="container-narrow relative flex min-h-[92vh] flex-col justify-end pb-16 pt-40 md:pb-24 md:pt-44">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-copper" />
            12 e 13 de novembro · 2026 · Ouro Preto/MG
          </div>
          <h1 className="mt-6 font-display text-5xl leading-[0.98] text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            STEM<span className="text-gradient-copper">são</span>
            <span className="mt-3 block font-sans text-lg font-medium uppercase tracking-[0.24em] text-primary-foreground/80 sm:text-xl">
              Ciências para todas as pessoas
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Um evento gratuito de extensão universitária com dois dias de encontro
            entre a universidade e a comunidade de Ouro Preto e Mariana: palestras
            magnas, oficinas práticas e uma celebração das mulheres na ciência,
            na tecnologia, na engenharia e na matemática.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-full bg-copper px-7 py-4 font-display text-sm uppercase tracking-[0.18em] text-copper-foreground shadow-[var(--shadow-soft)] transition-all hover:brightness-110"
            >
              Inscreva-se já
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-4 text-sm font-medium text-primary-foreground/90 backdrop-blur transition-colors hover:bg-primary-foreground/10"
            >
              Conheça o evento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOBRE ---------------- */
function Sobre() {
  return (
    <section id="sobre" className="surface-cream py-24 md:py-32">
      <div className="container-narrow grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
            Sobre o evento
          </div>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">
            Conheça o STEMsão
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
            O STEMsão é um evento gratuito que oferece uma plataforma para a
            troca de conhecimento em ciências, tecnologia, engenharia e
            matemática. Com palestras de figuras renomadas e atividades
            práticas, buscamos envolver a comunidade acadêmica e escolar local.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
            O evento visa estimular o interesse de jovens por carreiras
            científicas e tecnológicas — com atenção especial à presença de
            mulheres nas áreas STEM.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: "10+", l: "Palestrantes" },
              { n: "500+", l: "Participantes" },
              { n: "2", l: "Dias de evento" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-card px-4 py-5 text-left shadow-[var(--shadow-card)]"
              >
                <dt className="font-display text-3xl text-primary md:text-4xl">
                  {s.n}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-copper/15 blur-2xl" />
          <img
            src={sobreImg}
            alt="Ilustração abstrata representando ciência e diversidade"
            className="w-full rounded-3xl border border-border shadow-[var(--shadow-soft)]"
            width={1408}
            height={1008}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROGRAMAÇÃO ---------------- */
const schedule = [
  {
    day: "Dia 1",
    date: "12 de novembro",
    theme: "Ciência para todos",
    items: [
      {
        time: "9h",
        title: "Abertura oficial",
        detail:
          "Profª. Patrícia (Diretora do ICEB); Profª. Denise Carvalho (Presidenta da CAPES); Profª. Sandra Nogueira (CG Extensão/SESU/MEC); Profª. Roberta Fróes (Vice-reitora da UFOP); Profª. Débora Etrusco (Secretária de Educação da PMOP).",
      },
      {
        time: "9h30",
        title: "Palestra magna — Profª. Denise Carvalho (CAPES)",
        detail: "“Mulheres e meninas em STEM”.",
      },
      { time: "10h30", title: "Intervalo" },
      {
        time: "11h",
        title: "Palestra — Profª. Márcia Barbosa (Reitora da UFRGS)",
        detail: "“Água: da Era do Gelo à Nanociência”.",
      },
      { time: "12h", title: "Intervalo" },
      {
        time: "13h30",
        title: "Palestra — Profª. Rita Mesquita (MMA / INPA)",
        detail: "Título a ser confirmado.",
      },
      {
        time: "14h15",
        title: "Experimentando Ciência",
        detail: "Oficinas práticas para estudantes do Ensino Médio.",
      },
      { time: "16h", title: "Intervalo" },
      {
        time: "17h",
        title: "Palestra — Profª. Andrea Gomes Campos (UFOP)",
        detail: "Título a ser confirmado.",
      },
      { time: "18h", title: "Intervalo" },
      {
        time: "19h",
        title: "Palestra — Profª. Tatiana Sampaio (UFRJ)",
        detail: "Título a ser confirmado.",
      },
    ],
  },
  {
    day: "Dia 2",
    date: "13 de novembro",
    theme: "Ciência que transforma",
    items: [
      {
        time: "9h",
        title: "Palestra — Profª. Deborah Malta (UFMG)",
        detail: "Convidada.",
      },
      {
        time: "9h45",
        title: "Palestra — Profª. Roberta Fróes (Vice-reitora da UFOP)",
        detail: "Título a ser anunciado. Confirmada.",
      },
      {
        time: "10h30",
        title: "Intervalo com sessão de pôsteres",
        detail: "Trabalhos selecionados no Encontro de Saberes 2026.",
      },
      { time: "12h", title: "Intervalo" },
      {
        time: "13h30",
        title: "Experimentando Ciência",
        detail: "Oficinas voltadas para estudantes do Ensino Fundamental (8º e 9º anos).",
      },
      { time: "17h", title: "Encerramento" },
    ],
  },
];

function Programacao() {
  return (
    <section id="programacao" className="surface-plate py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
            Programação
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl">Dois dias intensos de ciência</h2>
          <p className="mt-4 text-primary-foreground/80">
            Palestras magnas, mesas-redondas e oficinas práticas nos dias 12 e
            13 de novembro. Programação sujeita a pequenas alterações.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {schedule.map((d) => (
            <article
              key={d.day}
              className="group relative overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur transition-all hover:bg-primary-foreground/10"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-display text-3xl text-copper">{d.day}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                  {d.date}
                </div>
              </div>
              <h3 className="mt-4 text-2xl">{d.theme}</h3>
              <ul className="mt-6 space-y-4 text-sm text-primary-foreground/85">
                {d.items.map((item) => (
                  <li key={item.time + item.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex min-w-[3.5rem] justify-center rounded-full bg-copper/20 px-2 py-1 font-display text-[11px] font-semibold tracking-wide text-copper">
                      {item.time}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-primary-foreground">{item.title}</div>
                      {item.detail && (
                        <p className="mt-1 text-xs leading-relaxed text-primary-foreground/70">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- PALESTRANTES ---------------- */
function Palestrantes() {
  return (
    <section id="palestrantes" className="surface-cream py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
            Palestrantes
          </div>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">
            Pesquisadoras que inspiram
          </h2>
          <p className="mt-4 text-foreground/75">
            Conheça algumas das mulheres cientistas confirmadas no STEMsão 2026.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={s.img}
                  alt={`Ilustração representando ${s.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={912}
                  height={1104}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-primary">{s.name}</h3>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-copper">
                  {s.role}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ORGANIZAÇÃO ---------------- */
function Organizacao() {
  return (
    <section id="organizacao" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
            Organização
          </div>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">
            Quem faz o STEMsão acontecer
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {organizers.map((o, i) => (
            <article
              key={o.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-copper/10 blur-2xl transition-all group-hover:bg-copper/20" />
              <div className="font-display text-6xl text-copper/40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-2xl text-primary">{o.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {o.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImg}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        width={1920}
        height={912}
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-[color:color-mix(in_oklab,var(--purple-deep)_82%,transparent)]" />
      <div className="container-narrow py-24 text-center md:py-32">
        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
          Não perca
        </div>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl text-primary-foreground md:text-6xl">
          Garanta seu ingresso e faça parte do STEMsão
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
          Participe deste evento transformador em Ouro Preto e amplie seus
          horizontes na ciência. As inscrições são gratuitas.
        </p>
        <a
          href="#contato"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-copper px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-copper-foreground shadow-[var(--shadow-soft)] transition-all hover:brightness-110"
        >
          Inscreva-se já →
        </a>
      </div>
    </section>
  );
}

/* ---------------- CONTATO ---------------- */
function Contato() {
  return (
    <section id="contato" className="surface-cream py-24 md:py-32">
      <div className="container-narrow grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-copper">
            Fale conosco
          </div>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">
            Tem alguma pergunta?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/80">
            Envie sua mensagem para a organização do STEMsão. Retornaremos pelo
            e-mail informado.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
                E-mail
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:stemsao@ufop.edu.br"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  stemsao@ufop.edu.br
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
                Local
              </dt>
              <dd className="mt-1 leading-relaxed text-foreground/80">
                Instituto de Ciências Exatas e Biológicas (ICEB)
                <br />
                Campus Morro do Cruzeiro — UFOP
                <br />
                Ouro Preto — MG
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
                Data
              </dt>
              <dd className="mt-1 font-medium text-foreground">
                12 e 13 de novembro de 2026
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
