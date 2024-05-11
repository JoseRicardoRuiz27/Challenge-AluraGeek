import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function mostrarLista(titulo, imagen, precio) {
    const producto = document.createElement("li")
    producto.className = "lista__item"
    producto.innerHTML = `
    <div class="descripcion-producto">
        <img src="${imagen}" alt="imagen producto"
        <h3 class = "producto__titulo__2">${titulo}</h3>
        <p class = "producto__caracteristica">${precio}</p>
    </div>`;

    return producto;
}

async function listaProducto() {
    try {
        const listaAPI = await conexionAPI.listaProductos();

        listaAPI.forEach(producto => lista.appendChild(mostrarLista(producto.titulo, producto.imagen, producto.precio)));

    } catch {
        lista.innerHTML = `<h2 class="mensaje__tiutlo">Error en la conexion :( </h2>`
    }
}

listaProducto();