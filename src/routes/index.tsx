import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Workshops } from "@/components/site/Workshops";
import heroImgAsset from "@/assets/hero-ouro-preto.jpg.asset.json";
import iceb1 from "@/assets/iceb1.jpg.asset.json";
import iceb2 from "@/assets/iceb2.jpg.asset.json";
import iceb3 from "@/assets/iceb3.jpg.asset.json";
import iceb4 from "@/assets/iceb4.jpg.asset.json";
import iceb5 from "@/assets/iceb5.jpg.asset.json";
import iceb6 from "@/assets/iceb6.jpg.asset.json";
import iceb7 from "@/assets/iceb7.jpg.asset.json";
import iceb8 from "@/assets/iceb8.jpg.asset.json";

import ctaImgAsset from "@/assets/cta-background-v2.png.asset.json";
import logoAsset from "@/assets/stemsao-2026.png.asset.json";
import logoUfop from "@/assets/logo-ufop-v3.png.asset.json";
import logoIceb from "@/assets/iceb.png.asset.json";
import logoPrefeitura from "@/assets/prefeitura_ouro_preto.png.asset.json";
const heroImg = heroImgAsset.url;
const ctaImg = ctaImgAsset.url;
const logoImg = logoAsset.url;
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
    name: "Profª. Sandra Nogueira",
    role: "UFOP / MEC",
    bio: "Pesquisadora e gestora com atuação na UFOP e no Ministério da Educação, dedicada à extensão universitária e à inclusão de meninas e mulheres nas áreas STEM.",
    img: speaker1,
  },
  {
    name: "Profª. Andrea Campos",
    role: "Docente da UFOP",
    bio: "Cientista da computação da UFOP com ênfase em processamento e análise de imagens, visão computacional e aprendizado de máquina, aplicados a imagens de materiais, células e processos industriais.",
    img: speaker4,
  },
  {
    name: "Profª. Rita Mesquita",
    role: "Pesquisadora do INPA",
    bio: "Bióloga do Instituto Nacional de Pesquisas da Amazônia com longa trajetória em conservação, biodiversidade e políticas ambientais, tendo atuado no Ministério do Meio Ambiente.",
    img: speaker3,
  },
  {
    name: "Profª. Gabrielle Weber",
    role: "Pesquisadora da USP",
    bio: "Pesquisadora da Universidade de São Paulo com atuação nas áreas de ciência, tecnologia e inovação, e engajamento em ações de divulgação científica.",
    img: speaker2,
  },
  {
    name: "Profª. Fernanda Staniscuaski",
    role: "Docente da UFRGS",
    bio: "Pesquisadora da UFRGS e fundadora do movimento Parent in Science, referência nacional na discussão sobre maternidade e carreira na ciência.",
    img: speaker1,
  },
  {
    name: "Profª. Roberta Eliane Santos Froes",
    role: "Docente da UFOP",
    bio: "Pesquisadora da UFOP na área de química, com trabalhos em química analítica e ambiental, aliados à gestão universitária, ensino e extensão.",
    img: speaker3,
  },
  {
    name: "Profª. Giovanna Machado",
    role: "Pesquisadora do CETENE/MCTI",
    bio: "Pesquisadora do Centro de Tecnologias Estratégicas do Nordeste (CETENE/MCTI), com atuação em nanotecnologia e materiais avançados aplicados à saúde e à agricultura.",
    img: speaker2,
  },
];

