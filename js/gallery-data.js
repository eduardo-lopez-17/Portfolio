/**
 * Galería de Fotografías - Datos y Metadatos
 * 
 * Puedes añadir, eliminar o editar tus fotos aquí de forma muy sencilla.
 * Para usar tus propias fotos:
 * 1. Coloca tus imágenes en la carpeta 'images/' (ej: images/mi-foto.jpg)
 * 2. Cambia la propiedad 'src' y 'thumb' por la ruta de tu foto ('images/mi-foto.jpg')
 * 3. Actualiza el título, categoría y los datos EXIF (apertura, velocidad, ISO, etc.)
 */

const GALLERY_DATA = [
  {
    id: 1,
    title: "Reflejos de Neón",
    category: "nocturna",
    categoryName: "Nocturna & Luces",
    src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    location: "Centro de la Ciudad",
    exif: {
      camera: "Sony A7 III",
      lens: "35mm f/1.4",
      focalLength: "35mm",
      aperture: "f/1.8",
      shutterSpeed: "1/60s",
      iso: "1600"
    }
  },
  {
    id: 2,
    title: "Caminata al Atardecer",
    category: "urbana",
    categoryName: "Calles & Urbana",
    src: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80",
    location: "Avenida Principal",
    exif: {
      camera: "Sony A7 III",
      lens: "50mm f/1.8",
      focalLength: "50mm",
      aperture: "f/2.8",
      shutterSpeed: "1/250s",
      iso: "200"
    }
  },
  {
    id: 3,
    title: "Estelas de Tráfico",
    category: "nocturna",
    categoryName: "Nocturna & Luces",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    location: "Paso a Desnivel",
    exif: {
      camera: "Sony A7 III",
      lens: "28mm f/2.0",
      focalLength: "28mm",
      aperture: "f/11",
      shutterSpeed: "6.0s",
      iso: "100"
    }
  },
  {
    id: 4,
    title: "Hora Dorada en el Mirador",
    category: "paisajes",
    categoryName: "Paisajes & Lugares",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    location: "Mirador del Valle",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "18-55mm f/2.8-4",
      focalLength: "18mm",
      aperture: "f/8.0",
      shutterSpeed: "1/120s",
      iso: "160"
    }
  },
  {
    id: 5,
    title: "Geometría Urbana",
    category: "urbana",
    categoryName: "Calles & Urbana",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    location: "Zona Financiera",
    exif: {
      camera: "Sony A7 III",
      lens: "50mm f/1.8",
      focalLength: "50mm",
      aperture: "f/4.0",
      shutterSpeed: "1/500s",
      iso: "100"
    }
  },
  {
    id: 6,
    title: "Luz de Cafetería",
    category: "nocturna",
    categoryName: "Nocturna & Luces",
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    location: "Callejón Antiguo",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "23mm f/1.4",
      focalLength: "23mm",
      aperture: "f/1.4",
      shutterSpeed: "1/80s",
      iso: "2000"
    }
  },
  {
    id: 7,
    title: "Niebla en la Ruta",
    category: "paisajes",
    categoryName: "Paisajes & Lugares",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    location: "Paso de Montaña",
    exif: {
      camera: "Sony A7 III",
      lens: "70-200mm f/4",
      focalLength: "70mm",
      aperture: "f/5.6",
      shutterSpeed: "1/320s",
      iso: "100"
    }
  },
  {
    id: 8,
    title: "Reflejo en el Pavimento",
    category: "detalles",
    categoryName: "Detalles & Cotidiano",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    location: "Parque",
    exif: {
      camera: "Sony A7 III",
      lens: "35mm f/1.4",
      focalLength: "35mm",
      aperture: "f/2.0",
      shutterSpeed: "1/125s",
      iso: "800"
    }
  },
  {
    id: 9,
    title: "Bokeh de Semáforos",
    category: "detalles",
    categoryName: "Detalles & Cotidiano",
    src: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
    location: "Intersección",
    exif: {
      camera: "Sony A7 III",
      lens: "85mm f/1.8",
      focalLength: "85mm",
      aperture: "f/1.8",
      shutterSpeed: "1/160s",
      iso: "1250"
    }
  },
  {
    id: 10,
    title: "The Path Is Now Open",
    category: "detalles",
    categoryName: "Detalles & Cotidiano",
    src: "images/path.jpg",
    thumb: "images/path.jpg",
    location: "Yamadaike Park",
    exif: {
      camera: "Nikon Z30",
      lens: "NIKKOR Z DX",
      focalLength: "16mm",
      aperture: "f/3.5",
      shutterSpeed: "1/160s",
      iso: "100"
    }
  },
  {
    id: 11,
    title: "The Journey Starts Here",
    category: "detalles",
    categoryName: "Detalles & Cotidiano",
    src: "images/journey.jpg",
    thumb: "images/journey.jpg",
    location: "Yamadaike Park",
    exif: {
      camera: "Nikon Z30",
      lens: "NIKKOR Z DX",
      focalLength: "16mm",
      aperture: "f/3.5",
      shutterSpeed: "1/160s",
      iso: "100"
    }
  }
  
];
