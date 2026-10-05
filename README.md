# ✦ Portafolio de Fotografía · Diario Visual

Un portafolio web elegante, moderno y ultra ligero diseñado para compartir capturas fotográficas (nocturnas, urbanas, paisajes y detalles cotidianos), con una estética oscura y acentos de luz estilo **Midnight & Neón**.

Construido en una sola página con **HTML5 semántico, CSS moderno y JavaScript Vanilla**, sin pasos de compilación ni dependencias. Listo para ser alojado gratis en **GitHub Pages**.

---

## 📸 Características

- **Diseño Oscuro con Halo de Luz**: Fondo negro profundo (`#07080a`) con acentos de luz donde las fotos brillan con alto contraste, además de un efecto sutil que acompaña el cursor.
- **Enfoque de Aprendizaje**: Estructurado como un diario visual de alguien que está empezando y aprendiendo sobre composición, técnica y edición.
- **Ficha Técnica EXIF en cada Foto**: Muestra los parámetros reales de disparo que te gusten (Cámara, Objetivo, Apertura $f$, Velocidad de obturación, Sensibilidad ISO y Distancia focal).
- **Visor Lightbox Integrado (`<dialog>`)**: Visor a pantalla completa para apreciar las fotos en grande, con navegación por teclado (`←` y `→`) y tecla `Escape`.
- **Filtros por Categorías**: Filtra al instante entre *Nocturna & Luces*, *Calles & Urbana*, *Paisajes & Lugares* y *Detalles & Cotidiano*.
- **Conexión & Comunidad**: Enlaces directos a Instagram, Correo y perfiles de foto para conectar con otros aficionados, intercambiar consejos o planear salidas.
- **Todo en una sola página**: Navegación fluida y limpia, sin tiempos de carga entre páginas.
- **100% Responsivo**: Se adapta perfectamente a teléfonos móviles, tablets y ordenadores.

---

## 🚀 Cómo Probarlo en Tu Computadora

1. Simplemente haz doble clic en el archivo `index.html` para abrirlo en tu navegador favorito.
2. ¡Listo! Todo funciona sin instalar Node.js ni configurar servidores.

---

## 🌐 Cómo Publicar tu Portafolio en GitHub Pages

Subir tu portafolio a internet para compartirlo con amigos o la comunidad es gratuito y toma un par de minutos:

### Paso 1: Subir tus cambios a tu repositorio de GitHub
Abre tu terminal en la carpeta del proyecto y ejecuta:

```bash
git add .
git commit -m "feat: actualizar diseño y fotos del portafolio"
```

Si aún no has vinculado tu repositorio remoto en GitHub:
```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

### Paso 2: Activar GitHub Pages
1. Entra a tu repositorio en GitHub.
2. Ve a la pestaña **Settings** (Ajustes).
3. En el menú izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Source**, selecciona:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Haz clic en **Save**.
6. En breves minutos, tu portafolio estará visible en:  
   👉 `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

---

## 🎨 Cómo Añadir Tus Propias Fotos

Abre el archivo `js/gallery-data.js`. Cada fotografía se define con un bloque sencillo como este:

```javascript
{
  id: 1,
  title: "Tu Título de la Foto",
  category: "nocturna", // Opciones: 'nocturna', 'urbana', 'paisajes', 'detalles'
  categoryName: "Nocturna & Luces",
  src: "images/mi-foto.jpg",   // Ruta a tu foto en la carpeta images/
  thumb: "images/mi-foto.jpg", // Puedes usar la misma ruta
  location: "Lugar o Ciudad",
  exif: {
    camera: "Sony A7 III",
    lens: "35mm f/1.4",
    focalLength: "35mm",
    aperture: "f/1.8",
    shutterSpeed: "1/60s",
    iso: "1600"
  }
}
```

> **Consejo**: Guarda tus fotos en la carpeta `images/`. Si las comprimes un poco con herramientas gratuitas como [Squoosh.app](https://squoosh.app) a un tamaño de 1600px o 2000px de ancho, tu web cargará al instante incluso en conexiones móviles.

---

## 📁 Estructura del Proyecto

```text
Portfolio/
├── .nojekyll           # Configuración para GitHub Pages
├── index.html          # Página única con toda la estructura y secciones
├── README.md           # Guía de publicación y personalización
├── css/
│   └── style.css       # Estilos visuales, modo oscuro, neón y layout responsivo
├── js/
│   ├── gallery-data.js # Archivo donde agregas y editas tus fotos y parámetros EXIF
│   └── app.js          # Control de filtros, visor modal y navegación
└── images/             # Carpeta donde colocas tus archivos de fotografía
    └── README.md
```
