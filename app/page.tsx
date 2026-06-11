import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Showcase from '@/components/Showcase';
import TechStrip from '@/components/TechStrip';
import Industries from '@/components/Industries';
import Capabilities from '@/components/Capabilities';
import Experience from '@/components/Experience';
import SelectedWork from '@/components/SelectedWork';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Showcase />
        <TechStrip />
        <Industries />
        <Capabilities />
        <Experience />
        <SelectedWork />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
