import { motion } from "framer-motion";
import aiHeroBg from "../../../assets/ai-hero-bg.png";
import heroAssistant from "../../../assets/hero-assistant-hub.png";
import hojaDeVida from "../../../assets/Jose_Ahumada_CV.pdf";
import { profile } from "../../../data/portfolio";

export const Hero = () => {
  return (
    <section id="Inicio" className="hero">
      <div className="hero__bg" aria-hidden>
        <img src={aiHeroBg} alt="" />
      </div>

      <div className="container hero__content">
        <div className="hero__layout">
          <div>
            {profile.available && (
              <motion.span
                className="eyebrow"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="pulse-dot" />
                Disponible para trabajar
              </motion.span>
            )}

            <motion.p
              className="hero-greet"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {profile.greet}
            </motion.p>

            <motion.h1
              className="display"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              className="hero__role"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              {profile.role}
            </motion.p>

            <motion.p
              className="hero__blurb"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              {profile.blurb}
            </motion.p>

            <motion.div
              className="stats"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              {profile.stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              <a
                className="btn btn-primary"
                href={hojaDeVida}
                download
                target="_blank"
                rel="noreferrer"
              >
                Descargar CV
              </a>
              <a
                className="btn btn-secondary"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn-secondary" href="#Contacto">
                Contáctame
              </a>
              <a
                className="btn btn-secondary"
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-secondary"
                href={profile.links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.aside
            className="hero-float"
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            <div className="hero-float__glow" />
            <img
              className="hero-float__img"
              src={heroAssistant}
              alt="Asistente virtual con chat e integraciones"
            />
            <p className="hero-float__caption">Asistente virtual · Chat IA</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
