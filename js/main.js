const productos = [
    {
    id: "mujer-01",
    titulo: "Collar de perla con dije de letra",
    imagen: "./img/collar mujer/01.jpg",
    categoria: {
        nombre: "collares mujer",
        id: "c-mujer"
    },
    precio: 20000
},
{
    id: "mujer-02",
    titulo: "Cadena con perlas en oro golfy",
    imagen: "./img/collar mujer02.jpg",
    categoria: {
        nombre: "collares muejer",
        id: "c-mujer"
    },
    precio: 30000
},
{
    id: "mujer-03",
    titulo: "cadena de margaritas en acrilico y golfy",
    imagen: "./img/abrigos/03.jpg",
    categoria: {
        nombre: "collares muejer",
        id: "c-mujer"
    },
    precio: 30000
},
{
    id: "mujer-04",
    titulo: "Collar de estrellas de nakar",
    imagen: "./img/abrigos/04.jpg",
    categoria: {
        nombre: "collares muejer",
        id: "c-mujer"
    },
    precio: 25000
},
{
    id: "mujer-05",
    titulo: "Collar de mostacilla con estrella de mar",
    imagen: "./img/abrigos/05.jpg",
    categoria: {
        nombre: "collares muejer",
        id: "c-mujer"
    },
    precio: 15000
},
{
    id: "hombre-01",
    titulo: "Collar de conchas",
    imagen: "./img/camisetas/01.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 35000
},
{
    id: "hombre-02",
    titulo: "Collar acero/perla de rio con dije de cruz",
    imagen: "./img/camisetas/02.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 40000
},
{
    id: "hombre-03",
    titulo: "Collar de mostacilla #8 doble",
    imagen: "./img/camisetas/03.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 15000
},
{
    id: "hombre-01",
    titulo: "Cadenas  cubanas y collar de puas ",
    imagen: "./img/camisetas/04.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 60000
},
{
    id: "hombre-01",
    titulo: "Collar perla/acero",
    imagen: "./img/camisetas/05.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 25000
},
{
    id: "hombre-01",
    titulo: "Collar perla verde blanco dorado",
    imagen: "./img/camisetas/06.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 15000
},
{
    id: "hombre-01",
    titulo: "Collar de ying yang",
    imagen: "./img/camisetas/07.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 15000
},
{
    id: "hombre-01",
    titulo: "Collar de piedra volcanica",
    imagen: "./img/camisetas/08.jpg",
    categoria: {
        nombre: "collares hombre",
        id: "c-hombre"
    },
    precio: 40000
},
{
    id: "unisex",
    titulo: "Manilla de friends",
    imagen: "./img/Pantalones/01.jpg",
    categoria: {
        nombre: "manillas unisex",
        id: "unisex"
    },
    precio: 1000
},
{
    id: "unisex",
    titulo: "Pantalón 01",
    imagen: "./img/Pantalones/02.jpg",
    categoria: {
        nombre: "manillas unisex",
        id: "unisex"
    },
    precio: 1000
},
{
    id: "unisex",
    titulo: "Pantalón 01",
    imagen: "./img/Pantalones/03.jpg",
    categoria: {
        nombre: "manillas unisex",
        id: "unisex"
    },
    precio: 1000
},
{ 
id: "unisex",
titulo: "Pantalón 01",
imagen: "./img/Pantalones/04.jpg",
categoria: {
    nombre: "manillas unisex",
    id: "unisex"
},
precio: 1000
 },
 { 
    id: "unisex",
    titulo: "Pantalón 01",
    imagen: "./img/Pantalones/05.jpg",
    categoria: {
        nombre: "manillas unisex",
        id: "unisex"
    },
    precio: 1000
 },
 { 
     id: "unisex",
    titulo: "Pantalón 01",
    imagen: "./img/Pantalones/06.jpg",
    categoria: {
    nombre: "manillas unisex",
    id: "unisex"
        },
     precio: 1000
 }
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}