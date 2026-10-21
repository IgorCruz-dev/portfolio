"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Título que sobe linha a linha por trás de uma máscara.
 *
 * Cada linha é passada explicitamente (e não quebrada por JS) para que o
 * texto continue legível por leitor de tela e por quem desliga o JavaScript:
 * o conteúdo é renderizado no servidor, a máscara é só acabamento.
 */
export default function Lines({
  linhas,
  className = "",
  delay = 0,
  ...rest
}: {
  linhas: React.ReactNode[];
  className?: string;
  delay?: number;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} data-shown={shown} className={className} {...rest}>
      {linhas.map((linha, i) => (
        <span className="line-mask" key={i}>
          <span style={{ transitionDelay: `${delay + i * 90}ms` }}>{linha}</span>
        </span>
      ))}
    </p>
  );
}
