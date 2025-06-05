document.addEventListener('DOMContentLoaded', () => {
    // Effet d'apparition des éléments du héros
    const heroElements = document.querySelectorAll('.fade-in-up');
    heroElements.forEach(element => {
        // La classe d'animation est déjà appliquée via CSS
        // Il suffit de s'assurer que le DOM est prêt
    });

    // Optionnel: Gérer la navigation mobile (menu hamburger) si vous implémentez
    // Pour l'instant, le menu est caché en mobile via CSS, il faudrait un bouton
    // pour le toggler avec JS. C'est une étape future si vous le souhaitez.

    // Pour l'effet de parallaxe si non géré par background-attachment: fixed;
    // Ou pour un parallaxe plus prononcé via JS
    // const heroSection = document.querySelector('.hero-section');
    // window.addEventListener('scroll', () => {
    //     const scrollPos = window.scrollY;
    //     // Ajustez la vitesse de défilement pour l'effet de parallaxe
    //     heroSection.style.backgroundPositionY = -scrollPos * 0.3 + 'px';
    // });
});