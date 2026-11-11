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
    title: "The Path Is Now Open",
    category: "detalles",
    categoryName: "Details & Everyday",
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
    id: 2,
    title: "The Journey Starts Here",
    category: "detalles",
    categoryName: "Details & Everyday",
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
  },
  {
    id: 3,
    title: "Light Behind Bars",
    category: "paisajes",
    categoryName: "Landscapes & Places",
    src: "images/jail.jpg",
    thumb: "images/jail.jpg",
    location: "Biwako Bridge",
    exif: {
      camera: "Nikon Z30",
      lens: "NIKKOR Z DX",
      focalLength: "24.5mm",
      aperture: "f/7.1",
      shutterSpeed: "1/4000s",
      iso: "100"
    }
  },
  {
    id: 4,
    title: "Gateway to Autumn",
    category: "urbana",
    categoryName: "Streets & Urban",
    src: "images/portal.jpg",
    thumb: "images/portal.jpg",
    location: "Mii-dera Niomon Gate",
    exif: {
      camera: "Nikon Z30",
      lens: "NIKKOR Z DX",
      focalLength: "50mm",
      aperture: "f/6.3",
      shutterSpeed: "1/500s",
      iso: "100"
    }
  }
];
