
const carrito = document.querySelector('#carrito');
const listaSuscripciones = document.querySelector('#lista-Suscripcion');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {     
     listaSuscripcion.addEventListener('click', agregarSuscripciones);     
     carrito.addEventListener('click', eliminarSuscripciones);     
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}



function agregarSuscripciones(e) {
     e.preventDefault();
     
     if(e.target.classList.contains('agregar-carrito')) {
          const Suscripciones = e.target.parentElement.parentElement;
          leerDatosSuscripciones(Suscripciones);
     }
}


function leerDatosSuscripciones(Suscripciones) {
     const infoSuscripciones = {
          imagen: Suscripciones.querySelector('img').src,
          titulo: Suscripciones.querySelector('h4').textContent,
          precio: Suscripciones.querySelector('.precio span').textContent,
          id: Suscripciones.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( Suscripciones => Suscripciones.id === infoSuscripciones.id ) ) { 
          const Suscripcion = articulosCarrito.map( Suscripciones => {
               if( Suscripciones.id === infoSuscripciones.id ) {
                    Suscripciones.cantidad++;
                     return Suscripciones;
                } else {
                     return Suscripciones;
             }
          })
          articulosCarrito = [...Suscripcion];
     }  else {
          articulosCarrito = [...articulosCarrito, infoSuscripciones];
     }

     console.log(articulosCarrito)  

    
     carritoHTML();
}

function eliminarSuscripciones(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-Suscripciones') ) {
          const SuscripcionesId = e.target.getAttribute('data-id')          
          articulosCarrito = articulosCarrito.filter(Suscripciones => Suscripciones.id !== SuscripcionesId);
          carritoHTML();
     }
}

function carritoHTML() {
     vaciarCarrito();
     articulosCarrito.forEach(Suscripciones => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${Suscripciones.imagen}" width=100>
               </td>
               <td>${Suscripciones.titulo}</td>
               <td>${Suscripciones.precio}</td>
               <td>${Suscripciones.cantidad} </td>
               <td>
                    <a href="#" class="borrar-Suscripciones" data-id="${Suscripciones.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });
}

function vaciarCarrito() {
    
         while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}


    