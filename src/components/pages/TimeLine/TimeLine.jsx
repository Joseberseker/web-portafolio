import { CardTimeLine } from "../../layouts/CardTimeLine/CardTimeLine";

export const TimeLine = () => {
  return (
    <section
      id="Experiencia"
      className="flex items-center justify-center min-h-screen flex-col mx-9 lg:mx-30 lg:mt-10 bg-white"
    >
      <h2 className="flex items-center gap-2 text-3xl font-bold text-gray-800 mt-10 mb-10">
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Experiencia
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-[15px] lx:w-6/12 w-full max-w-4xl">
        <CardTimeLine />
      </ul>
    </section>
  );
};
