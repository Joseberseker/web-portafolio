import whatsapp from "../../../assets/whatsapp.svg";
import descargar from "../../../assets/descargar.svg";
import github from "../../../assets/github.svg";
import linkedin from "../../../assets/linkedin.svg";
import hojaDeVida from "../../../assets/Hoja de Vida Actualizada - Jose Ahumada.pdf";
export const Hero = () => {
  const linksitems = [
    {
      id: 1,
      name: "Linkedin",
      logo: linkedin,
      link: "https://www.linkedin.com/in/jose-ahumada-navarro/",
    },
    {
      id: 2,
      name: "Github",
      logo: github,
      link: "https://github.com/Joseberseker",
    },
    {
      id: 3,
      name: "Hoja de Vida",
      logo: descargar,
      link: hojaDeVida,
    },
    {
      id: 4,
      name: "Contáctame",
      logo: whatsapp,
      link: "https://wa.me/+573007411393",
    },
  ];
  return (
    <section
      id="Inicio"
      className="flex items-center justify-center md:pt-40 md:pb-80 lg:min-h-screen px-7"
    >
      <div className="p-6 bg-gray-100 flex items-center justify-center flex-col max-w-screen-lg h-[40%] mx-auto my-40">
        <h1 className="text-3xl lg:text-5xl font-semibold mt-2">FullStack Developer</h1>
        <p className="text-md lg:text-lg font-medium text-gray-500 mt-6">
          Bienvenido a mi página web. Aquí encontrarás información sobre mis
          proyectos, habilidades y experiencia en el desarrollo FullStack.
          Descubre como utilizo tecnologías como HTML, CSS, JavaScript, React y Nodejs para crear soluciones innovadoras y eficientes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6  md:flex-row gap-2 w-full">
          {linksitems.map((linksitems) => {
            const { id, name, link, logo } = linksitems
            return (
              <a
                key={id}
                className="flex flex-row  rounded-md bg-gray-600 px-3.5 py-2.5 w-full lg:w-39 justify-center text-sm font-semibold text-white hover:bg-gray-500"
                href={link}
                target="_blank"
                {...(id === 3 ? { download: true } : {})}
              >
                <span className="hidden md:flex">{name} |</span>
                <img className="w-5 lg:w-4 mx-2 fill-white lg:ml-2" src={logo} alt={name} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
