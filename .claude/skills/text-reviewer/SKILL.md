---
name: text-reviewer
description: Revisa el copy en español del portafolio web (los valores de texto en src/data/portfolio.js y los textos visibles dentro de los .jsx bajo src/components/) buscando errores de ortografía y gramática, desviaciones del tono cercano y conversacional del sitio, y anglicismos innecesarios que tengan un equivalente natural en español. Usa esta skill siempre que el usuario pida revisar, auditar, pulir o corregir los textos, el copy, la redacción, el tono o la ortografía del sitio, o pida detectar anglicismos — incluso si no nombra la skill explícitamente (p. ej. "revisa cómo está escrita la web", "¿el texto del hero suena bien?", "quita los anglicismos del about me").
---

## Por qué existe esta skill

El sitio está escrito en un español cercano y directo — mira el blurb de `profile` en `portfolio.js`: *"Construyo asistentes virtuales de forma práctica... Menos humo, más un bot que sí te ayude en el día a día."* Esa voz es parte de la marca personal del autor: nada de lenguaje corporativo, nada de rigidez, nada de anglicismos forzados. Esta skill existe para detectar dónde el texto se aleja de esa voz, tiene errores de ortografía o gramática, o cuela un anglicismo que tiene un equivalente natural en español.

## Qué textos revisar (alcance)

Revisa solo contenido que un visitante lee, no código:

- Todos los valores de cadena en `src/data/portfolio.js` (`profile.role`, `profile.blurb`, `project.desc`, `experience.desc`, etc.) — este archivo es la fuente de la mayoría del copy del sitio.
- El texto dentro de los elementos JSX (children) y en props visibles al usuario (`alt`, `placeholder`, `aria-label`, `title`) en todos los `.jsx` bajo `src/components/`.

No revises: nombres de clases CSS, nombres de variables o props técnicas, valores de `id`, URLs, nombres de archivos, ni comentarios de código.

Si encuentras un componente que es un placeholder vacío sin copy real todavía (por ejemplo un `<div>NombreComponente</div>` sin más texto, o un componente que ni siquiera está importado en ningún otro archivo), no lo trates como hallazgo de texto — menciónalo aparte como nota ("componente sin contenido / no usado"), porque no es copy que un visitante llegue a leer.

## Cómo revisar

Para cada bloque de texto, evalúa estos tres criterios por separado — un mismo texto puede fallar en más de uno:

### 1. Ortografía y gramática (español)

Español neutro/latinoamericano, coherente con que el autor vive en Medellín, Colombia. Revisa tildes, concordancia de género/número, puntuación, y construcciones calcadas del inglés que suenan raras en español (gerundios mal usados, voz pasiva forzada, "false friends").

### 2. Tono cercano y conversacional

El texto debe sonar como alguien hablándole directo a otra persona, no como un folleto corporativo. Señales de que el tono se desvió:

- Jerga de RRHH o marketing ("sinergia", "disruptivo", "de clase mundial", "soluciones integrales", "orientado a resultados").
- Voz pasiva o impersonal donde cabría la primera persona ("se desarrolló un sistema" en vez de "desarrollé un sistema").
- Frases largas y abstractas donde el resto del sitio usa frases cortas y concretas.

Usa como vara de medir textos que el propio sitio ya tiene con el tono correcto — no los reescribas, son el ejemplo a seguir:

- *"Hola, mi nombre es"* (saludo)
- *"Menos humo, más un bot que sí te ayude en el día a día."* (blurb)
- *"Migrar el asistente a WhatsApp cuando Telegram esté estable."* (descripción de un proyecto)

### 3. Anglicismos innecesarios

Marca una palabra o expresión en inglés solo si existe un equivalente natural y de uso común en español que no suene forzado. Ejemplos a marcar: "mail" → "correo", "call" → "llamada", "link" → "enlace", "team" → "equipo", o abreviaturas informales tipo "auth" → "autenticación" cuando aparecen sueltas en una frase que por lo demás está en español cuidado (distinto de usarlas dentro de un stack técnico tipo "CRUD, API REST").

NO marques términos técnicos de la industria que ya se usan en español técnico sin traducción natural, y que el propio sitio ya usa con normalidad: "software", "frontend", "backend", "deploy", "stack", "bot", "webhook", "dashboard", "roadmap", "sprint", "framework", "chat"/"email" (ya aceptados por la RAE), nombres propios de tecnologías (React, Docker, AWS...) y nombres de producto. El público de este sitio son otros developers/reclutadores técnicos, así que la jerga de producto/tech no es un anglicismo a corregir — ahí la duda se resuelve a favor de NO marcarlo, porque forzar una traducción que suena más rara que la palabra en inglés tal como la usa cualquier developer hispanohablante es peor que dejarla.

También marca, dentro de esta categoría, inconsistencias de estilo en un mismo término prestado repetido varias veces en el sitio (por ejemplo "Full Stack", "FullStack" y "fullstack" usados cada uno en un sitio distinto) — no por ser anglicismo, sino porque un término prestado debería escribirse siempre igual.

## Formato del reporte

Agrupa por archivo. Para cada hallazgo:

- **Texto original** (la frase completa, no solo la palabra suelta) y su ubicación (archivo y línea aproximada).
- **Categoría**: Ortografía/Gramática | Tono | Anglicismo.
- Qué está mal, en una frase.
- **Sugerencia concreta**: la frase ya reescrita, no solo una descripción del problema.

Si un archivo no tiene hallazgos, no lo listes — no hace falta anunciar que un archivo quedó limpio. Cierra con un resumen corto: cuántos archivos se revisaron y cuántos quedaron sin hallazgos.

## Aplicar los cambios

Por defecto, solo reporta — no edites nada todavía. Si el usuario pide aplicar los cambios (por ejemplo "aplícalos", "corrige esto", o invoca la skill con el argumento `--fix`), edita directamente los archivos fuente (`portfolio.js` y los `.jsx` correspondientes) usando las sugerencias del reporte, y muestra después un resumen de qué se cambió en cada archivo.
