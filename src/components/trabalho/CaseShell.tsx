import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Seta, SetaExterna } from "@/components/ui/Icons";
import type { Projeto } from "@/content/site";
import styles from "./CaseShell.module.css";

const estadoRotulo: Record<string, string> = {
  "produção": "Em produção",
  "no ar": "No ar",
  "protótipo": "Protótipo",
  "open source": "Open source",
};

/** Topo compartilhado por todas as páginas de case. */
export function CaseTopo({ p }: { p: Projeto }) {
  return (
    <header className={`on-ink ${styles.topo}`}>
      <div className="shell">
        <Reveal className={styles.volta}>
          <Link href="/#trabalho" className={`link ${styles.voltaLink}`}>
            <span className={styles.voltaSeta} aria-hidden="true"><Seta size={14} /></span>
            Todo o trabalho
          </Link>
        </Reveal>

        <Reveal as="h1" className={`display ${styles.titulo}`} delay={60}>
          {p.nome}
        </Reveal>

        <Reveal className={styles.meta} delay={120}>
          <span className={styles.estado} data-estado={p.estado}>{estadoRotulo[p.estado]}</span>
          <span className="label">{p.tipo}</span>
          <span className="label">{p.ano}</span>
        </Reveal>

        <Reveal className={`lead ${styles.lead}`} delay={180}>
          {p.resumo}
        </Reveal>

        {p.links.some((l) => l.href.startsWith("http")) && (
          <Reveal className={styles.acoes} delay={240}>
            {p.links
              .filter((l) => l.href.startsWith("http"))
              .map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${i === 0 ? "btn--signal" : "btn--ghost"}`}
                >
                  {l.rotulo} <SetaExterna size={13} />
                </a>
              ))}
          </Reveal>
        )}
      </div>
    </header>
  );
}

/** Blocos problema / solução / papel, idênticos em todos os cases. */
export function CaseNarrativa({ p }: { p: Projeto }) {
  const blocos = [
    { rotulo: "O problema", texto: p.problema },
    { rotulo: "A solução", texto: p.solucao },
    { rotulo: "O meu papel", texto: p.papel },
  ];

  return (
    <div className={styles.narrativa}>
      {blocos.map((b, i) => (
        <Reveal key={b.rotulo} delay={i * 80} className={styles.bloco}>
          <h2 className={`label label--signal ${styles.blocoRotulo}`}>{b.rotulo}</h2>
          <p className="prose">{b.texto}</p>
        </Reveal>
      ))}
    </div>
  );
}

/** Ficha técnica: números verificáveis + stack. */
export function CaseFicha({ p }: { p: Projeto }) {
  return (
    <Reveal className={styles.ficha}>
      {p.destaques.length > 0 && (
        <ul className={styles.numeros}>
          {p.destaques.map((d) => (
            <li key={d.rotulo}>
              <span className={styles.numeroValor}>{d.valor}</span>
              <span className={styles.numeroRotulo}>{d.rotulo}</span>
            </li>
          ))}
        </ul>
      )}

      <div className={styles.stackBloco}>
        <h2 className={`label ${styles.stackTitulo}`}>Stack</h2>
        <ul className={styles.stack}>
          {p.stack.map((t) => (
            <li key={t} className={styles.chip}>{t}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/** Navegação para o próximo case — evita que a página termine em beco sem saída. */
export function CaseProximo({ proximo }: { proximo: Projeto }) {
  return (
    <section className={`on-ink ${styles.proximo}`}>
      <Link href={`/trabalho/${proximo.slug}`} className={styles.proximoLink}>
        <div className="shell">
          <span className="label">Próximo projeto</span>
          <span className={`h2 ${styles.proximoNome}`}>
            {proximo.nome}
            <span className={styles.proximoSeta} aria-hidden="true"><Seta size={26} /></span>
          </span>
        </div>
      </Link>
    </section>
  );
}

export { styles as caseStyles };
