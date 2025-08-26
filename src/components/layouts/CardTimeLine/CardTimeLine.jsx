export const CardTimeLine = () => {
  const timelineitems = [
    {
      id: 1,
      position: "Ingeniero de datos Junior",
      company: "ISES Soluciones Especializadas",
      desc: "Automatización de procesos ETL, soporte a bots en la nube y análisis de datos.",
      cycle: "Oct 2024 - Ene 2025",
      city: "Barranquilla",
      location: "Presencial",
    },
    {
      id: 2,
      position: "Devops Trainee",
      company: "Omipro S.A.S",
      desc: "Instalación y monitoreo de infraestructuras en AWS, GCP y Azure.",
      cycle: "Ago 2022 - Nov 2022",
      city: "Tolú",
      location: "Remoto",
    },
    {
      id: 3,
      position: "Bootcamp Trainee Magento 2",
      company: "OmniPro S.A.S",
      desc: "Desarrollo de módulos y paneles para E-commerce con Magento 2.",
      cycle: "May 2022 - Jul 2022",
      city: "Medellín",
      location: "Remoto",
    },
    {
      id: 4,
      position: "Apoyo de Sistemas Sisbén IV",
      company: "Alcaldía Municipal",
      desc: "Gestión de usuarios y soporte técnico en plataforma Sisbén IV.",
      cycle: "Jun 2019 - Jul 2019",
      city: "San Pedro",
      location: "Presencial",
    },
  ];

  return (
    <ul className="relative border-l-4 border-black-500 pl-6">
      {timelineitems.map(
        (
          { id, position, company, desc, cycle, city, location },
          idx
        ) => (
          <li key={id} className="mb-12 last:mb-0 relative">
            {/* Punto del timeline */}
            <span className="absolute -left-2 top-2 w-4 h-4 bg-gray-500 rounded-full border-4 border-white"></span>
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h3 className="text-gray-600 font-bold text-lg">{position}</h3>
              <span className="text-gray-700 font-semibold">{company}</span>
              <div className="text-gray-500 text-sm mb-1">
                {cycle} · {city} · {location}
              </div>
              <p className="text-gray-700">{desc}</p>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
