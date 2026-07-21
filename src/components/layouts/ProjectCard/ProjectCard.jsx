import { motion } from "framer-motion";
import calculadora_financiera from "../../../assets/calculadora_financiera.png";
import seccion_servicios from "../../../assets/seccion_servicios.jpg";
import encriptador_texto from "../../../assets/encriptador_texto.png";
import tarjeta_perfil from "../../../assets/tarjeta_perfil.jpg";

const projectItems = [
  {
    id: 1,
    name: "Calculadora Financiera",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Operaciones financieras de anualidades — utilitaria, clara y lista para evolucionar a un copiloto financiero.",
    link_github: "https://github.com/Joseberseker/calculadora-financiera",
    link_demo: "https://steady-pasca-3d8f9e.netlify.app/",
    link_imagen: calculadora_financiera,
  },
  {
    id: 2,
    name: "Sección de Servicios",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    desc: "Maquetado de presentación de servicios con foco en jerarquía visual.",
    link_github: "https://github.com/Joseberseker/maquetado-seccion-servicios",
    link_demo: "https://featuresectioncard.netlify.app/",
    link_imagen: seccion_servicios,
  },
  {
    id: 3,
    name: "Encriptador de Texto",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Herramienta web para encriptar y desencriptar mensajes al instante.",
    link_github: "https://github.com/Joseberseker/encriptador-texto",
    link_demo: "https://joseberseker.github.io/encriptador-texto/",
    link_imagen: encriptador_texto,
  },
  {
    id: 4,
    name: "Tarjeta de Perfil",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    desc: "Componente de perfil social con layout responsive y tipografía clara.",
    link_github: "https://github.com/Joseberseker/profile-card-component",
    link_demo: "https://profile-card-component-jose-ahumada.netlify.app/",
    link_imagen: tarjeta_perfil,
  },
];

export const ProjectCard = () => {
  return (
    <>
      {projectItems.map((project, index) => (
        <motion.article
          key={project.id}
          className="card project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <div className="project-card__media">
            <img src={project.link_imagen} alt={project.name} />
          </div>
          <div className="project-card__body">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <div className="stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.55rem", marginTop: "auto" }}>
              <a
                className="btn btn-secondary"
                style={{ minHeight: "2.4rem", padding: "0.45rem 0.9rem" }}
                href={project.link_github}
                target="_blank"
                rel="noreferrer"
              >
                Código
              </a>
              <a
                className="btn btn-primary"
                style={{ minHeight: "2.4rem", padding: "0.45rem 0.9rem" }}
                href={project.link_demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </>
  );
};
