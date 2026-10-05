/**
 * Lógica Principal de la Galería y Portafolio
 * - Renderizado dinámico de tarjetas fotográficas
 * - Filtrado fluido por categoría
 * - Lightbox cinematográfico con soporte para teclado y gestos táctiles
 * - Ficha técnica EXIF detallada
 * - Luz ambiental reactiva al cursor
 */

document.addEventListener("DOMContentLoaded", () => {
  // Elementos DOM principales
  const galleryGrid = document.getElementById("galleryGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const lightbox = document.getElementById("lightboxDialog");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCounter = document.getElementById("lightboxCounter");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxCategory = document.getElementById("lightboxCategory");
  const lightboxStory = document.getElementById("lightboxStory");
  const lightboxLocation = document.getElementById("lightboxLocation");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
  const lightboxNextBtn = document.getElementById("lightboxNextBtn");
  
  // Elementos EXIF en lightbox
  const exifCamera = document.getElementById("exifCamera");
  const exifLens = document.getElementById("exifLens");
  const exifAperture = document.getElementById("exifAperture");
  const exifShutter = document.getElementById("exifShutter");
  const exifIso = document.getElementById("exifIso");
  const exifFocal = document.getElementById("exifFocal");

  // Estado actual
  let currentFilter = "all";
  let visiblePhotos = [...GALLERY_DATA];
  let currentIndex = 0;

  // 1. Inicializar Galería
  function renderGallery(photos) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = "";

    if (photos.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No hay fotografías en esta categoría aún.</p>
          <span style="font-size: 0.9rem; font-family: var(--font-mono);">Vuelve a seleccionar "Todas" para explorar más fotos.</span>
        </div>
      `;
      return;
    }

    photos.forEach((photo, idx) => {
      const card = document.createElement("article");
      card.className = "photo-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Ver fotografía: ${photo.title}`);
      
      card.innerHTML = `
        <div class="photo-img-wrap">
          <img src="${photo.thumb}" alt="${photo.title}" loading="lazy" decoding="async">
          <div class="photo-overlay">
            <span class="photo-overlay-action">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              Ver en Detalle
            </span>
          </div>
        </div>
        <div class="photo-info">
          <div class="photo-header-row">
            <h3 class="photo-title">${photo.title}</h3>
            <span class="photo-location">${photo.location}</span>
          </div>
          <div class="photo-exif-pill">
            <span class="exif-chip">${photo.exif.aperture}</span>
            <span class="exif-chip">${photo.exif.shutterSpeed}</span>
            <span class="exif-chip">ISO ${photo.exif.iso}</span>
          </div>
        </div>
      `;

      // Evento de click para abrir modal
      card.addEventListener("click", () => openLightbox(idx));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(idx);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  // 2. Filtrado de Categorías
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      if (currentFilter === "all") {
        visiblePhotos = [...GALLERY_DATA];
      } else {
        visiblePhotos = GALLERY_DATA.filter(photo => photo.category === currentFilter);
      }

      renderGallery(visiblePhotos);
    });
  });

  // 3. Control de Lightbox Modal
  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "");
    }
    document.body.style.overflow = "hidden"; // Evitar scroll de fondo
  }

  function closeLightbox() {
    if (typeof lightbox.close === "function") {
      lightbox.close();
    } else {
      lightbox.removeAttribute("open");
    }
    document.body.style.overflow = "";
  }

  function updateLightboxContent() {
    const photo = visiblePhotos[currentIndex];
    if (!photo) return;

    // Efecto de fade sutil en la imagen al cambiar
    lightboxImg.style.opacity = "0.2";
    
    const highRes = new Image();
    highRes.src = photo.src;
    highRes.onload = () => {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.title;
      lightboxImg.style.opacity = "1";
    };

    // Pre-cargar adyacentes para máxima velocidad
    preloadAdjacentPhotos();

    // Actualizar Textos
    lightboxCounter.textContent = `${currentIndex + 1} / ${visiblePhotos.length}`;
    lightboxTitle.textContent = photo.title;
    lightboxCategory.textContent = photo.categoryName;
    lightboxStory.textContent = photo.story || "Captura nocturna realizada con enfoque manual y medición puntual.";
    if (lightboxLocation) lightboxLocation.textContent = photo.location;

    // Actualizar Ficha EXIF
    exifCamera.textContent = photo.exif.camera;
    exifLens.textContent = photo.exif.lens;
    exifAperture.textContent = photo.exif.aperture;
    exifShutter.textContent = photo.exif.shutterSpeed;
    exifIso.textContent = photo.exif.iso;
    exifFocal.textContent = photo.exif.focalLength;
  }

  function showNextPhoto() {
    currentIndex = (currentIndex + 1) % visiblePhotos.length;
    updateLightboxContent();
  }

  function showPrevPhoto() {
    currentIndex = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
    updateLightboxContent();
  }

  function preloadAdjacentPhotos() {
    const nextIdx = (currentIndex + 1) % visiblePhotos.length;
    const prevIdx = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
    if (visiblePhotos[nextIdx]) {
      const nextImg = new Image();
      nextImg.src = visiblePhotos[nextIdx].src;
    }
    if (visiblePhotos[prevIdx]) {
      const prevImg = new Image();
      prevImg.src = visiblePhotos[prevIdx].src;
    }
  }

  // Event Listeners del Lightbox
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", showNextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", showPrevPhoto);

  // Cerrar haciendo click en el backdrop oscuro
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      const rect = lightbox.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeLightbox();
      }
    });

    // Soporte para gestos de teclado (Flechas y ESC)
    window.addEventListener("keydown", (e) => {
      if (!lightbox.open && !lightbox.hasAttribute("open")) return;
      if (e.key === "ArrowRight") {
        showNextPhoto();
      } else if (e.key === "ArrowLeft") {
        showPrevPhoto();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }

  // 4. Luz ambiental reactiva al cursor
  window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty("--mouse-x", `${x}%`);
    document.documentElement.style.setProperty("--mouse-y", `${y}%`);
  });

  // 5. Menú móvil
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }

  // 6. Año dinámico en el footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Render inicial
  renderGallery(visiblePhotos);
});
