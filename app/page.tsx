import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import IntroVideo from '@/components/IntroVideo';
import Projects from '@/components/Projects';
import AdditionalWork from '@/components/AdditionalWork';
import Experience from '@/components/Experience';
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
        <IntroVideo />
        <Projects />
        <AdditionalWork />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <RevealOnScroll />
    </>
  );
}
