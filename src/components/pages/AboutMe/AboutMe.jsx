import { motion } from "framer-motion";
import { skills, techTags } from "../../../data/portfolio";

export const AboutMe = () => {
  return (
    <section className="section" id="Sobre Mí">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-head">
            <p className="section-kicker">02 — Sobre mí</p>
            <h2>Perfil</h2>
            <p>
              Me especializo en experiencias web claras y backends prácticos.
              Vengo de datos, DevOps y e-commerce; hoy empujo hacia productos
              fullstack con inteligencia artificial aplicada.
            </p>
          </div>
          <div className="tech-marquee" aria-label="Stack de tecnologías">
            {techTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.06 }}
        >
          <h3
            style={{
              margin: "0 0 0.85rem",
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.02em",
            }}
          >
            Tecnologías
          </h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-chip">
                <i
                  className={skill.logo}
                  style={{ color: skill.color }}
                  aria-hidden
                />
                <strong>{skill.title}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
