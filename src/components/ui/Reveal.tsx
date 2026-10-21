"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Revela o conteúdo quando ele entra na viewport.
 *
 * A animação em si mora no CSS (.reveal / .line-mask); aqui só existe o
 * observador que liga `data-shown`. Isso mantém o trabalho no compositor e
 * evita carregar uma biblioteca de animação só para fazer fade.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  once = true,
  amount = 0.18,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  /* Atributos extras (data-*, aria-*) precisam chegar ao DOM: o CSS de
     algumas seções seleciona por eles. */
  [atributo: `data-${string}`]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem suporte a IO, ou com movimento reduzido: mostra direto.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, amount]);

  return (
    <Tag
      ref={ref}
      data-shown={shown}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
