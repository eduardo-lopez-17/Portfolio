/**
 * Galería de Fotografías - Datos y Metadatos
 * 
 * Puedes añadir, eliminar o editar tus fotos aquí.
 * Para usar tus propias fotos:
 * 1. Coloca tus imágenes en la carpeta 'images/' (ej: images/mi-foto.jpg)
 * 2. Cambia la propiedad 'src' por la ruta de tu imagen ('images/mi-foto.jpg')
 * 3. Actualiza el título, categoría y los datos EXIF (cámara, apertura, ISO, etc.)
 */

const GALLERY_DATA = [
  {
    id: 1,
    title: "Resplandor en la Lluvia",
    category: "neon",
    categoryName: "Luces de Neón",
    story: "Las gotas de lluvia sobre el asfalto transforman la calle en un espejo de colores artificiales. El momento exacto en que la ciudad cobra una segunda vida.",
    src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    location: "Distrito Central",
    exif: {
      camera: "Sony A7 III",
      lens: "35mm f/1.4 GM",
      focalLength: "35mm",
      aperture: "f/1.8",
      shutterSpeed: "1/60s",
      iso: "1600"
    },
    featured: true
  },
  {
    id: 2,
    title: "Estelas de Medianoche",
    category: "long-exposure",
    categoryName: "Larga Exposición",
    story: "Ocho segundos de exposición bastan para convertir el flujo caótico de automóviles en ríos de luz continua entre los rascacielos.",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    location: "Avenida Principal",
    exif: {
      camera: "Sony A7 III",
      lens: "24-70mm f/2.8",
      focalLength: "28mm",
      aperture: "f/11",
      shutterSpeed: "8.0s",
      iso: "100"
    },
    featured: true
  },
  {
    id: 3,
    title: "El Último Pasajero",
    category: "urban",
    categoryName: "Calles & Penumbra",
    story: "Una estación subterránea casi desierta a las 2:00 AM. La luz fría fluorescente recortando las sombras en los andenes.",
    src: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
    location: "Estación Terminal",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "23mm f/1.4",
      focalLength: "23mm",
      aperture: "f/1.4",
      shutterSpeed: "1/125s",
      iso: "3200"
    },
    featured: false
  },
  {
    id: 4,
    title: "Vaho y Neón",
    category: "neon",
    categoryName: "Luces de Neón",
    story: "El vapor de un puesto callejero nocturno difuminando los letreros luminosos. La calidez del encuentro en una noche gélida.",
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80",
    location: "Callejón Antiguo",
    exif: {
      camera: "Sony A7 III",
      lens: "50mm f/1.8",
      focalLength: "50mm",
      aperture: "f/2.0",
      shutterSpeed: "1/80s",
      iso: "2000"
    },
    featured: true
  },
  {
    id: 5,
    title: "Silueta en la Niebla",
    category: "portrait",
    categoryName: "Retrato Nocturno",
    story: "La figura solitaria recortada contra los faros lejanos. Una composición donde la penumbra cuenta más historia que la luz misma.",
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    location: "Puente Norte",
    exif: {
      camera: "Sony A7 III",
      lens: "85mm f/1.4 GM",
      focalLength: "85mm",
      aperture: "f/1.6",
      shutterSpeed: "1/100s",
      iso: "1250"
    },
    featured: false
  },
  {
    id: 6,
    title: "Laberinto de Neón",
    category: "urban",
    categoryName: "Calles & Penumbra",
    story: "Callejones estrechos donde la luz de los comercios apenas roza el suelo. Pequeños rincones que pasan desapercibidos bajo la luz solar.",
    src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    location: "Barrio Histórico",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "16-55mm f/2.8",
      focalLength: "18mm",
      aperture: "f/2.8",
      shutterSpeed: "1/40s",
      iso: "1600"
    },
    featured: true
  },
  {
    id: 7,
    title: "Constelación Urbana",
    category: "long-exposure",
    categoryName: "Larga Exposición",
    story: "La ciudad vista desde lo alto parece una placa madre de luces vivas. Minutos de calma en la cumbre contemplando el horizonte.",
    src: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=800&q=80",
    location: "Mirador Panorámico",
    exif: {
      camera: "Sony A7 III",
      lens: "16-35mm f/2.8 GM",
      focalLength: "16mm",
      aperture: "f/8.0",
      shutterSpeed: "15.0s",
      iso: "100"
    },
    featured: false
  },
  {
    id: 8,
    title: "Luz de Sodio y Lluvia",
    category: "urban",
    categoryName: "Calles & Penumbra",
    story: "Ese característico brillo ámbar de las farolas tradicionales iluminando un banco solitario. Nostalgia nocturna pura.",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    location: "Parque Central",
    exif: {
      camera: "Sony A7 III",
      lens: "50mm f/1.8",
      focalLength: "50mm",
      aperture: "f/1.8",
      shutterSpeed: "1/50s",
      iso: "800"
    },
    featured: false
  },
  {
    id: 9,
    title: "Bokeh en el Tráfico",
    category: "neon",
    categoryName: "Luces de Neón",
    story: "El desenfoque de los faros crea círculos luminosos que parecen flotar en el aire como gemas líquidas.",
    src: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1600&q=85",
    thumb: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80",
    location: "Paso Elevado",
    exif: {
      camera: "Sony A7 III",
      lens: "85mm f/1.4 GM",
      focalLength: "85mm",
      aperture: "f/1.4",
      shutterSpeed: "1/160s",
      iso: "2500"
    },
    featured: true
  }
];
