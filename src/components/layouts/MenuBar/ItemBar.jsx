export const ItemBar = () => {
  let menuitems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Sobre Mí",
    },
    {
      id: 3,
      title: "Mis Proyectos",
    },
    {
      id: 4,
      title: "Línea de tiempo",
    },
    {
      id: 5,
      title: "Servicios",
    },
    {
      id: 6,
      title: "Contacto",
    },
  ];

  return (
    <>
      {menuitems.map((item) => {
        return (
          <li key={item.id} className="border bg-[#4B4952]  text-white rounded-lg p-2 flex-gap w-[140px] text-center hover:bg-[#fff] hover:text-black hover:border transition duration-300 ease-in-out">
            <a href="" className="">{item.title}</a>
          </li>
        );
      })}
    </>
  );
};
