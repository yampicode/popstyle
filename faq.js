        // Función para el acordeón de FAQ
        function toggleFaq(element) {
            const faqItem = element.parentElement;
            faqItem.classList.toggle('faq-active');
            
            const icon = element.querySelector('i');
            if (faqItem.classList.contains('faq-active')) {
                icon.classList.remove('icofont-plus');
                icon.classList.add('icofont-minus');
            } else {
                icon.classList.remove('icofont-minus');
                icon.classList.add('icofont-plus');
            }
        }