// Ejemplo de script para el carrusel
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    if (carouselInner) {
        const cloneItems = () => {
            const items = Array.from(carouselInner.children);
            items.forEach(item => {
                const clone = item.cloneNode(true);
                carouselInner.appendChild(clone);
            });
        };
        cloneItems();
    }
});