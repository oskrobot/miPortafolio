const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const emailNav = document.querySelector('.email-icon');
const formularioContacto = document.querySelector('#formulario-contacto');
const flecha = document.querySelector('#flecha');
const certificaciones = document.querySelector('#certification');
const overlay = document.querySelector('.overlay');
const closeForm = document.querySelector('.form-close');
const sections = document.querySelector('section');

function mostrarForm() {
    overlay.classList.toggle('mostrar-form');
    formularioContacto.classList.toggle('inactive');
}

emailNav.addEventListener('click', () => {
    mostrarForm();
})

function listaCertificados() {
    flecha.classList.toggle('rotar180');
    certificaciones.classList.toggle('mostrar');
}

sections.addEventListener('click', () => {
    mobileMenu.classList.add('inactive');
})

burguerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive'); 
});

closeForm.addEventListener('click', () => {
    formularioContacto.classList.add('inactive');
    overlay.classList.toggle('mostrar-form');
})