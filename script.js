document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Aqui você pode adicionar uma lógica de validação adicional, se necessário

        // Exibir a mensagem de sucesso
        successMessage.style.display = "block";

        // Opcional: Esconder a mensagem após alguns segundos
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 5000);
        
        // Limpar o formulário
        contactForm.reset();
    });
});
