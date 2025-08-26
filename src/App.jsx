import "./App.css";
import { AboutMe } from "./components/pages/AboutMe/AboutMe";
import { Contact } from "./components/pages/Contact/Contact";
import { Footer } from "./components/pages/Footer/Footer";
import { Header } from "./components/pages/Header/Header";
import { Hero } from "./components/pages/Hero/Hero";
import { Proyectos } from "./components/pages/Proyectos/Proyectos";
import { TimeLine } from "./components/pages/TimeLine/TimeLine";

function App() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Header />
      <Hero />
      <Proyectos/>
      <AboutMe/>
      <TimeLine/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
