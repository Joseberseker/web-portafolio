export const profile = {
  name: "Jose Ahumada",
  fullName: "Jose Luis Ahumada Navarro",
  role: "Full Stack · Asistentes Virtuales · IA Conversacional",
  greet: "Hola, mi nombre es",
  blurb:
    "Construyo asistentes virtuales de forma práctica: primero en Telegram, después en WhatsApp. Menos humo, más un bot que sí te ayude en el día a día.",
  location: "Medellín, Colombia",
  available: true,
  email: "ingeniero.jose.ahumada@gmail.com",
  phone: "+57 300 423 7458",
  stats: [
    { value: "1+", label: "Años con IA aplicada" },
    { value: "4", label: "Proyectos en roadmap" },
    { value: "Telegram", label: "Canal inicial" },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/jose-ahumada-navarro/",
    github: "https://github.com/Joseberseker",
    whatsapp: "https://wa.me/573004237458",
  },
};

export const navItems = [
  { id: "Inicio", label: "Inicio" },
  { id: "Mis Proyectos", label: "Proyectos" },
  { id: "Sobre Mí", label: "Sobre mí" },
  { id: "Experiencia", label: "Experiencia" },
  { id: "Contacto", label: "Contacto" },
];

export const skills = [
  { id: 1, title: "Python", logo: "bx bxl-python", color: "#3776AB" },
  { id: 2, title: "TypeScript", logo: "bx bxl-typescript", color: "#3178C6" },
  { id: 3, title: "JavaScript", logo: "bx bxl-javascript", color: "#F7DF1E" },
  { id: 4, title: "React", logo: "bx bxl-react", color: "#00D8FF" },
  { id: 5, title: "Node.js", logo: "bx bxl-nodejs", color: "#339933" },
  { id: 6, title: "PostgreSQL", logo: "bx bxl-postgresql", color: "#336791" },
  { id: 7, title: "MongoDB", logo: "bx bxl-mongodb", color: "#4DB33D" },
  { id: 8, title: "Docker", logo: "bx bxl-docker", color: "#1D63ED" },
  { id: 9, title: "AWS", logo: "bx bxl-aws", color: "#FF9900" },
  { id: 10, title: "GitHub", logo: "bx bxl-github", color: "#E6F1FF" },
];

export const techTags = [
  "Python",
  "FastAPI",
  "NestJS",
  "TypeScript",
  "LangChain",
  "RAG",
  "Telegram Bot API",
  "WhatsApp Business API",
  "Webhooks",
  "AWS",
  "Docker",
  "PostgreSQL",
  "Redis",
  "React",
];

export const projects = [
  {
    id: 1,
    name: "Asistente en Telegram",
    status: "En desarrollo",
    stack: ["Python", "Telegram Bot API", "LLM"],
    desc: "Asistente personal en Telegram para chat, recordatorios y tareas simples del día a día.",
    accent: "#2dd4bf",
    icon: "bx bxl-telegram",
  },
  {
    id: 2,
    name: "Asistente en WhatsApp",
    status: "Siguiente paso",
    stack: ["WhatsApp API", "Webhooks", "NestJS"],
    desc: "Migrar el asistente a WhatsApp cuando Telegram esté estable.",
    accent: "#25D366",
    icon: "bx bxl-whatsapp",
  },
  {
    id: 3,
    name: "API FullStack de tareas",
    status: "Por construir",
    stack: ["React", "Node.js", "PostgreSQL"],
    desc: "App web con auth, CRUD y API REST para practicar un flujo fullstack completo.",
    accent: "#60a5fa",
    icon: "bx bx-data",
  },
  {
    id: 4,
    name: "Dashboard operativo",
    status: "Por construir",
    stack: ["React", "TypeScript", "Charts"],
    desc: "Panel para ver métricas, tickets o estados — útil y visual para portafolio fullstack.",
    accent: "#f59e0b",
    icon: "bx bx-bar-chart-alt-2",
  },
];

export const experience = [
  {
    id: 1,
    position: "Desarrollador FullStack",
    company: "Capital Pocket (Pocki)",
    desc: "Flujos inteligentes en WhatsApp (Flows) para recargas, pagos y servicios; soluciones LLM/RAG; NestJS + webhooks; infraestructura AWS (ECS, RDS, S3) y dashboards operativos.",
    cycle: "Oct 2025 — Presente",
    meta: "Medellín · Remoto/Presencial",
  },
  {
    id: 2,
    position: "Ingeniero de Datos Junior",
    company: "ISES Soluciones Especializadas",
    desc: "Pipelines ETL, dashboards de BI, soporte a modelos de IA y automatización bajo SCRUM.",
    cycle: "Oct 2024 — Ene 2025",
    meta: "Colombia",
  },
];