const organizers = [
  {
    name: "Instituto de Ciências Exatas e Biológicas — ICEB",
    text: "O Instituto de Ciências Exatas e Biológicas da UFOP é responsável pela organização e execução do evento, promovendo conhecimento e pesquisa científica.",
    logo: logoIceb,
    logoAlt: "ICEB",
  },
  {
    name: "Universidade Federal de Ouro Preto — UFOP",
    text: "A Universidade Federal de Ouro Preto proporciona infraestrutura e recursos para o evento, reforçando seu compromisso com a difusão do conhecimento.",
    logo: logoUfop,
    logoAlt: "UFOP",
  },
  {
    name: "Prefeitura de Ouro Preto",
    text: "Apoia o evento reconhecendo a importância da educação científica para o desenvolvimento local e o engajamento da comunidade.",
    logo: logoPrefeitura,
    logoAlt: "Prefeitura de Ouro Preto",
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
        <Workshops />
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
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="order-2 max-w-3xl lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" />
              12 e 13 de novembro · 2026 · Ouro Preto/MG
            </div>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.98] text-primary-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              STEM<span className="text-gradient-copper">são</span>
              <span className="mt-3 block font-sans text-xl font-medium uppercase tracking-[0.24em] text-primary-foreground/80 sm:text-2xl">
                Ciências para todas as pessoas
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-justify text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Um evento gratuito de extensão universitária com dois dias de encontro
              entre a universidade e a comunidade de Ouro Preto e Mariana: palestras
              magnas, oficinas práticas e uma celebração das mulheres na ciência,
              na tecnologia, na engenharia e na matemática.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-copper-foreground shadow-[var(--shadow-soft)] transition-all hover:brightness-110"
              >
                Inscreva-se já
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/90 backdrop-blur transition-colors hover:bg-primary-foreground/10"
              >
                Conheça o evento
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-self-end">
            <img
              src={logoImg}
              alt="Logo do STEMsão"
              className="w-full max-w-[18rem] drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:max-w-[20rem] lg:max-w-[26rem]"
              loading="eager"
            />
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
          <p className="mt-6 text-justify text-base leading-relaxed text-foreground/80 md:text-lg">
            O STEMsão é um evento gratuito que oferece uma plataforma para a
            troca de conhecimento em ciências, tecnologia, engenharia e
            matemática. Com palestras de figuras renomadas e atividades
            práticas, buscamos envolver a comunidade acadêmica e escolar local.
          </p>
          <p className="mt-4 text-justify text-base leading-relaxed text-foreground/80 md:text-lg">
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

        <SobreCarousel />

      </div>
    </section>
  );
}

const sobreFotos = [
  { src: iceb1.url, alt: "Estudantes observando amostras em microscópios" },
  { src: iceb2.url, alt: "Pesquisadora apresentando material biológico a crianças" },
  { src: iceb3.url, alt: "Demonstração de realidade virtual no laboratório de computação" },
  { src: iceb4.url, alt: "Visitante observando amostra em microscópio" },
  { src: iceb5.url, alt: "Monitora demonstrando experimento no ICEB" },
  { src: iceb6.url, alt: "Oficina de química com estudantes" },
  { src: iceb7.url, alt: "Estudantes em fila usando microscópios" },
  { src: iceb8.url, alt: "Atividade interativa com jogos no evento" },
];

