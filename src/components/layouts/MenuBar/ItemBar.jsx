export const ItemBar = () => {
  let menuitems = [
    {
      id: 1,
      title: "Inicio",
      logo: "🏠",
    },
    {
      id: 2,
      title: "Mis Proyectos",
      logo: "💼"
    },
    {
      id: 3,
      title: "Sobre Mí",
      logo: "😎"
    },
    {
      id: 4,
      title: "Experiencia",
      logo: "🎮"
    },
    {
      id: 5,
      title: "Contacto",
      logo: "📒"
    },
  ];

  return (
    <>
      {menuitems.map((item) => {
        const { id, title, logo } = item
        return (
          <li key={id} className="">
            <a
              href={`#${title}`}
              className="border bg-gray-500/40 lg:bg-[#4B4952]  text-white rounded-lg p-3 lg:p-2 justify-center hover:bg-[#fff] hover:text-black hover:border transition duration-300 ease-in-out flex lg:w-[150px] w-full"
            >
              <span className="hidden md:flex">{title}</span>
              <span className="lg:hidden">{logo}</span>
            </a>
          </li>
        );
      })}
    </>
  );
};
