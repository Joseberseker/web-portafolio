export const CardTimeLine = () => {
  let timelineitems = [
    {
      id: 1,
      position: "Ingeniero de datos Junior",
      company: "ISES Soluciones Especializadas",
      desc: "Un profesional de la automatización y los datos es responsable de diseñar, desarrollar y mantener bots de automatización para la gestión documental y la interacción web, así como de automatizar procesos ETL (Extracción, Transformación y Carga) para asegurar la integridad y seguridad de los datos. También brinda soporte a bots en AWS/Azure (Windows) y aplica metodologías ágiles en la gestión de proyectos. Además, apoya al equipo de desarrollo en la documentación de requisitos, participa en el desarrollo de sistemas y ofrece soporte técnico para análisis de datos, IA y automatización. Finalmente, se encarga de la depuración de código y se mantiene al día con las tendencias tecnológicas.",
      year: "2024-2025",
      cycle: "Octubre 2024 - Enero 2025",
      city: "Barranquilla - Atlántico",
      location: "Presencial",
    },
    {
      id: 2,
      position: "Devops Trainee – Prácticas profesionales",
      company: "Omipro S.A.S",
      desc: "En el Laboratorio de Investigación Tecnológico - ID TOLÚ, me encargué de la instalación y configuración de herramientas de monitoreo como Prometheus, Grafana, Netbox, Zabbix y OpenStack. Desplegué estas herramientas en máquinas virtuales de AWS EC2, Google Compute Engine y Microsoft Azure. Mi trabajo también incluyó la configuración detallada de CentOS 7, lo que implicó actualizar paquetes, ajustar firewalls y redes, e instalar NodeExporter para asegurar que las métricas de las máquinas virtuales se visualizaran correctamente en los dashboards de Grafana.",
      year: "2022",
      cycle: "Agosto 2022 - Noviembre 2022",
      city: "Santiago de Tolú - Sucre",
      location: "Remoto",
    },
    {
      id: 3,
      position: "Bootcamp Trainee Adobe Magento 2",
      company: "OmniPro S.A.S",
      desc: "Participé en talleres donde aprendí a manejar Adobe Magento 2 para el desarrollo de E-commerce. En ellos, adquirí experiencia en la creación de módulos utilizando inyección de dependencias, la aplicación de estilos visuales a tiendas online con LESS, el desarrollo de UIComponents tanto para el frontend como para el backend, y la creación de paneles de administración para la gestión de catálogos de productos. También desarrollé habilidades en la creación de parches para la corrección de errores.",
      year: "2022",
      cycle: "Mayo 2022 - Julio 2022",
      city: "Medellín - Antioquia",
      location: "Remoto",
    },
    {
      id: 4,
      position: "Apoyo de Sistemas Sisbén IV",
      company: "Alcaldía Municipal",
      desc: "Administré la Plataforma de Sisbén IV, donde me encargué de crear los roles para los diferentes usuarios y cargar los datos recopilados por los censistas a la aplicación web. Mi rol también incluyó la solución de incidencias técnicas y el manejo de herramientas de ofimática, además de apoyar a la administración del Sisbén en diversas tareas de oficina.",
      year: "2019",
      cycle: "Junio 2019 - Julio 2019",
      city: "San Pedro - Sucre",
      location: "Presencial",
    },
  ];
  return (
    <div className="container">
      <li>
        <div className="timeline-middle">
          {timelineitems.map(
            ({ position, company, year, cycle, desc, id } = timelineitems) => {
              return (
                <div key={id}>
                  <div className="timeline-start mb-5 md:mb-5 pb-2" >
                    <p className="text-lg font-black">{position}</p>
                    <h2 className="font-mono italic font-bold">{company}</h2>
                    <time className="font-mono italic font-bold">{cycle}</time>
                    <br />
                    {desc}
                  </div>
                  <hr />
                </div>
              );
            }
          )}
        </div>
      </li>
    </div>
  );
};
