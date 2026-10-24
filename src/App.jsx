import { MotionConfig } from "framer-motion";
import { AboutMe } from "./components/pages/AboutMe/AboutMe";
import { Contact } from "./components/pages/Contact/Contact";
import { Footer } from "./components/pages/Footer/Footer";
import { Header } from "./components/pages/Header/Header";
import { Hero } from "./components/pages/Hero/Hero";
import { Proyectos } from "./components/pages/Proyectos/Proyectos";
import { TimeLine } from "./components/pages/TimeLine/TimeLine";
import { navItems } from "./data/portfolio";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="page">
        <Header />
        <nav className="side-nav" aria-label="Secciones">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} title={item.label}>
              <span className="sr-only">{item.label}</span>
            </a>
          ))}
        </nav>
        <main>
          <Hero />
          <Proyectos />
          <AboutMe />
          <TimeLine />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
