export const ItemBar = () => {
  const menuitems = [
    { id: 1, title: "Inicio", short: "In" },
    { id: 2, title: "Mis Proyectos", short: "Pr" },
    { id: 3, title: "Sobre Mí", short: "Yo" },
    { id: 4, title: "Experiencia", short: "Ex" },
    { id: 5, title: "Contacto", short: "Co" },
  ];

  return (
    <>
      {menuitems.map(({ id, title, short }) => (
        <li key={id}>
          <a href={`#${title}`} className="nav-link">
            <span className="hidden lg:inline text-sm font-semibold">
              {title}
            </span>
            <span className="lg:hidden text-xs font-bold tracking-wide">
              {short}
            </span>
          </a>
        </li>
      ))}
    </>
  );
};
