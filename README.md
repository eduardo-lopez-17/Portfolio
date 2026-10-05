# ✦ Nocturna · Portafolio de Fotografía Nocturna

Un portafolio web elegante, moderno y ultra ligero diseñado especialmente para fotografía nocturna, urbana y de larga exposición, con una estética **Midnight Noir & Neón**. 

Construido con **HTML5 semántico, CSS moderno y JavaScript Vanilla**, sin pasos de compilación ni dependencias pesadas. Listo para ser alojado de forma gratuita en **GitHub Pages**.

---

## 📸 Características del Diseño

- **Estética Midnight Noir**: Fondo oscuro profundo con acentos sutiles de neón (`cyan`, `ámbar` y `magenta`) para que los colores vivos de las fotos nocturnas resalten con máximo contraste.
- **Halo de Luz Reactivo**: Efecto de iluminación sutil que acompaña el cursor del ratón, emulando una linterna en la oscuridad.
- **Lightbox Cinematográfico**: Visor a pantalla completa usando el elemento nativo `<dialog>`, con navegación por flechas de teclado (`←` y `→`), tecla `Escape` y cierre táctil.
- **Ficha Técnica EXIF**: Muestra parámetros reales de cada toma (Cámara, Objetivo, Apertura $f$, Velocidad de obturación, ISO y Distancia focal) y un breve relato del momento.
- **Filtros por Categorías**: Filtra al instante entre *Luces de Neón*, *Larga Exposición*, *Calles & Penumbra* y *Retratos*.
- **Sección Artística & No Comercial**: Enfoque personal por amor al arte, con citas, lista de equipo fotográfico y canales de contacto directo (Instagram, correo, etc.) para photowalks y colaboraciones.
- **100% Responsivo**: Adaptado para teléfonos móviles, tablets y monitores de alta resolución.

---

## 🚀 Cómo Probarlo en Tu Computadora

1. Simplemente haz doble clic en el archivo `index.html` para abrirlo en tu navegador favorito (Chrome, Edge, Firefox, Safari).
2. ¡Listo! Todo funciona sin instalar Node.js ni configurar servidores complejos.

---

## 🌐 Cómo Publicar tu Portafolio en GitHub Pages

Subir tu portafolio a internet para que cualquier persona del mundo pueda verlo es completamente gratuito y toma 2 minutos:

### Paso 1: Inicializar Git y subir a GitHub
Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "feat: portafolio nocturno inicial"
```

Luego crea un repositorio en [GitHub.com](https://github.com/new) (por ejemplo llamado `portfolio` o `tu-usuario.github.io`) y vincula tu repositorio local:

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### Paso 2: Activar GitHub Pages
1. Entra a tu repositorio en GitHub en el navegador.
2. Haz clic en la pestaña **Settings** (Ajustes).
3. En la barra lateral izquierda, haz clic en **Pages**.
4. En **Build and deployment > Source**, selecciona:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Haz clic en **Save**.
6. En un par de minutos, GitHub te dará la URL pública de tu web:  
   👉 `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

---

## 🎨 Cómo Personalizar Tu Portafolio

### 1. Añadir tus propias fotos
Abre el archivo `js/gallery-data.js`. Cada fotografía es un bloque como este:

```javascript
{
  id: 1,
  title: "Tu Título Aquí",
  category: "neon", // Opciones: 'neon', 'long-exposure', 'urban', 'portrait'
  categoryName: "Luces de Neón",
  story: "Cuenta brevemente qué sentiste al tomar esta foto o el contexto.",
  src: "images/mi-foto-alta-resolucion.jpg", // Tu foto grande
  thumb: "images/mi-foto-miniatura.jpg",     // O la misma ruta
  location: "Tu Ciudad o Lugar",
  exif: {
    camera: "Tu Cámara (ej. Sony A7 III)",
    lens: "Tu Lente (ej. 35mm f/1.4)",
    focalLength: "35mm",
    aperture: "f/1.8",
    shutterSpeed: "1/60s",
    iso: "1600"
  },
  featured: true
}
```

> **Consejo para tus fotos**: Guarda tus imágenes en la carpeta `images/`. Te recomendamos optimizarlas previamente con herramientas como [Squoosh](https://squoosh.app) a un tamaño de entre 1600px y 2000px de ancho para que carguen al instante.

### 2. Cambiar tu información personal y redes
En `index.html`:
- Busca `NOCTURNA` en el `<header>` si quieres poner tu nombre o seudónimo fotográfico.
- En la sección `#sobre-mi`, personaliza tu historia y la lista de tu equipo en *En mi Mochila*.
- En la sección `#contacto`, actualiza los enlaces con tu Instagram (`@tu_usuario`), tu correo electrónico real en el botón `mailto:` y tus perfiles fotográficos (Flickr, 500px, VSCO).

---

## 📁 Estructura del Proyecto

```text
Portfolio/
├── .nojekyll           # Evita que GitHub Pages omita archivos estáticos
├── index.html          # Estructura semántica principal
├── README.md           # Guía e instrucciones de publicación
├── css/
│   └── style.css       # Estilos Darkroom Noir, Neón, Glassmorphism y Media Queries
├── js/
│   ├── gallery-data.js # Archivo donde agregas y editas tus fotos y datos EXIF
│   └── app.js          # Lógica interactiva (filtros, lightbox, navegación de teclado)
└── images/             # Carpeta donde colocas tus archivos de fotografía
    └── README.md
```

---

Hecho con pasión por la fotografía nocturna y la luz artificial. ¡Disfruta compartiendo tu visión de la noche con el mundo!
