export const ProjectCard = () => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white mb-5">
        <img
          className="rounded-t-lg"
          src="https://picsum.photos/500/300"
          alt=""
        />
        <div className="p-5">
          <h4 className="mb-2 text-2xl font-bold ">Título del proyecto</h4>
          <div>
            <h6>Tecnologías usadas</h6>
            <div className="text-xl flex gap-2 my-2">
              <i className="bx bxl-html5" title="HTML5"></i>
              <i className="bx bxl-css3" title="CSS3"></i>
              <i className="bx bxl-javascript" title="JAVASCRIPT"></i>
              <i className="bx bxl-react" title="REACT"></i>
            </div>
          </div>
          <div className="flex justify-start mt-2">
            <a
              href="#"
              className="inline-flex items-center mr-2 px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4"
            >
              Github
              <i className="bx bxl-github ms-2"></i>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4"
            >
              Demo
              <i className="bx bx-link ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
