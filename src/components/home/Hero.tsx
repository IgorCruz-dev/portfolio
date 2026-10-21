"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lines from "@/components/ui/Lines";
import Reveal from "@/components/ui/Reveal";
import { Seta, WhatsApp } from "@/components/ui/Icons";
import { posicionamento, provas, whatsappLink } from "@/content/site";
import styles from "./Hero.module.css";

/**
 * O visual do hero é o próprio Igor apresentando o software que construiu.
 * Preferi isso a um retrato estático: resolve em dois segundos o que um
 * parágrafo levaria cinco para dizer — a pessoa fala em público, tem produto,
 * e o produto está projetado atrás dela.
 */
export default function Hero() {
  const palco = useRef<HTMLDivElement>(null);
  const [semMovimento, setSemMovimento] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplica = () => setSemMovimento(mq.matches);
    aplica();
    mq.addEventListener("change", aplica);
    return () => mq.removeEventListener("change", aplica);
  }, []);

  /* Paralaxe de ponteiro: escreve duas custom properties e deixa o CSS
     transformar. Sem re-render do React e sem layout — só compositor. */
  useEffect(() => {
    const el = palco.current;
    if (!el || semMovimento) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    const mover = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--px", x.toFixed(4));
        el.style.setProperty("--py", y.toFixed(4));
      });
    };

    window.addEventListener("pointermove", mover, { passive: true });
    return () => {
      window.removeEventListener("pointermove", mover);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [semMovimento]);

  return (
    <section className={`on-ink grain ${styles.hero}`} aria-labelledby="hero-titulo">
      <div className={styles.halo} aria-hidden="true" />

      <div className={`shell ${styles.grid}`}>
        {/* ---------------- coluna de texto ---------------- */}
        <div className={styles.copy}>
          <Reveal className={styles.eyebrow}>
            <span className="label label--signal">Engenheiro de software</span>
            <span className="label">São Joaquim da Barra · SP</span>
          </Reveal>

          <h1 id="hero-titulo" className="sr-only">
            Igor Cruz — engenheiro de software. Eu construo software que vai para
            produção e fica lá.
          </h1>

          <Lines
            aria-hidden="true"
            className={`display ${styles.titulo}`}
            delay={120}
            linhas={[
              posicionamento.linha1,
              <>
                para <em className={styles.enfase}>produção</em>
              </>,
              posicionamento.linha3,
            ]}
          />

          <Reveal delay={420} className="lead">
            {posicionamento.lead}
          </Reveal>

          <Reveal delay={520} className={styles.acoes}>
            <a href="#trabalho" className="btn btn--signal">
              Ver o trabalho <Seta />
            </a>
            <a
              href={whatsappLink(
                "Oi Igor, vi seu portfólio e queria conversar sobre um projeto.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <WhatsApp /> Falar comigo
            </a>
          </Reveal>

          <Reveal delay={620} as="ul" className={styles.provas}>
            {provas.map((p) => (
              <li key={p.rotulo} className={styles.prova}>
                <span className={styles.provaValor}>{p.valor}</span>
                <span className={styles.provaRotulo}>{p.rotulo}</span>
              </li>
            ))}
          </Reveal>
        </div>

        {/* ---------------- palco: o vídeo ---------------- */}
        <Reveal delay={260} className={styles.palcoWrap}>
          <div className={styles.palco} ref={palco}>
            <figure className={styles.moldura}>
              {semMovimento ? (
                <Image
                  src="/media/igor-pitch-poster.webp"
                  alt="Igor Cruz no palco, com microfone, apresentando o Memórias para uma plateia. Atrás dele, projetado, o painel da família."
                  width={576}
                  height={1024}
                  sizes="(max-width: 1040px) 320px, 420px"
                  priority
                  className={styles.video}
                />
              ) : (
                <video
                  className={styles.video}
                  src="/media/igor-pitch-loop.mp4"
                  poster="/media/igor-pitch-poster.webp"
                  width={576}
                  height={1024}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Igor Cruz apresentando o projeto Memórias no palco de um hackathon, com o painel do produto projetado atrás dele."
                />
              )}
              <div className={styles.vinheta} aria-hidden="true" />

              <figcaption className={styles.legenda}>
                <span className="label">Pitch · Memórias — APAE</span>
                <span className={styles.legendaSub}>Hackathon universitário, mai/2026</span>
              </figcaption>
            </figure>

            {/* artefato real sobreposto — estado do produto, não enfeite */}
            <div className={`glass ${styles.cartao}`} aria-hidden="true">
              <span className={styles.ponto} />
              <div>
                <p className={styles.cartaoTitulo}>studytrack.com.br</p>
                <p className={styles.cartaoSub}>em produção · clientes pagantes</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className={styles.rodape} aria-hidden="true">
        <span className="label">Role para ver o trabalho</span>
        <span className={styles.traco} />
      </div>
    </section>
  );
}
