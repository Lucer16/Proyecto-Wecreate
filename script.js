document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".transition-container").classList.add("show");
});

// Carrusel de Iconos Inicio
document.addEventListener("DOMContentLoaded", function () {
    const carruselContainer = document.querySelector(".habilidades-a");

    // Duplicamos las imágenes para lograr el efecto infinito
    const duplicado = carruselContainer.innerHTML;
    carruselContainer.innerHTML += duplicado;
});

// Carrusel de Iconos Sobre Mi
document.addEventListener("DOMContentLoaded", function () {
    const carruselContainer = document.querySelector(".carrusel-container");

    // Duplicamos las imágenes para lograr el efecto infinito
    const duplicado = carruselContainer.innerHTML;
    carruselContainer.innerHTML += duplicado;
});

