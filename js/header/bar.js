document.addEventListener("DOMContentLoaded", function() {
    const desplegable = document.getElementById("desplegable");
    const menu = document.getElementById("menu");

    desplegable.addEventListener("click", function() {
        menu.classList.toggle("mostrar");
    });
});
