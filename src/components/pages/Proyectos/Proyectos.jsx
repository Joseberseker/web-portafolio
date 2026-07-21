import { motion } from "framer-motion";
import { ProjectCard } from "../../layouts/ProjectCard/ProjectCard";

export const Proyectos = () => {
  return (
    <section className="section" id="Mis Proyectos">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">01 — Proyectos</p>
          <h2>Mi roadmap</h2>
          <p>
            Dos asistentes (Telegram → WhatsApp) y dos proyectos fullstack para
            practicar APIs, dashboards y producto web.
          </p>
        </motion.div>
        <div className="project-grid">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};
