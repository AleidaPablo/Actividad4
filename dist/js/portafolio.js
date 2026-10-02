window.addEventListener('DOMContentLoaded', event => {

    // Cambiar la apariencia del menú al hacer scroll
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Contraer la barra de navegación cuando se hace clic en un enlace en móviles
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Inicializar galería de imágenes SimpleLightbox si existe
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // Manejo sencillo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! El formulario funciona correctamente.');
            contactForm.reset();
        });
    }
});