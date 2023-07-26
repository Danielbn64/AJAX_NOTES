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
        console.log("cargando...")
        setTimeout(() =>{
            resolve(productos);
            reject(Error("A ocurrido un error"))
        },3000);
    });

}

conseguirProductos()
    .then(items => console.log(items))
    .catch(error => console.log(error.message))
    //.catch(error => console.log(error.name))
    .finally(()=> console.log("Peticion finalizada"))
;


