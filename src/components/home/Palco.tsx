"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { lideranca } from "@/content/site";
import styles from "./Palco.module.css";

/**
 * O vídeo completo só é baixado se alguém pedir: 4,9MB não podem entrar no
 * caminho crítico de uma seção que a maioria vai apenas passar rolando.
 */
export default function Palco() {
  const [tocando, setTocando] = useState(false);

  return (
    <section id="lideranca" className={`on-ink section ${styles.secao}`}>
      <div className="shell">
        <SectionHead
          indice="04"
          rotulo="Liderança"
          titulo={<>Organizar, captar e <em>subir no palco</em>.</>}
          lead={lideranca.resumo}
        />

        <div className={styles.grade}>
          {/* ---- a prova visual: o pitch ---- */}
          <Reveal className={styles.principal}>
            <figure className={styles.quadro}>
              {tocando ? (
                <video
                  className={styles.midia}
                  src="/media/igor-pitch-full.mp4"
                  poster="/media/igor-pitch-poster.webp"
                  controls
                  autoPlay
                  playsInline
                  aria-label="Pitch completo do projeto Memórias, apresentado por Igor Cruz no hackathon"
                />
              ) : (
                <>
                  <Image
                    src="/media/igor-palco.webp"
                    alt="Igor Cruz de microfone na mão, no palco, com o painel do Memórias projetado atrás"
                    width={720}
                    height={1280}
                    sizes="(max-width: 900px) 100vw, 420px"
                    className={styles.midia}
                  />
                  <button type="button" className={styles.play} onClick={() => setTocando(true)}>
                    <span className={styles.playIcone} aria-hidden="true" />
                    Ver o pitch completo
                    <span className={styles.playDuracao} aria-hidden="true">56s · sem áudio</span>
                  </button>
                </>
              )}
            </figure>
            <figcaption className={styles.legenda}>
              <span className="label label--signal">{lideranca.cargo}</span>
              <span>
                Pitch do Memórias no último dia do hackathon. A tela projetada é o
                painel da família, do protótipo que a equipe construiu durante a semana.
              </span>
            </figcaption>
          </Reveal>

          {/* ---- o que o cargo significou na prática ---- */}
          <div className={styles.lateral}>
            <ol className={styles.frentes}>
              {lideranca.frentes.map((f, i) => (
                <Reveal as="li" key={f.titulo} delay={i * 90} className={styles.frente}>
                  <div className={styles.frenteTopo}>
                    <h3 className={`h3 ${styles.frenteTitulo}`}>{f.titulo}</h3>
                    <span className={styles.frenteDuracao}>{f.duracao}</span>
                  </div>
                  <p className="prose">{f.texto}</p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={200} className={styles.foto}>
              <Image
                src="/media/igor-evento.webp"
                alt="Igor Cruz de pé, falando durante uma atividade acadêmica em auditório, diante de colegas e convidados sentados"
                width={454}
                height={338}
                sizes="(max-width: 900px) 100vw, 420px"
                className={styles.fotoImg}
              />
              <span className={styles.fotoLegenda}>Atividade acadêmica na faculdade</span>
            </Reveal>

            <Reveal delay={260} className={styles.competencias}>
              <h3 className={`label ${styles.competenciasTitulo}`}>O que isso exigiu</h3>
              <ul className={styles.chips}>
                {lideranca.competencias.map((c) => (
                  <li key={c} className={styles.chip}>{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
