const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const formularioContacto = document.querySelector('#formulario-contacto');
const flecha = document.querySelector('#flecha');
const certificaciones = document.querySelector('#certification');

function listaCertificados() {
    flecha.classList.toggle('rotar180');
    certificaciones.classList.toggle('mostrar');
}


burguerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive'); 
});