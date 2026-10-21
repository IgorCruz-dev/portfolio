import { perfil } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`on-ink ${styles.rodape}`}>
      <div className={`shell ${styles.linha}`}>
        <p className={styles.credito}>
          © {new Date().getFullYear()} {perfil.nome} · {perfil.local}
        </p>
        <p className={styles.nota}>
          Construído em Next.js e TypeScript. O código deste site é{" "}
          <a
            href="https://github.com/IgorCruz-dev/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            público
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
