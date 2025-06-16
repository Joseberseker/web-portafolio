import { ProjectCard } from "../../layouts/ProjectCard/ProjectCard";

export const Proyectos = () => {
  return (
    <section className="mx-8 lg:mx-30 py-5 md:py-13 mb-50 " id="Mis Proyectos">
      <h2 className="text-2xl font-bold lg:mt-7">
        Mis Proyectos Personales
      </h2>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-4 mt-5 md:mt-10">
        <ProjectCard />
      </div>
    </section>
  );
};

// gap-x-4 → espacio horizontal (columnas)

// gap-y-4 → espacio vertical (filas)

// gap-4 → ambos
