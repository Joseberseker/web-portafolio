import { ProjectCard } from "../../layouts/ProjectCard/ProjectCard";

export const Proyectos = () => {
  return (
    <>
      <section className="mx-[10vh] py-13"  id="Mis Proyectos">
        <h2 className="text-2xl font-bold">Mis Proyectos Personales</h2>
        <div className="grid grid-cols-4">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
      </section>
    </>
  );
};
