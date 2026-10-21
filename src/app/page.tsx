import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import StudyTrack from "@/components/home/StudyTrack";
import Trabalho from "@/components/home/Trabalho";
import Trajetoria from "@/components/home/Trajetoria";
import Palco from "@/components/home/Palco";
import Principios from "@/components/home/Principios";
import Contato from "@/components/home/Contato";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="conteudo">
        <Hero />
        <StudyTrack />
        <Trabalho />
        <Trajetoria />
        <Palco />
        <Principios />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
