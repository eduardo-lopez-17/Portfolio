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
    id: 2,
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
