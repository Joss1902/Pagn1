document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    toggleButton.addEventListener('click', () => {
        // 1. Alterna la clase 'active' en el menú (para mostrar/ocultar)
        menu.classList.toggle('active'); 
        
        // 2. Mejora la accesibilidad (ARÍA)
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
        toggleButton.setAttribute('aria-expanded', !isExpanded);
    });
});




















