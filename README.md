# PixelPile 🎮

Apila los juegos que sí importan.

PixelPile es una web app para descubrir videojuegos, revisar sus notas y plataformas, y guardarlos en tu propia lista personal. Proyecto final del bootcamp de desarrollo web de TripleTen.

🔗 **[Ver demo en vivo](https://ivancvnts.github.io/pixel-pile-frontend/)**

## Tabla de contenidos

- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Capturas](#capturas)
- [Empezando](#empezando)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Decisiones de arquitectura](#decisiones-de-arquitectura)
- [Roadmap](#roadmap)
- [Atribución](#atribución)

## Características

- 🔍 **Búsqueda de juegos** en tiempo real usando la API de RAWG, con filtros rápidos por género y calificación de Metacritic
- 🎯 **Destacados de la semana** — juegos populares de los últimos meses al entrar a la página
- 📄 **Detalle de cada juego** en un popup: portada, descripción, desarrolladora, duración media y plataformas
- 👤 **Autenticación** (simulada) con inicio de sesión y registro
- ❤️ **Guardar/quitar juegos** de tu lista personal, con página dedicada (`/saved-games`)
- ⏩ **Paginación** tipo "cargar más" tanto en destacados como en resultados de búsqueda
- 📱 **Totalmente responsive**, con menú de navegación adaptado a mobile
- ⚡ Loaders, validación de formularios en tiempo real y manejo de estados vacíos/error

## Stack tecnológico

**Frontend**

- React + Vite
- React Router
- Context API (sin librerías externas de manejo de estado)
- CSS puro con metodología BEM

**Herramientas**

- ESLint + Prettier
- pnpm
- Fuentes autohospedadas en WOFF2 (Chakra Petch, Space Grotesk, JetBrains Mono)

**API externa**

- [RAWG Video Games Database](https://rawg.io/apidocs)

**Deploy**

- GitHub Pages

## Empezando

### Requisitos previos

- Node.js 18+
- pnpm
- Una API key gratuita de [RAWG](https://rawg.io/apidocs)

### Instalación

```bash
git clone https://github.com/ivancvnts/pixel-pile-frontend.git
cd pixel-pile-frontend
pnpm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```
VITE_RAWG_API_KEY=tu_api_key_aquí
```

### Correr en desarrollo

```bash
pnpm dev
```

### Build de producción

```bash
pnpm build
pnpm preview
```

## Estructura del proyecto

```
src/
├── components/       # Un folder por componente (Componente.jsx + Componente.css)
├── contexts/         # PopupContext y UserContext
├── utils/            # RAWGApi.js — capa de comunicación con la API
├── styles/           # Variables CSS globales y estilos base
└── vendor/           # Fuentes y normalize.css
```

## Atribución

Datos e imágenes de videojuegos proporcionados por [RAWG Video Games Database](https://rawg.io).
