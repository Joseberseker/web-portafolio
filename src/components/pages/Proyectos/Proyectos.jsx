import { ProjectCard } from "../../layouts/ProjectCard/ProjectCard";

export const Proyectos = () => {
  return (
    <>
      <section className="mx-25 py-13"  id="Mis Proyectos">
        <h2 className="text-2xl font-bold mt-7">Mis Proyectos Personales</h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-x-4">
        <ProjectCard/>
        <ProjectCard/>
        </div>
      </section>
    </>
  );
};


// gap-x-4 → espacio horizontal (columnas)

// gap-y-4 → espacio vertical (filas)

// gap-4 → ambos