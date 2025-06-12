import profileImage from "../../../assets/profile-image.png";
export const AboutMe = () => {
  let skillitems = [
    {
      id: 1,
      title: "HTML5",
      logo: "bx bxl-html5",
      color: "#E34F26",
      colorHover: "rgba(227, 79, 38, 0.2)"
    },
    {
      id: 2,
      title: "CSS3",
      logo: "bx bxl-css3",
      color: "#1572B6",
      colorHover: "rgba(21, 114, 182, 0.2)"
    },
    {
      id: 3,
      title: "JAVASCRIPT",
      logo: "bx bxl-javascript",
      color: "#F7DF1E",
      colorHover: "rgba(247, 223, 30, 0.2)"
    },
    {
      id: 4,
      title: "NODEJS",
      logo: "bx bxl-nodejs",
      color: "#339933",
      colorHover: "rgba(51, 153, 51, 0.2)"
    },
    {
      id: 5,
      title: "GIT",
      logo: "bx bxl-git",
      color: "#F05033",
      colorHover: "rgba(407, 80, 51, 0.2)"
    },
    {
      id: 6,
      title: "GITHUB",
      logo: "bx bxl-github",
      // color: "#181717"
      color: "#FFF",
      colorHover: "rgba(24, 23, 23, 0.2)"
    },
    {
      id: 7,
      title: "REACT",
      logo: "bx bxl-react",
      color: "#00D8FF",
      colorHover: "rgba(0, 216, 255, 0.2)"
    },
    {
      id: 8,
      title: "VUEJS",
      logo: "bx bxl-vuejs",
      color: "#4FC08D",
      colorHover: "rgba(79, 192, 141, 0.2)"
    },
    {
      id: 9,
      title: "MONGODB",
      logo: "bx bxl-mongodb",
      color: "#4DB33D",
      colorHover: "rgba(77, 179, 61, 0.2)"
    },
    {
      id: 10,
      title: "POSTGRESQL",
      logo: "bx bxl-postgresql",
      color: "#336791",
      colorHover: "rgba(51, 103, 145, 0.2)"
    },
    {
      id: 11,
      title: "DOCKER",
      logo: "bx bxl-docker",
      color: "#1D63ED",
      colorHover: "rgba(29, 99, 237, 0.2)"
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
            {skillitems.map(({ id, title, logo, color, colorHover } = skillitems) => {
              return (
                <div className="text-center" key={id}>
                  <div className={`item-skill flex-col rounded p-2 bg-gray-300 hover:text-[var(--hover-color)] hover:bg-[var(--bg-color-hover)] transition-all duration-300 ease-in-out`} style={{ '--hover-color': color, '--bg-color-hover': colorHover}}>
                    {/* <span>{title}</span> */}
                    <i title={title} className={`${logo} text-5xl`}></i>
                    <p className="text-center font-bold">{title}</p>
                    {console.log(color)
                    }
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
