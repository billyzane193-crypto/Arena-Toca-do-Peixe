document.addEventListener('DOMContentLoaded', function() {
    
    console.log("Sistema da Arena Toca do Peixe carregado!");

    // 1. Ação do Botão de Reservas
    const btnReserva = document.querySelector('.btn.primary');
    if (btnReserva) {
        btnReserva.addEventListener('click', function(event) {
            // Em vez de um alerta, vamos levar o usuário para a página de reservas
            window.location.href = 'reservas.html';
        });
    }

    // 2. Ação do Botão de Equipes
    const btnEquipes = document.querySelector('.btn.secondary');
    if (btnEquipes) {
        btnEquipes.addEventListener('click', function(event) {
            window.location.href = 'equipes.html';
        });
    }

    // 3. Log de interação com o Anúncio
    const adImage = document.querySelector('.ad-image');
    if (adImage) {
        adImage.style.cursor = 'pointer'; // Deixa a mãozinha no mouse
        adImage.addEventListener('click', function() {
            // Aqui você pode definir para onde o anúncio de Natal leva
            window.location.href = 'anuncio.html'; 
        });
    }
});