document.addEventListener('DOMContentLoaded', function () {
    const freezerFechado = document.getElementById('fechado');
    const freezerAberto = document.getElementById('aberto');
    freezerFechado.addEventListener('click', function () {
        freezerFechado.style.display = "none";
        freezerAberto.style.display = "block";
    });
    freezerAberto.addEventListener('click', function () {
        freezerAberto.style.display = "none";
        freezerFechado.style.display = "block";
    });
})