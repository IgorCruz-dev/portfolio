import type { ReactNode } from "react";
import Reveal from "./Reveal";
import styles from "./SectionHead.module.css";

export default function SectionHead({
  indice,
  rotulo,
  titulo,
  lead,
  acao,
}: {
  indice: string;
  rotulo: string;
  titulo: ReactNode;
  lead?: ReactNode;
  acao?: ReactNode;
}) {
  return (
    <header className={styles.head}>
      <Reveal className={styles.topo}>
        <span className="index">{indice}</span>
        <span className="label">{rotulo}</span>
        <span className={styles.linha} aria-hidden="true" />
      </Reveal>

      <div className={styles.corpo}>
        <Reveal as="h2" className={`h2 ${styles.titulo}`} delay={80}>
          {titulo}
        </Reveal>
        {lead && (
          <Reveal className={`lead ${styles.lead}`} delay={160}>
            {lead}
          </Reveal>
        )}
      </div>

      {acao && <Reveal delay={220} className={styles.acao}>{acao}</Reveal>}
    </header>
  );
}
