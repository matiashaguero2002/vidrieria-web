# SPEC-001 — Página principal

## 1. Objetivo

Crear la página principal de una empresa dedicada a la fabricación e instalación de aberturas de aluminio y productos de vidrio.

La página debe presentar la empresa, mostrar sus principales categorías de productos y dirigir al visitante hacia la solicitud de presupuesto.

## 2. Usuario

El usuario principal es un visitante que busca información sobre aberturas de aluminio, puertas, ventanas, mamparas y otros productos relacionados.

No requiere autenticación.

## 3. Estructura de la página

La página principal debe contener las siguientes secciones, en este orden:

### 3.1 Encabezado

Debe contener:

Logo o nombre de la empresa.
Enlace a Inicio.
Enlace a Productos.
Enlace a Servicios.
Enlace a Proyectos.
Enlace a Contacto.
Botón destacado "Solicitar presupuesto".

En dispositivos móviles, el menú debe adaptarse a un menú desplegable.

### 3.2 Hero

Debe presentar:

Título principal relacionado con aberturas de aluminio y vidrio.
Texto breve describiendo los servicios de la empresa.
Imagen representativa.
Botón "Solicitar presupuesto".
Botón secundario "Ver productos".

El botón "Ver productos" debe dirigir a la sección o página de productos.

### 3.3 Productos destacados

Mostrar las principales categorías de productos:

Ventanas.
Puertas.
Mamparas.
Cerramientos.

Cada categoría debe mostrar:

Imagen.
Nombre.
Descripción breve.
Enlace para consultar más información.

### 3.4 Servicios

Mostrar los principales servicios:

Fabricación.
Instalación.
Asesoramiento.
Mantenimiento.

Cada servicio debe incluir un título y una descripción breve.

### 3.5 Proyectos destacados

Mostrar una selección de trabajos realizados mediante una galería de imágenes.

Cada proyecto debe mostrar:

Imagen.
Nombre del proyecto.
Tipo de trabajo realizado.

### 3.6 Llamado a la acción

Al final de la página debe existir una sección invitando al visitante a solicitar un presupuesto.

Debe contener:

Título.
Texto breve.
Botón "Solicitar presupuesto".

### 3.7 Pie de página

Debe contener:

Nombre de la empresa.
Información de contacto.
Teléfono.
Correo electrónico.
Enlaces de navegación.
Redes sociales.

## 4. Requisitos de diseño

Diseño moderno y profesional.
Debe transmitir una imagen de calidad y confianza.
Diseño responsive para escritorio, tablet y móvil.
Utilizar Tailwind CSS.
Mantener una jerarquía visual clara.
Los botones principales deben destacar visualmente.
Las imágenes deben mantener proporciones adecuadas sin deformarse.

## 5. Requisitos técnicos

Utilizar Next.js con App Router.
Utilizar TypeScript.
Utilizar componentes reutilizables cuando corresponda.
No agregar dependencias externas sin justificar su necesidad.
No implementar todavía base de datos.
No implementar autenticación.
No implementar el formulario funcional de presupuesto en esta etapa.

## 6. Criterios de aceptación

La página principal puede accederse mediante `/`.
Todas las secciones indicadas aparecen en el orden especificado.
La navegación funciona correctamente.
La página es usable en escritorio y dispositivos móviles.
No existen errores de TypeScript o ESLint.
Las imágenes no generan deformaciones ni desbordamientos.
Los botones y enlaces principales son claramente identificables.
La aplicación puede ejecutarse mediante `npm run dev`.
