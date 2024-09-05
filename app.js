const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

const selects = document.querySelector('#seleccionusados');
const opcionesc = document.querySelector('#opcionusados');
const contenidoSelects = document.querySelector('#seleccionusados .contenido-select');
const hiddenInputs = document.querySelector('#inputSeleccion');

const selectnew = document.querySelector('#seleccionnew');
const opcionesnew = document.querySelector('#opcionew');
const contenidoSelectnew = document.querySelector('#seleccionnew .contenido-select');
const hiddenInputnew = document.querySelector('#inputSeleccionnew');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) =>{
    opcion.addEventListener('click', (e) =>{
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('titulo').innerText
    });
})

select.addEventListener('click', () => {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
})



document.querySelectorAll('#opcionusados > .opcion').forEach((opcion2) =>{
    opcion2.addEventListener('click', (e) =>{
        e.preventDefault();
        contenidoSelects.innerHTML = e.currentTarget.innerHTML;
        selects.classList.toggle('active');
        opcionesc.classList.toggle('active');
        hiddenInputs.value = e.currentTarget.querySelector('titulo').innerText
    });
})

selects.addEventListener('click', () => {
    selects.classList.toggle('active');
    opcionesc.classList.toggle('active');
})

document.querySelectorAll('#opcionew > .opcion').forEach((opcion3) =>{
    opcion3.addEventListener('click', (e) =>{
        e.preventDefault();
        contenidoSelectnew.innerHTML = e.currentTarget.innerHTML;
        selectnew.classList.toggle('active');
        opcionesnew.classList.toggle('active');
        hiddenInputnew.value = e.currentTarget.querySelector('titulo').innerText
    });
})

selectnew.addEventListener('click', () => {
    selectnew.classList.toggle('active');
    opcionesnew.classList.toggle('active');
})

/* libreria slick */

$(document).ready(function(){

    $('.contenedordestacados').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

  });


