import calculadora_financiera from "../../../assets/calculadora_financiera.png";
import seccion_servicios from "../../../assets/seccion_servicios.jpg";
import encriptador_texto from "../../../assets/encriptador_texto.png";
import tarjeta_perfil from "../../../assets/tarjeta_perfil.jpg";

export const ProjectCard = () => {
  const projectItems = [
    {
      id: 1,
      name: "Calculadora Financiera",
      stack: [
        {
          id: 1.1,
          name: "HTML5",
          logo: "bx bxl-html5",
        },
        {
          id: 1.2,
          name: "CSS3",
          logo: "bx bxl-css3",
        },
        {
          id: 1.3,
          name: "JAVASCRIPT",
          logo: "bx bxl-javascript",
        },
      ],
      link_github: "https://github.com/Joseberseker/calculadora-financiera",
      link_demo: "https://steady-pasca-3d8f9e.netlify.app/",
      link_imagen: calculadora_financiera,
    },
    {
      id: 2,
      name: "Tarjeta de Sección de Servicios",
      stack: [
        {
          id: 2.1,
          name: "HTML5",
          logo: "bx bxl-html5",
        },
        {
          id: 2.2,
          name: "CSS3",
          logo: "bx bxl-css3",
        },
        {
          id: 2.3,
          name: "JAVASCRIPT",
          logo: "bx bxl-javascript",
        },
        {
          id: 2.4,
          name: "REACT",
          logo: "bx bxl-react",
        },
      ],
      link_github:
        "https://github.com/Joseberseker/maquetado-seccion-servicios",
      link_demo: "https://featuresectioncard.netlify.app/",
      link_imagen: seccion_servicios,
    },
    {
      id: 3,
      name: "Encriptador de Texto",
      stack: [
        {
          id: 3.1,
          name: "HTML5",
          logo: "bx bxl-html5",
        },
        {
          id: 3.2,
          name: "CSS3",
          logo: "bx bxl-css3",
        },
        {
          id: 3.3,
          name: "JAVASCRIPT",
          logo: "bx bxl-javascript",
        },
        {
          id: 3.4,
          name: "REACT",
          logo: "bx bxl-react",
        },
      ],
      link_github: "https://github.com/Joseberseker/encriptador-texto",
      link_demo: "https://joseberseker.github.io/encriptador-texto/",
      link_imagen: encriptador_texto,
    },
    {
      id: 4,
      name: "Tarjeta de Perfil",
      stack: [
        {
          id: 4.1,
          name: "HTML5",
          logo: "bx bxl-html5",
        },
        {
          id: 4.2,
          name: "CSS3",
          logo: "bx bxl-css3",
        },
        {
          id: 4.3,
          name: "JAVASCRIPT",
          logo: "bx bxl-javascript",
        },
        {
          id: 4.4,
          name: "REACT",
          logo: "bx bxl-react",
        },
      ],
      link_github: "https://github.com/Joseberseker/profile-card-component",
      link_demo: "https://profile-card-component-jose-ahumada.netlify.app/",
      link_imagen: tarjeta_perfil,
    },
  ];
  return (
    <>
      {projectItems.map((projectItems) => {
        const { id, name, link_imagen, link_github, link_demo } = projectItems;
        projectItems;
        return (
          <div className="lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white mb-5">
            <img
              className="rounded-t-lg h-52 w-full"
              src={link_imagen}
              alt={name}
            />

            <div className="p-5">
              <h4 className="mb-2 text-[23px] font-bold ">{name}</h4>
              <div>
                <h6>Tecnologías usadas</h6>
                <div className="text-xl flex gap-2 my-2">
                  {projectItems.stack.map((tec) => {
                    const { id, name, logo } = tec;
                    return <i key={id} className={logo} title={name}></i>;
                  })}
                </div>
              </div>
              <div className="flex justify-start mt-2">
                <a
                  href={link_github}
                  className="inline-flex items-center mr-2 px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4"
                  target="_blank"
                >
                  Github
                  <i className="bx bxl-github ms-2"></i>
                </a>
                <a
                  href={link_demo}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4"
                  target="_blank"
                >
                  Demo
                  <i className="bx bx-link ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
