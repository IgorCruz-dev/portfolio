import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { trajetoria } from "@/content/site";
import styles from "./Trajetoria.module.css";

const faixas = [
  { id: "formação", rotulo: "Formação" },
  { id: "corporativo", rotulo: "Corporativo" },
  { id: "produto", rotulo: "Produto" },
] as const;

/**
 * A trajetória é mostrada em três faixas paralelas de propósito.
 *
 * Em lista cronológica comum, "cofundei um SaaS" e "fui aprendiz" viram dois
 * itens soltos. Em faixas, fica visível o que de fato impressiona: de out/2025
 * em diante há três coisas acontecendo ao mesmo tempo — faculdade, emprego em
 * tempo integral e um produto em produção.
 */
export default function Trajetoria() {
  return (
    <section id="trajetoria" className={`on-paper section ${styles.secao}`}>
      <div className="shell">
        <SectionHead
          indice="03"
          rotulo="Trajetória"
          titulo={<>Três coisas <em>ao mesmo tempo</em>.</>}
          lead="Fundei a StudyTrack em outubro de 2025 — o mesmo mês em que comecei na Vittia, nove meses depois de entrar na faculdade. O que esta seção mostra não é uma lista de cargos: é o que consegui sustentar em paralelo."
        />

        {/* cabeçalho das faixas — só desktop, onde as colunas existem */}
        <div className={styles.faixasTopo} aria-hidden="true">
          {faixas.map((f) => (
            <span key={f.id} className="label" data-faixa={f.id}>
              {f.rotulo}
            </span>
          ))}
        </div>

        <ol className={styles.linha}>
          {trajetoria.map((m, i) => (
            <Reveal
              as="li"
              key={`${m.organizacao}-${m.periodo}`}
              delay={i * 50}
              className={styles.item}
              data-faixa={m.trilha}
              data-destaque={m.destaque ? "true" : undefined}
            >
              <article className={styles.cartao}>
                <span className={styles.marcador} aria-hidden="true" />
                <p className={`label ${styles.periodo}`}>{m.periodo}</p>
                <h3 className={styles.titulo}>{m.titulo}</h3>
                <p className={styles.org}>{m.organizacao}</p>
                <p className={styles.texto}>{m.texto}</p>
                <p className={styles.faixaTag} aria-hidden="true">
                  {faixas.find((f) => f.id === m.trilha)?.rotulo}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
