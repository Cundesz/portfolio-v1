import Boot from '@/components/Boot';
import Hud from '@/components/Hud';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Skills from '@/components/Skills';
import Trabalhos from '@/components/Trabalhos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Constellation from '@/components/Constellation';

export default function Page() {
  return (
    <>
      <a className="skip" href="#sobre">
        Pular para conteúdo
      </a>
      <Constellation />
      <div className="bg-grid" aria-hidden="true" />
      <Boot />
      <Hud />
      <main id="topo">
        <Hero />
        <Sobre />
        <Skills />
        <Trabalhos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
