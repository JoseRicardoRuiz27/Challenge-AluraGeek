import { conexionAPI } from "./conexionAPI.js";

const form = document.querySelector("[data-formulario]");

async function añadirProducto(evento){
    evento.preventDefault();

    const titulo = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-precio]").value;
    const precio = document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.añadirProducto(titulo, imagen, precio);
    } catch (e) {
        alert(e)
    }
}

form.addEventListener("submit", evento => añadirProducto(evento));