'use strict'

//VARIABLES

const btnAdd = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.new-form')

//ARRAYS

//FUNCIONES

const handleClick = (ev) => {
    ev.preventDefault();
    newForm.classList.toggle('new-form');
}


//SECCIÓN DE EVENTOS

btnAdd.addEventListener('click', handleClick)

//CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

