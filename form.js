        // Función para enviar el formulario por WhatsApp
        function submitForm(event) {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const phone = form.phone.value;
            const email = form.email.value || 'No proporcionado';
            const service = form.service.value;
            const date = form.date.value;
            const time = form.time.value;
            const message = form.message.value || 'No hay mensaje adicional';
            
            const text = `Hola, me gustaría reservar una cita:%0A%0A*Nombre:* ${name}%0A*Teléfono:* ${phone}%0A*Email:* ${email}%0A*Servicio:* ${service}%0A*Fecha preferida:* ${date}%0A*Hora preferida:* ${time}%0A*Mensaje:* ${message}`;
            
            window.open(`https://wa.me/584120348988?text=${text}`, '_blank');
            form.reset();
            alert('¡Gracias por tu reserva! Serás redirigido a WhatsApp para confirmar.');
        }
        
