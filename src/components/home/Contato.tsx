import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { GitHub, LinkedIn, SetaExterna, WhatsApp } from "@/components/ui/Icons";
import { perfil, whatsappLink } from "@/content/site";
import styles from "./Contato.module.css";

/**
 * Três portas, porque chegam três públicos com perguntas diferentes.
 * Cada uma leva ao mesmo canal, mas com a mensagem já escrita — tira do
 * visitante o custo de formular o primeiro contato.
 */
const portas = [
  {
    rotulo: "Recrutamento",
    titulo: "Estou avaliando você para uma vaga",
    texto: "Posso mandar o currículo e falar sobre disponibilidade, stack e o que já entreguei.",
    cta: "Falar sobre a vaga",
    mensagem:
      "Oi Igor, sou recrutador(a) e queria conversar sobre uma oportunidade. Pode me mandar seu currículo?",
  },
  {
    rotulo: "Projeto",
    titulo: "Quero um site ou sistema",
    texto: "Me conta o problema. Se eu não for a pessoa certa, digo isso logo em vez de aceitar e enrolar.",
    cta: "Conversar sobre o projeto",
    mensagem:
      "Oi Igor, vi seu portfólio e queria conversar sobre um projeto de site/sistema.",
  },
  {
    rotulo: "StudyTrack",
    titulo: "Represento uma instituição de ensino",
    texto: "Dá para agendar uma demonstração da plataforma com a marca da sua escola.",
    cta: "Ver a StudyTrack",
    href: "https://www.studytrack.com.br",
  },
];

export default function Contato() {
  return (
    <section id="contato" className={`on-ink section ${styles.secao}`}>
      <div className="shell">
        <div className={styles.topo}>
          <div>
            <Reveal className={styles.marcador}>
              <span className="index">06</span>
              <span className="label">Contato</span>
            </Reveal>

            <Reveal as="h2" className={`h2 ${styles.titulo}`} delay={80}>
              Me conta o que você <em>precisa</em> resolver.
            </Reveal>

            <Reveal className={`lead ${styles.lead}`} delay={140}>
              Estou aberto a oportunidades de engenharia de software e a projetos
              de desenvolvimento. Respondo pessoalmente, normalmente no mesmo dia.
            </Reveal>
          </div>

          <Reveal delay={200} className={styles.retrato}>
            <Image
              src="/media/igor-estudio.webp"
              alt="Retrato de Igor Cruz, de camisa branca, sorrindo, sobre fundo escuro"
              width={900}
              height={1200}
              sizes="(max-width: 900px) 220px, 300px"
              className={styles.retratoImg}
            />
          </Reveal>
        </div>

        <ul className={styles.portas}>
          {portas.map((p, i) => (
            <Reveal as="li" key={p.rotulo} delay={i * 70} className={styles.porta}>
              <span className="label label--signal">{p.rotulo}</span>
              <h3 className={styles.portaTitulo}>{p.titulo}</h3>
              <p className={styles.portaTexto}>{p.texto}</p>
              <a
                className={`link ${styles.portaCta}`}
                href={p.href ?? whatsappLink(p.mensagem!)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.cta} <SetaExterna size={12} />
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.canais}>
          <a
            className="btn btn--signal"
            href={whatsappLink("Oi Igor, vi seu portfólio e queria conversar.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp /> WhatsApp
          </a>
          <a className="btn btn--ghost" href={`mailto:${perfil.email}`}>
            {perfil.email}
          </a>
          <div className={styles.sociais}>
            <a href={perfil.github} target="_blank" rel="noopener noreferrer" className={`link ${styles.social}`}>
              <GitHub size={16} /> GitHub
            </a>
            <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" className={`link ${styles.social}`}>
              <LinkedIn size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
