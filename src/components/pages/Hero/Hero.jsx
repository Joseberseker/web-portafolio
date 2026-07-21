import { motion } from "framer-motion";
import aiHeroBg from "../../../assets/ai-hero-bg.png";
import hojaDeVida from "../../../assets/Hoja de Vida Actualizada - Jose Ahumada.pdf";
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
            className="hero-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32 }}
          >
            <span className="hero-panel__label">Focus</span>
            <h2 className="hero-panel__title">AI · Full Stack</h2>
            <p className="hero-panel__text">
              Interfaces modernas, backends confiables y experimentos con
              inteligencia artificial para productos que se sientan vivos.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
