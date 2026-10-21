import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import {
  CaseTopo, CaseNarrativa, CaseFicha, CaseProximo, caseStyles,
} from "@/components/trabalho/CaseShell";
import { projetos, projetoPorSlug } from "@/content/site";
import styles from "./page.module.css";

/* A StudyTrack tem página própria, mais longa — fica de fora desta rota. */
const outros = projetos.filter((p) => p.slug !== "studytrack");

export function generateStaticParams() {
  return outros.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
): Promise<Metadata> {
  const p = projetoPorSlug(params.slug);
  if (!p) return {};
  return {
    title: p.nome,
    description: p.resumo,
    alternates: { canonical: `/trabalho/${p.slug}` },
    openGraph: {
      title: `${p.nome} — Igor Cruz`,
      description: p.resumo,
      images: p.imagem ? [{ url: p.imagem }] : undefined,
    },
  };
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const p = projetoPorSlug(params.slug);
  if (!p || p.slug === "studytrack") notFound();

  const indice = outros.findIndex((o) => o.slug === p.slug);
  const proximo = outros[(indice + 1) % outros.length];

  return (
    <>
      <Nav />
      <main id="conteudo">
        <CaseTopo p={p} />

        {p.imagem && (
          <section className={`on-ink ${styles.vitrine}`}>
            <div className="shell">
              <Reveal>
                <figure className={styles.fig}>
                  <span className={styles.quadro}>
                    <Image
                      src={p.imagem}
                      alt={p.imagemAlt}
                      width={1600}
                      height={900}
                      sizes="(max-width: 900px) 100vw, 1300px"
                      className={styles.imagem}
                      priority
                    />
                  </span>
                  {p.imagemLegenda && (
                    <figcaption className={styles.legenda}>{p.imagemLegenda}</figcaption>
                  )}
                </figure>
              </Reveal>
            </div>
          </section>
        )}

        <section className={`on-paper section ${styles.corpo}`}>
          <div className="shell">
            <CaseNarrativa p={p} />
            <CaseFicha p={p} />
          </div>
        </section>

        <CaseProximo proximo={proximo} />
      </main>
      <Footer />
    </>
  );
}

export const dynamicParams = false;
