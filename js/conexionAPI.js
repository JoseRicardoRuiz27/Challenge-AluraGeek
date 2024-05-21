//traemos la informacion de la API y la mostramos en la consola
async function listaProductos(){
    const conexion = await fetch("https://my-json-server.typicode.com/JoseRicardoRuiz27/Challenge-AluraGeek/productos")
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function añadirProducto(titulo,precio,imagen){
    const conexion = await fetch("https://my-json-server.typicode.com/JoseRicardoRuiz27/Challenge-AluraGeek/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            imagen:imagen,
            precio:`$ ${precio}`
        })
    })
    const conexionConvertida = conexion.json();

    if (!conexion.ok) {
        throw new Error("Error a la hora de subir el producto :/ ")
    }


    return conexionConvertida;
}


export const conexionAPI={
    listaProductos, añadirProducto
}
