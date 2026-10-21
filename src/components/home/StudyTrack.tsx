import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { Seta, SetaExterna } from "@/components/ui/Icons";
import { projetoPorSlug } from "@/content/site";
import styles from "./StudyTrack.module.css";

const st = projetoPorSlug("studytrack")!;

/**
 * A StudyTrack ganha a seção mais longa da home porque é a única evidência
 * que responde às três perguntas de uma vez: sabe construir, sabe vender e
 * sabe sustentar. O resto do trabalho aparece depois, em lista.
 */
export default function StudyTrack() {
  return (
    <section id="studytrack" className={`on-paper section ${styles.secao}`}>
      <div className="shell">
        <SectionHead
          indice="01"
          rotulo="Produto · cofundador"
          titulo={<>Um <em>SaaS B2B</em> que escolas pagam para usar.</>}
          lead={st.resumo}
        />

        {/* ---- o produto, em tela real ---- */}
        <Reveal className={styles.vitrine}>
          <figure className={styles.vitrineFig}>
            <span className={styles.quadro}>
              <Image
                src={st.imagem}
                alt={st.imagemAlt}
                width={1600}
                height={900}
                sizes="(max-width: 900px) 100vw, 1100px"
                className={styles.imagem}
              />
            </span>

            <figcaption className={styles.captura}>
              <span className="label">Painel do gestor</span>
              <span className={styles.capturaNota}>
                Captura de uma instância de demonstração — sem dado real de aluno.
              </span>
            </figcaption>
          </figure>

          <ul className={styles.numeros}>
            {st.destaques.map((d) => (
              <li key={d.rotulo} className={styles.numero}>
                <span className={styles.numeroValor}>{d.valor}</span>
                <span className={styles.numeroRotulo}>{d.rotulo}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---- problema / solução / papel ---- */}
        <div className={styles.texto}>
          <Reveal className={styles.bloco}>
            <h3 className={`label label--signal ${styles.blocoRotulo}`}>O problema</h3>
            <p className="prose">{st.problema}</p>
          </Reveal>

          <Reveal className={styles.bloco} delay={90}>
            <h3 className={`label label--signal ${styles.blocoRotulo}`}>A solução</h3>
            <p className="prose">{st.solucao}</p>
          </Reveal>

          <Reveal className={styles.bloco} delay={180}>
            <h3 className={`label label--signal ${styles.blocoRotulo}`}>O meu papel</h3>
            <p className="prose">{st.papel}</p>
          </Reveal>
        </div>

        <Reveal className={styles.pe}>
          <ul className={styles.stack} aria-label="Tecnologias da StudyTrack">
            {st.stack.map((t) => (
              <li key={t} className={styles.chip}>{t}</li>
            ))}
          </ul>

          <div className={styles.acoes}>
            <Link href="/trabalho/studytrack" className="btn btn--signal">
              Ler o case completo <Seta />
            </Link>
            <a
              href="https://www.studytrack.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Ver o produto no ar <SetaExterna />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
