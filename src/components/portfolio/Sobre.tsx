import { User } from "lucide-react";

const stats = [
  { num: "2", label: "Clientes ativos" },
  { num: "4", label: "Projetos entregues" },
  { num: "100%", label: "Deployados" },
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Decorative number */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-1rem",
            left: "-1rem",
            fontSize: "6rem",
            fontWeight: 800,
            lineHeight: 1,
            color: "rgba(37, 99, 235, 0.04)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          01
        </span>

        {/* Label with icon */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            position: "relative",
          }}
        >
          <User size={14} color="var(--accent)" strokeWidth={2.5} />
          <p
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Sobre mim
          </p>
        </div>

        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.75rem",
            color: "var(--text)",
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            marginTop: "0.5rem",
          }}
        >
          Quem está por trás do código.
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <p style={{ fontWeight: 400, fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Tenho 19 anos, sou estudante de Sistemas de Informação na FAFRAM e
            trabalho como Auxiliar Administrativo na Vittia Fertilizantes.
          </p>
          <p style={{ fontWeight: 400, fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            Sou co-fundador da{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>StudyTrack</strong>
            , uma plataforma SaaS B2B para escolas preparatórias. Construo
            produtos do zero — da ideia ao deploy, com foco em resultado.
          </p>
        </div>

        {/* Stats cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
            marginTop: "2rem",
          }}
        >
          {stats.map(({ num, label }) => (
            <div key={label} className="stat-card">
              <div
                className="stat-num"
                style={{ fontWeight: 700, fontSize: "1.75rem", color: "var(--accent)", lineHeight: 1 }}
              >
                {num}
              </div>
              <div
                className="stat-label"
                style={{ fontWeight: 400, fontSize: "0.8rem", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "0.375rem" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
