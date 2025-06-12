import profileImage from "../../../assets/profile-image.png";
export const AboutMe = () => {
  let skillitems = [
    {
      id: 1,
      title: "HTML5",
      logo: "bx bxl-html5",
    },
    {
      id: 2,
      title: "CSS3",
      logo: "bx bxl-css3",
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      logo: "bx bxl-javascript",
    },
    {
      id: 4,
      title: "NODEJS",
      logo: "bx bxl-nodejs",
    },
    {
      id: 5,
      title: "GIT",
      logo: "bx bxl-git",
    },
    {
      id: 6,
      title: "GITHUB",
      logo: "bx bxl-github",
    },
    {
      id: 7,
      title: "REACT",
      logo: "bx bxl-react",
    },
    {
      id: 8,
      title: "VUEJS",
      logo: "bx bxl-react",
    },
    {
      id: 9,
      title: "MONGODB",
      logo: "bx bxl-mongodb",
    },
    {
      id: 10,
      title: "POSTGRESQL",
      logo: "bx bxl-postgresql",
    },
    {
      id: 11,
      title: "DOCKER",
      logo: "bx bxl-docker",
    },
  ];
  return (
    <section
      className="flex items-center justify-center min-h-screen"
      id="Sobre Mí"
    >
      <div className="w-2/4 p-9">
        <h2 className="text-2xl font-bold mb-4">
          Acerca de <span>Mi</span>
        </h2>
        <h3></h3>
        <p className="">
          Con una pasión innata por el diseño y la tecnología, me especializao
          en crear experiencias web intuitivas y atractivas. A lo largo de mi
          carrera, he desarrollado habilidades sólidas en HTML, CSS y
          JavaScript, así como en frameworks modernos como React y Angular. Mi
          objetivo es siempre mejhorar la usabilidad de las aplicaciones web,
          garantizando que cada proyecto no solo sea visualmente impactante,
          sino también funcional y fácil de usar. Me encanta colaborar con
          equipos creativos y enfrentar desafios que me permitan crecer
          profesionalmente y aprender nuevas tecnologías.
        </p>
        <div className="skills w-auto">
          <h3 className="mb-4">Habilidades</h3>
          <div className="content-skills grid grid-cols-5 gap-3 ">
            {skillitems.map(({ id, title, logo } = skillitems) => {
              return (
                <div className="text-center">
                  <div className="item-skill flex-col rounded p-2 bg-gray-300 ">
                    {/* <span>{title}</span> */}
                    <i title={title} className={`${logo} text-5xl`}></i>
                    <p className="text-center font-bold">{title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <img
          className="h-auto w-3/4 rounded-full bg-gray-300"
          src={profileImage}
          alt="Foto de perfil profesional de Jose Ahumada"
        />
      </div>
    </section>
  );
};
