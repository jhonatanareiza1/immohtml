//fecth a .json base de datos

let productos = [];

fetch("./assets/js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
})

//importaciones

const contenedorPropiedades = document.querySelector('#contenedor__productos');
const btnCategorias = document.querySelectorAll('.btnCategoria');
const tituloPrincipal = document.querySelector('#tituloPropiedad');

function cargarProductos(productosElegidos) {

    contenedorPropiedades.innerHTML = "";

    productosElegidos.forEach(propiedad => {

        const div = document.createElement('div');
        div.classList.add('propiedad');
        div.innerHTML = `
            <img class="imagenPropiedades" src="${propiedad.imagen}" alt="${propiedad.titulo}">
                        <div class="txtpropiedades">
                            <h3 class="tituloProp">${propiedad.titulo}</h3>
                            <p class="descripcionPropiedades">${propiedad.descripcion}</p>
                            <button class="bntPropiedades" id="${propiedad.id}">Saber mas</button>
            </div>
        `;
        contenedorPropiedades.append(div);
    });
}


cargarProductos(productos);


btnCategorias.forEach(boton =>{
    boton.addEventListener('click', (e) =>{

        btnCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const nombreProductos = productos.find(propiedad => propiedad.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = nombreProductos.categoria.nombre;

            const productosBoton = productos.filter(propiedad => propiedad.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{

            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);
        }


    })

})




/*
                    <div class="propiedad">
                        <img class="imagenPropiedades
                        " src="./assets/imgs/tonma4fondo.png" alt="">
                        <div class="txtpropiedades">
                            <h3 class="tituloProp">Casa</h3>
                            <p class="descripcionPropiedades">Inmueble para venta con 102.5 metros cuadrados</p>
                            <button class="bntPropiedades">Saber mas</button>
                        </div>
                    </div>
*/
