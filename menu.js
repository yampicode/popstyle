        // Función para el menú móvil
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            const toggleBtn = document.querySelector('.menu-toggle');
            menu.classList.toggle('active');
            toggleBtn.classList.toggle('active');
            
            // Prevenir scroll cuando el menú está abierto
            if (menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
        
        // Asignar evento al botón del menú
        document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
        
                // Cerrar menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            const menu = document.getElementById('mobileMenu');
            const toggleBtn = document.querySelector('.menu-toggle');
            
            if (menu.classList.contains('active') && 
                !menu.contains(event.target) && 
                !toggleBtn.contains(event.target)) {
                toggleMenu();
            }
        });
        
        // Mejora de accesibilidad para el teclado
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const menu = document.getElementById('mobileMenu');
                if (menu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });