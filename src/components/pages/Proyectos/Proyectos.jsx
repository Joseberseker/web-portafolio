import { ProjectCard } from "../../layouts/ProjectCard/ProjectCard";
import { FiBriefcase } from "react-icons/fi";

export const Proyectos = () => {
  return (
    <section className="mx-8 lg:mx-30 py-5 md:py-13 mb-50 " id="Mis Proyectos">
      <h2 className="flex items-center gap-2 text-3xl font-bold text-gray-800 mb-10">
        <FiBriefcase className="w-8 h-8 text-gray-500" />
        Proyectos
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
