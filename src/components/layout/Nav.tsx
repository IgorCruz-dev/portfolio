"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GitHub, LinkedIn } from "@/components/ui/Icons";
import { perfil } from "@/content/site";
import styles from "./Nav.module.css";

const secoes = [
  { rotulo: "StudyTrack", href: "/#studytrack" },
  { rotulo: "Trabalho", href: "/#trabalho" },
  { rotulo: "Trajetória", href: "/#trajetoria" },
  { rotulo: "Contato", href: "/#contato" },
];

export default function Nav() {
  const [solido, setSolido] = useState(false);

  useEffect(() => {
    const aoRolar = () => setSolido(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className={`${styles.nav} ${solido ? styles.solido : ""}`}>
      <div className={`shell ${styles.linha}`}>
        <Link href="/" className={styles.marca}>
          Igor Cruz
          <span className={styles.ponto} aria-hidden="true">.</span>
        </Link>

        <nav aria-label="Seções do site" className={styles.links}>
          {secoes.map((s) => (
            <a key={s.href} href={s.href} className={styles.link}>
              {s.rotulo}
            </a>
          ))}
        </nav>

        <div className={styles.sociais}>
          <a href={perfil.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Igor Cruz">
            <GitHub size={17} />
          </a>
          <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Igor Cruz">
            <LinkedIn size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
