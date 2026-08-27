# SPEC-001 — Página principal

## 1. Objetivo

Crear la página principal de una empresa dedicada a la fabricación e instalación de aberturas de aluminio y productos de vidrio.

La página debe presentar la empresa, mostrar sus principales categorías de productos y dirigir al visitante hacia la solicitud de presupuesto.

La página será una **single-page** accesible desde `/`. No se crearán páginas adicionales como `/productos`, `/servicios` o `/proyectos` en esta especificación.

La empresa ficticia se llamará temporalmente **AluNova**.

## 2. Usuario

El usuario principal es un visitante que busca información sobre aberturas de aluminio, puertas, ventanas, mamparas y otros productos relacionados.

No requiere autenticación.

## 3. Estructura de la página

La página principal debe contener las siguientes secciones, en este orden:

### 3.1 Encabezado

Debe contener:

- Logo o nombre de la empresa (AluNova).
- Enlace a Inicio (`#inicio`).
- Enlace a Productos (`#productos`).
- Enlace a Servicios (`#servicios`).
- Enlace a Proyectos (`#proyectos`).
- Enlace a Contacto (`#contacto`).
- Botón destacado "Solicitar presupuesto" que dirige temporalmente a `#contacto`.

La navegación del header utilizará **anchors** hacia las secciones de la misma página: `#inicio`, `#productos`, `#servicios`, `#proyectos` y `#contacto`. No se crearán rutas adicionales en esta etapa.

En dispositivos móviles, el menú debe adaptarse a un menú desplegable (hamburguesa) con comportamiento accesible.

### 3.2 Hero

Debe presentar:

- Título principal relacionado con aberturas de aluminio y vidrio (AluNova).
- Texto breve describiendo los servicios de la empresa.
- Imagen representativa ubicada en `public/img/` y renderizada con `next/image`.
- Botón "Solicitar presupuesto" que dirige a `#contacto`.
- Botón secundario "Ver productos" que dirige a `#productos`.

La sección hero corresponderá al anchor `#inicio`.

### 3.3 Productos destacados

Mostrar las cuatro categorías de productos:

- Ventanas.
- Puertas.
- Mamparas.
- Cerramientos.

Cada categoría debe mostrar:

- Imagen ubicada en `public/img/` y renderizada con `next/image`.
- Nombre.
- Descripción breve.

No habrá páginas individuales de productos ni enlaces a detalle en esta etapa. La sección corresponde al anchor `#productos` y se presentará en grilla responsive.

### 3.4 Servicios

Mostrar los principales servicios:

- Fabricación.
- Instalación.
- Asesoramiento.
- Mantenimiento.

Cada servicio debe incluir un título y una descripción breve.

Los servicios se mostrarán en una **grilla de cuatro tarjetas** (1 columna en móvil, 2 en tablet, 4 en escritorio). La sección corresponde al anchor `#servicios`.

### 3.5 Proyectos destacados

Mostrar una selección de trabajos realizados mediante una galería de imágenes.

Cada proyecto debe mostrar:

- Imagen ubicada en `public/img/` y renderizada con `next/image`.
- Nombre del proyecto.
- Tipo de trabajo realizado.

Los proyectos se mostrarán mediante una **grilla estática de 6 imágenes** (2 columnas en móvil, 3 en escritorio). No utilizar carrusel, lightbox ni dependencias adicionales. La sección corresponde al anchor `#proyectos`.

### 3.6 Llamado a la acción

Al final de la página, antes del pie de página, debe existir una sección invitando al visitante a solicitar un presupuesto.

Debe contener:

- Título.
- Texto breve.
- Botón "Solicitar presupuesto" que dirige temporalmente a `#contacto`.

El formulario funcional de presupuesto queda **fuera del alcance** de esta especificación.

La sección de contacto/CTA corresponde al anchor `#contacto`.

### 3.7 Pie de página

Debe contener:

- Nombre de la empresa (AluNova).
- Información de contacto con placeholders orientados a Paraguay:
  - Teléfono: `+595 981 000 000`
  - Correo electrónico: `contacto@alunova.com.py`
  - Dirección: `Asunción, Paraguay`
- Enlaces de navegación (anchors a `#inicio`, `#productos`, `#servicios`, `#proyectos`, `#contacto`).
- Redes sociales (placeholders sin URLs reales en esta etapa).

## 4. Requisitos de diseño

- Diseño moderno y profesional.
- Debe transmitir una imagen de calidad y confianza.
- Diseño responsive para escritorio, tablet y móvil.
- Utilizar Tailwind CSS.
- Mantener una jerarquía visual clara.
- Los botones principales deben destacar visualmente.
- Las imágenes deben mantener proporciones adecuadas sin deformarse (usar `next/image` con `object-cover` y relaciones de aspecto definidas).
- Las imágenes provisionales estarán dentro de `public/img/`.
- Cambiar el idioma del documento HTML a español (`lang="es"` en `app/layout.tsx`).

## 5. Requisitos técnicos

- Utilizar Next.js con App Router.
- Utilizar TypeScript.
- Utilizar componentes reutilizables cuando corresponda.
- Utilizar `next/image` para todas las imágenes.
- Actualizar los metadatos de Next.js en `app/layout.tsx` para utilizar el nombre y descripción de AluNova en lugar de "Create Next App" (ej. `title: "AluNova — Aberturas de Aluminio y Vidrio"`, `description` acorde).
- No agregar dependencias externas sin justificar su necesidad. Mantener las dependencias actuales del proyecto.
- No implementar todavía base de datos, autenticación, backend ni formulario funcional.
- No implementar el formulario funcional de presupuesto en esta etapa; los botones "Solicitar presupuesto" dirigen a `#contacto`.

## 6. Criterios de aceptación

- La página principal puede accederse mediante `/` y es una single-page sin rutas adicionales.
- Todas las secciones indicadas aparecen en el orden especificado: Encabezado, Hero (`#inicio`), Productos (`#productos`), Servicios (`#servicios`), Proyectos (`#proyectos`), Llamado a la acción / Contacto (`#contacto`), Pie de página.
- La navegación del header utiliza anchors (`#inicio`, `#productos`, `#servicios`, `#proyectos`, `#contacto`) y funciona correctamente con scroll.
- Los botones "Solicitar presupuesto" dirigen a `#contacto` y el botón "Ver productos" dirige a `#productos`.
- La sección Productos muestra las cuatro categorías (Ventanas, Puertas, Mamparas, Cerramientos) con imagen, nombre y descripción, sin páginas individuales.
- La sección Servicios muestra los cuatro servicios en grilla de cuatro tarjetas.
- La sección Proyectos muestra una grilla estática de 6 imágenes sin carrusel/lightbox.
- La página es usable en escritorio, tablet y dispositivos móviles (menú desplegable funcional).
- El idioma del HTML es `es` y los metadatos reflejan AluNova.
- Las imágenes provienen de `public/img/` y usan `next/image` sin deformaciones ni desbordamientos.
- No existen errores de TypeScript o ESLint.
- Los botones y enlaces principales son claramente identificables.
- La aplicación puede ejecutarse mediante `npm run dev` sin necesidad de base de datos o backend.
