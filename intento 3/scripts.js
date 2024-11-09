// Modo oscuro toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    darkModeToggle.innerText = '🌙';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.navbar').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');

        // Aplicar modo oscuro a las tarjetas y carousel
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.toggle('dark-mode'));

        const carouselImages = document.querySelectorAll('.carousel-inner img');
        carouselImages.forEach(img => img.classList.toggle('dark-mode'));

        // Cambiar icono del botón
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.innerText = '☀️';
        } else {
            darkModeToggle.innerText = '🌙';
        }
    });
});
