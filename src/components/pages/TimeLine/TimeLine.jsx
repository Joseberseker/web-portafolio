import { CardTimeLine } from "../../layouts/CardTimeLine/CardTimeLine";

export const TimeLine = () => {
  return (
    <section id="Experiencia" className="flex items-center justify-center min-h-screen flex-col xl:px-90">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-[15px] lx:w-6/12">
      <h2 className="text-2xl font-bold mt-10">
        Experiencia <span>Laboral</span>
      </h2>
        <CardTimeLine />
      </ul>
    </section>
  );
};
