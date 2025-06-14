export const ItemBar = () => {
  let menuitems = [
    {
      id: 1,
      title: "Inicio",
    },
    {
      id: 2,
      title: "Mis Proyectos",
    },
    {
      id: 3,
      title: "Sobre Mí",
    },
    {
      id: 4,
      title: "Experiencia",
    },
    // {
    //   id: 5,
    //   title: "Servicios",
    // },
    {
      id: 5,
      title: "Contacto",
    },
  ];

  return (
    <>
      {menuitems.map((item) => {
        const { id, title } = item
        return (
          <li key={id} className="">
            <a
              href={`#${title}`}
              className="border bg-[#4B4952]  text-white rounded-lg p-2 justify-center hover:bg-[#fff] hover:text-black hover:border transition duration-300 ease-in-out flex lg:w-[150px] w-full"
            >
              {title}
            </a>
          </li>
        );
      })}
    </>
  );
};
