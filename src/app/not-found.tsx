import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { Seta } from "@/components/ui/Icons";

export default function NaoEncontrado() {
  return (
    <>
      <Nav />
      <main
        id="conteudo"
        className="on-ink section"
        style={{ minHeight: "70svh", display: "flex", alignItems: "center" }}
      >
        <div className="shell">
          <p className="label label--signal">Erro 404</p>
          <h1 className="h2" style={{ margin: "1rem 0", maxWidth: "16ch" }}>
            Esta página não <em>existe</em>.
          </h1>
          <p className="lead" style={{ marginBottom: "2rem" }}>
            O endereço pode estar errado, ou a página pode ter mudado de lugar.
          </p>
          <Link href="/" className="btn btn--signal">
            Voltar para o início <Seta />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
