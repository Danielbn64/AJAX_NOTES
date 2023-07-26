let productos = [
    {
        nombre: "Ordenador Gaming",
        marca: "Asus",
        precio: 899
    },
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 549
    },
    {
        nombre: "Camara Reflex",
        marca: "Canon",
        precio: 635
    }
];

function conseguirProductos(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(productos);
            reject(Error("A ocurrido un error"))
        },3000);
    });
}

function conseguirNombre(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Daniel Arturo");
            reject("A ocurrido un error");
        },3000);
    });
}

//Resolviendo una peticion con el metodo then
// conseguirProductos().then(datos =>{
//     console.log(datos)
// })

//Resolviendo una peticion con el metodo await
async function getMisProductos(){
    try{
        console.log("Cargando información...")
        let informacion = await Promise.all([conseguirProductos(),conseguirNombre()])
        // let mis_productos = await conseguirProductos();
        // let mi_nombre = await conseguirNombre();// De esta manera tienes que esperar mas
        //console.log(mis_productos, mi_nombre);
        console.log(informacion[0],informacion[1]);
    }catch(error){
        //console.log(error.message);
        throw error;
    }
    console.log("Fuera del try")
}

getMisProductos();