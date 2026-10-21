import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { Seta, SetaExterna } from "@/components/ui/Icons";
import { projetos } from "@/content/site";
import styles from "./Trabalho.module.css";

const outros = projetos.filter((p) => p.slug !== "studytrack");

const estadoRotulo: Record<string, string> = {
  "produção": "Em produção",
  "no ar": "No ar",
  "protótipo": "Protótipo",
  "open source": "Open source",
};

export default function Trabalho() {
  return (
    <section id="trabalho" className={`on-ink section ${styles.secao}`}>
      <div className="shell">
        <SectionHead
          indice="02"
          rotulo="Trabalho"
          titulo={<>Clientes reais, <em>no ar</em>.</>}
          lead="Dois sites comerciais entregues para clientes que pagaram por eles, um protótipo de hackathon e um projeto próprio aberto. Cada link abaixo leva ao que está publicado — não a uma captura minha."
        />

        <ul className={styles.lista}>
          {outros.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 60} className={styles.item}>
              <Link href={`/trabalho/${p.slug}`} className={styles.linhaLink}>
                <span className={styles.ordem}>{String(i + 1).padStart(2, "0")}</span>

                <span className={styles.conteudo}>
                  <span className={styles.cabeca}>
                    <h3 className={`h3 ${styles.nome}`}>{p.nome}</h3>
                    <span className={styles.estado} data-estado={p.estado}>
                      {estadoRotulo[p.estado]}
                    </span>
                  </span>

                  <span className={styles.meta}>
                    {p.tipo} · {p.ano}
                  </span>
                  <span className={styles.resumo}>{p.resumo}</span>

                  <span className={styles.tags}>
                    {p.stack.slice(0, 4).map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </span>
                </span>

                <span className={styles.visual} aria-hidden="true">
                  {p.imagem ? (
                    <Image
                      src={p.imagem}
                      alt=""
                      width={1600}
                      height={900}
                      sizes="(max-width: 900px) 100vw, 420px"
                      className={styles.thumb}
                    />
                  ) : (
                    <span className={styles.semImagem}>
                      <span className="label label--signal">open source</span>
                      <span className={styles.semImagemTexto}>{p.nome}</span>
                    </span>
                  )}
                </span>

                <span className={styles.seta} aria-hidden="true"><Seta size={18} /></span>
              </Link>

              <div className={styles.externos}>
                {p.links
                  .filter((l) => l.href.startsWith("http"))
                  .map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link ${styles.externo}`}
                    >
                      {l.rotulo} <SetaExterna size={12} />
                    </a>
                  ))}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
