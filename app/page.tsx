import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}
