# PROYECTO ABP INTERDISCIPLINARIO

Aplicación web para diseñar, revisar y exportar proyectos de Aprendizaje Basado en Proyectos interdisciplinarios.

## Funcionalidades del MVP

- Identificación del proyecto.
- Selección de niveles y asignaturas.
- Generación de descripción, pregunta guía, desafío, propósito y objetivos.
- Objetivo general + 3 objetivos específicos.
- Sugerencia y selección de objetivos curriculares.
- Planificación clase a clase.
- Evidencias e instrumentos de evaluación.
- Control de coherencia pedagógica.
- Persistencia local del formulario.
- Exportación editable a Word (.docx).
- Diseño responsive.

## Ejecutar localmente

Requiere Node.js 18+.

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

El resultado queda en `dist/`.

## Publicar en GitHub

1. Crea un repositorio, por ejemplo `proyecto-abp-interdisciplinario`.
2. Sube todo el contenido de este proyecto.
3. Ejecuta `npm install` y `npm run build` para verificarlo.
4. Para GitHub Pages, puedes publicar `dist/` mediante GitHub Actions o utilizar Vercel/Netlify.

## Importante sobre el currículo

`src/data/curriculum.js` contiene un corpus inicial demostrativo para probar el flujo. Antes de utilizar la aplicación como herramienta curricular institucional, debe cargarse el corpus oficial correspondiente a las Bases Curriculares y sus documentos de apoyo, conservando nivel, asignatura/ámbito, OA, indicadores, habilidades, actitudes y fuente.

## Próxima etapa recomendada

- Incorporar el corpus curricular oficial completo.
- Añadir edición de OAs dentro de la interfaz.
- Generar instrumentos completos (rúbrica, lista de cotejo, escala, registro, autoevaluación y coevaluación).
- Incorporar DUA, vinculación comunitaria, roles, productos intermedios, cronograma y proyección.
- Conectar un backend seguro con un modelo de IA para generación contextualizada.


## Publicar en GitHub Pages

Este repositorio está preparado para GitHub Pages mediante GitHub Actions.

1. Sube todo el contenido del proyecto a la raíz del repositorio.
2. En GitHub entra a **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Haz un commit en la rama `main`.
5. Ve a **Actions** y espera a que termine **Deploy to GitHub Pages**.
6. En **Settings → Pages** aparecerá la URL pública.

Importante: no uses `/docs` como carpeta de publicación. El workflow construye la aplicación con Vite y publica automáticamente `dist/`.

### Prueba local

```bash
npm install
npm run dev
```

### Compilación local

```bash
npm run build
npm run preview
```