function SobreCarousel() {
  const [index, setIndex] = useState(0);
  const total = sobreFotos.length;
  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-copper/15 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
        <div className="aspect-[1408/1008] w-full">
          {sobreFotos.map((foto, i) => (
            <img
              key={foto.src}
              src={foto.src}
              alt={foto.alt}
              className={
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 " +
                (i === index ? "opacity-100" : "opacity-0")
              }
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Foto anterior"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 p-3 text-primary shadow-[var(--shadow-card)] backdrop-blur transition-transform hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Próxima foto"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 p-3 text-primary shadow-[var(--shadow-card)] backdrop-blur transition-transform hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {sobreFotos.map((foto, i) => (
            <button
              key={foto.src}
              type="button"
              aria-label={`Ir para a foto ${i + 1}`}
              onClick={() => setIndex(i)}
              className={
                "h-2 rounded-full transition-all " +
                (i === index ? "w-6 bg-copper" : "w-2 bg-card/70 hover:bg-card")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}



/* ---------------- PROGRAMAÇÃO ---------------- */
const schedule = [
  {
    day: "Dia 1",
    date: "12 de novembro (quinta-feira)",
    theme: "Ciência para todos",
    items: [
      {
        time: "9h",
        title: "Abertura oficial",
        detail:
          "Profª. Patrícia de Abreu Moreira; Profª. Sandra Nogueira; Profª. Cláudia Carneiro; Profª. Roberta Eliane Santos Froes; Profª. Deborah Etrusco; Prof. Luiz Gustavo (FAPEMIG).",
      },
      {
        time: "9h30",
        title: "Palestra — Profª. Sandra Nogueira (UFOP/MEC)",
        detail: "Título a ser confirmado.",
      },
      { time: "10h30", title: "Intervalo" },
      {
        time: "11h",
        title: "Palestra — Profª. Andrea Campos (UFOP)",
        detail: "Título a ser confirmado.",
      },
      { time: "12h", title: "Intervalo" },
      {
        time: "13h30",
        title: "Palestra — Profª. Rita Mesquita (INPA)",
        detail: "Título a ser confirmado.",
      },
      {
        time: "14h15",
        title: "Oficinas — Experimentando Ciência",
        detail: "Atividades práticas para estudantes do Ensino Fundamental (8º e 9º anos).",
      },
      { time: "16h", title: "Intervalo" },
      {
        time: "17h",
        title: "Palestra — Profª. Gabrielle Weber (USP)",
        detail: "Título a ser confirmado.",
      },
      { time: "18h", title: "Intervalo" },
      {
        time: "19h",
        title: "Palestra — Profª. Fernanda Staniscuaski (UFRGS)",
        detail: "Título a ser confirmado.",
      },
    ],
  },
  {
    day: "Dia 2",
    date: "13 de novembro (sexta-feira)",
    theme: "Ciência que transforma",
    items: [
      {
        time: "9h",
        title: "Palestra — Profª. Roberta Eliane Santos Froes (UFOP)",
        detail: "Título a ser confirmado.",
      },
      {
        time: "10h",
        title: "Palestra — Profª. Giovanna Machado (CETENE/MCTI)",
        detail: "Título a ser confirmado.",
      },
      {
        time: "11h",
        title: "Intervalo com sessão de pôsteres",
      },
      { time: "12h", title: "Intervalo" },
      {
        time: "13h30",
        title: "Oficinas — Experimentando Ciência",
        detail: "Atividades práticas para estudantes do Ensino Médio.",
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
          <div className="text-sm font-bold uppercase tracking-[0.24em] text-copper">
            Programação
          </div>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Dois dias intensos de ciência</h2>
          <p className="mt-4 text-lg text-primary-foreground/85">
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
                <div className="font-display text-4xl font-extrabold text-copper">{d.day}</div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  {d.date}
                </div>
              </div>
              <h3 className="mt-4 text-2xl font-bold md:text-3xl">{d.theme}</h3>
              <ul className="mt-6 space-y-5 text-base text-primary-foreground/85">
                {d.items.map((item) => (
                  <li key={item.time + item.title} className="flex items-start gap-4">
                    <span className="inline-flex h-8 w-[5rem] shrink-0 items-center justify-center self-start rounded-full bg-copper text-base font-bold tracking-wide text-copper-foreground">
                      {item.time}
                    </span>
                    <div className="flex-1">
                      <div className="text-lg font-bold text-primary-foreground">{item.title}</div>
                      {item.detail && (
                        <p className="mt-1 text-base leading-relaxed text-primary-foreground/75">
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-speaker-card]");
    const delta = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

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

        <div className="relative mt-14">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollBy(-1)}
            className="absolute -left-2 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card p-3 text-primary shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1/2 hover:scale-105 lg:-left-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollBy(1)}
            className="absolute -right-2 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card p-3 text-primary shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1/2 hover:scale-105 lg:-right-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {speakers.map((s) => (
              <article
                key={s.name}
                data-speaker-card
                className="group flex w-[calc(100%-1rem)] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1 sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
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
                  <h3 className="font-serif text-xl font-black leading-snug text-primary">
                    {s.name}
                  </h3>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-copper">
                    {s.role}
                  </div>
                  <p className="mt-3 text-justify text-sm leading-relaxed text-muted-foreground">
                    {s.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
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
              <div className="flex items-start justify-between">
                <div className="font-display text-6xl text-copper/40">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <img
                  src={o.logo.url}
                  alt={o.logoAlt}
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-display text-2xl text-primary">{o.name}</h3>
              <p className="mt-3 text-justify text-sm leading-relaxed text-foreground/75">
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
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_60%]"
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
          Garanta sua vaga e faça parte do STEMsão
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
