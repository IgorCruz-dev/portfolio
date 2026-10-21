import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { SetaExterna } from "@/components/ui/Icons";
import { principios, stack } from "@/content/site";
import styles from "./Principios.module.css";

export default function Principios() {
  return (
    <section id="metodo" className={`on-paper section ${styles.secao}`}>
      <div className="shell">
        <SectionHead
          indice="05"
          rotulo="Como eu trabalho"
          titulo={<>Três regras, com <em>prova</em> de cada uma.</>}
          lead="Qualquer pessoa pode dizer que escreve código limpo. Abaixo, cada princípio vem com o lugar onde você pode conferir se é verdade."
        />

        <ol className={styles.lista}>
          {principios.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={i * 80} className={styles.item}>
              <span className={styles.numero} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`h3 ${styles.titulo}`}>{p.titulo}</h3>
              <p className="prose">{p.texto}</p>

              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`link ${styles.prova}`}
                >
                  {p.prova} <SetaExterna size={12} />
                </a>
              ) : (
                <span className={styles.prova}>{p.prova}</span>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal className={styles.stackBloco}>
          <h3 className={`label ${styles.stackTitulo}`}>Com o que eu construo</h3>
          <dl className={styles.stackGrade}>
            {Object.entries(stack).map(([grupo, itens]) => (
              <div key={grupo} className={styles.stackGrupo}>
                <dt className={styles.stackRotulo}>{grupo}</dt>
                <dd className={styles.stackItens}>
                  {itens.map((t) => (
                    <span key={t} className={styles.stackItem}>{t}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
