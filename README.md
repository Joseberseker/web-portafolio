# 👋 Hola, mi nombre es Jose Ahumada

### Full Stack Developer · Asistentes Virtuales · IA Conversacional

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jose_Ahumada-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/jose-ahumada-navarro/)
[![GitHub](https://img.shields.io/badge/GitHub-Joseberseker-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/Joseberseker)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Hablemos-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=101010)](https://wa.me/573004237458)

Construyo asistentes virtuales de forma práctica: primero en Telegram, después en WhatsApp. Menos humo, más un bot que sí ayude en el día a día. Este repositorio es el código fuente de mi **portafolio web**, donde muestro los proyectos que voy desarrollando a lo largo de mi carrera.

---

## 🧩 Sobre este proyecto

Sitio personal de una sola página (single-page), construido con **React 19** y **Vite**, pensado como vitrina de proyectos, experiencia y contacto directo. Incluye:

- **Hero** con presentación y CTA directo a WhatsApp.
- **Proyectos**: trabajo publicado y roadmap en curso.
- **Sobre mí** y **experiencia** profesional.
- **Contacto** con formulario funcional vía EmailJS.

## 🛠️ Stack técnico

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=101010)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=101010)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=101010)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white&labelColor=101010)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white&labelColor=101010)

- **React + Vite** — SPA rápida, sin SSR, desplegable como sitio estático.
- **Tailwind CSS 4** (`@tailwindcss/vite`) + CSS propio por componente.
- **Framer Motion** para animaciones de entrada por scroll (`whileInView`).
- **EmailJS** para el envío del formulario de contacto sin backend propio.
- **Boxicons** y **react-icons** para iconografía.

## 📂 Estructura

```
src/
├── main.jsx              # Punto de entrada
├── App.jsx                # Compone las secciones de la página
├── data/
│   └── portfolio.js       # Contenido centralizado: perfil, proyectos, experiencia, skills
└── components/
    ├── pages/              # Una sección por área (Hero, Proyectos, AboutMe, TimeLine, Contact...)
    └── layouts/            # Piezas reutilizables dentro de una sección (ProjectCard, CardTimeLine...)
```

Todo el contenido (bio, proyectos, experiencia, navegación) vive en `src/data/portfolio.js`, así que actualizar el sitio no requiere tocar el JSX.

## 🚀 Puesta en marcha

```bash
git clone https://github.com/Joseberseker/web-portafolio.git
cd web-portafolio
npm install
npm run dev        # servidor de desarrollo (Vite)
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build de producción en local |
| `npm run lint` | Corre ESLint sobre el proyecto |

## 📌 Proyectos destacados

Además de este portafolio, estos son los proyectos que muestro en la sección **Proyectos** y que ya están publicados:

### 🎥 [Grabador de Pantalla con IA](https://github.com/Joseberseker/grabador-ia)

<a href="https://github.com/Joseberseker/grabador-ia"><img src="src/assets/grabador-ia-biblioteca.png" alt="Biblioteca de grabaciones — Grabador de Pantalla con IA" width="100%"/></a>

Extensión de Chrome (Manifest V3) que graba pantalla, pestaña o ventana, la convierte a **MP4 (H.264 + AAC)** en el propio equipo y transcribe el audio con **Whisper local**. Sin backend, sin subir vídeo ni audio: todo ocurre en el navegador.

### 🤖 [Asistente FAQ con RAG — Telegram + Widget Web](https://github.com/Joseberseker/rag-faq-telegram)

<a href="https://github.com/Joseberseker/rag-faq-telegram"><img src="src/assets/rag-faq-telegram-widget.png" alt="Conversación en el widget — Asistente FAQ con RAG" width="100%"/></a>

Asistente de soporte con **RAG 100% local** (Ollama + Chroma, sin APIs pagas) para un e-commerce: responde por **Telegram** y por un **widget de chat embebible**, citando siempre la fuente de la respuesta. Incluye guardrail anti-alucinación de dos capas, memoria de conversación persistente y una evaluación manual documentada con 20 preguntas reales.

El resto de proyectos (API fullstack, dashboard operativo) están en roadmap y se irán sumando con su propia captura a medida que avancen.

## 📬 Contacto

[![Email](https://img.shields.io/badge/Email-ingeniero.jose.ahumada@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white&labelColor=101010)](mailto:ingeniero.jose.ahumada@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-+57_300_423_7458-25D366?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=101010)](https://wa.me/573004237458)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jose_Ahumada_Navarro-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/jose-ahumada-navarro/)
