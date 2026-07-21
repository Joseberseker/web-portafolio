import { motion } from "framer-motion";
import { projects } from "../../../data/portfolio";

export const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          className="card project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <div
            className="project-card__media project-card__media--lab"
            style={{ "--lab-accent": project.accent }}
          >
            <i className={project.icon} aria-hidden />
            <span className="project-card__status">{project.status}</span>
          </div>
          <div className="project-card__body">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className="stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <p className="project-card__note">
              Roadmap · lo vamos armando poco a poco
            </p>
          </div>
        </motion.article>
      ))}
    </>
  );
};
