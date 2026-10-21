import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import {
  CaseTopo, CaseNarrativa, CaseFicha, CaseProximo,
} from "@/components/trabalho/CaseShell";
import { projetoPorSlug, studytrackCase } from "@/content/site";
import styles from "./page.module.css";

const p = projetoPorSlug("studytrack")!;
const proximo = projetoPorSlug("branco-zanol")!;

export const metadata: Metadata = {
  title: "StudyTrack — SaaS B2B para instituições de ensino",
  description: p.resumo,
  alternates: { canonical: "/trabalho/studytrack" },
  openGraph: {
    title: "StudyTrack — case de produto · Igor Cruz",
    description: p.resumo,
    images: [{ url: p.imagem }],
  },
};

export default function StudyTrackCase() {
  return (
    <>
      <Nav />
      <main id="conteudo">
        <CaseTopo p={p} />

        {/* ---- contexto de mercado ---- */}
        <section className={`on-paper section ${styles.contexto}`}>
          <div className="shell">
            <Reveal className={styles.contextoGrade}>
              <h2 className={`label label--signal`}>O contexto</h2>
              <p className={`prose ${styles.contextoTexto}`}>{studytrackCase.contexto}</p>
            </Reveal>
          </div>
        </section>

        {/* ---- telas reais ---- */}
        <section className={`on-ink section ${styles.telas}`}>
          <div className="shell">
            <SectionHead
              indice="01"
              rotulo="O produto"
              titulo={<>O que as duas pontas <em>enxergam</em>.</>}
              lead="A escola e o aluno usam o mesmo sistema por motivos diferentes. Abaixo, as telas reais — capturadas de uma instância de demonstração, sem dado de aluno."
            />

            <div className={styles.telasGrade}>
              {studytrackCase.telas.map((t, i) => (
                <Reveal key={t.src} delay={i * 70} className={styles.tela}>
                  <figure className={styles.telaFig}>
                    <span className={styles.telaQuadro}>
                      <Image
                        src={t.src}
                        alt={t.alt}
                        width={1600}
                        height={900}
                        sizes="(max-width: 900px) 100vw, 640px"
                        className={styles.telaImg}
                      />
                    </span>
                    <figcaption className={styles.telaLegenda}>
                      <h3 className={styles.telaTitulo}>{t.titulo}</h3>
                      <p className={styles.telaTexto}>{t.texto}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- narrativa + ficha ---- */}
        <section className={`on-paper section ${styles.corpo}`}>
          <div className="shell">
            <CaseNarrativa p={p} />
            <CaseFicha p={p} />
          </div>
        </section>

        {/* ---- arquitetura ---- */}
        <section className={`on-ink section ${styles.arq}`}>
          <div className="shell">
            <SectionHead
              indice="02"
              rotulo="Arquitetura"
              titulo={<>Como o sistema está <em>montado</em>.</>}
            />
            <ol className={styles.arqLista}>
              {studytrackCase.arquitetura.map((a, i) => (
                <Reveal as="li" key={a.camada} delay={i * 60} className={styles.arqItem}>
                  <span className={styles.arqNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.arqCamada}>{a.camada}</h3>
                  <p className={styles.arqTexto}>{a.texto}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---- desafios ---- */}
        <section className={`on-paper section ${styles.desafios}`}>
          <div className="shell">
            <SectionHead
              indice="03"
              rotulo="Decisões difíceis"
              titulo={<>Os quatro problemas que <em>deram trabalho</em>.</>}
              lead="Nenhum deles é sobre escolher framework. Todos apareceram depois que o produto tinha gente usando."
            />
            <div className={styles.desafiosGrade}>
              {studytrackCase.desafios.map((d, i) => (
                <Reveal key={d.titulo} delay={i * 70} className={styles.desafio}>
                  <h3 className={`h3 ${styles.desafioTitulo}`}>{d.titulo}</h3>
                  <p className="prose">{d.texto}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CaseProximo proximo={proximo} />
      </main>
      <Footer />
    </>
  );
}
