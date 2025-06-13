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
      id: 6,
      title: "Contacto",
    },
  ];

  return (
    <>
      {menuitems.map(({id, title} = item) => {
        return (
          <li key={id} className="border bg-[#4B4952]  text-white rounded-lg p-2 flex-gap w-[140px] text-center hover:bg-[#fff] hover:text-black hover:border transition duration-300 ease-in-out">
            <a href={`#${title}`} className="">{title}</a>
          </li>
        );
      })}
    </>
  );
};
