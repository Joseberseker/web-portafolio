import { motion } from "framer-motion";
import { projects } from "../../../data/portfolio";

export const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          className={`card project-showcase${
            index % 2 === 1 ? " project-showcase--reverse" : ""
          }`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
        >
          <div className="project-showcase__media">
            {project.image ? (
              <img src={project.image} alt={`Captura de ${project.name}`} />
            ) : (
              <div
                className="project-showcase__media-fallback"
                style={{ "--lab-accent": project.accent }}
              >
                <i className={project.icon} aria-hidden />
              </div>
            )}
            <span className="project-showcase__status">{project.status}</span>
          </div>

          <div className="project-showcase__body">
            <span className="project-showcase__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className="stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            {project.link ? (
              <a
                className="btn btn-secondary project-showcase__link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio <i className="bx bx-link-external" aria-hidden />
                <span className="sr-only"> (abre en una pestaña nueva)</span>
              </a>
            ) : (
              <p className="project-card__note">
                Roadmap · lo vamos armando poco a poco
              </p>
            )}
          </div>
        </motion.article>
      ))}
    </>
  );
};
