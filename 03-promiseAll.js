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

//El encadenamiento consiste en ejecutar una promesa tras otra, colocando una nueva promesa
//en el then de la anterior

function conseguirProductos(){
    return new Promise((resolve, reject) =>{
        console.log("cargando productos...")
        setTimeout(() =>{
            resolve(productos);
            reject(Error("A ocurrido un error"))
        },3000);
    });
}

function productoComprado(nombre){
    return new Promise((resolve, reject) =>{
        console.log("haciendo la compra...")
        setTimeout(() =>{
            resolve({
                producto: nombre,
                cliente: "Daniel Arturo"
            });
            reject(Error("A ocurrido un error"))
        },1000);
    });
}

function procesarVenta(venta){
    console.log("Producto comprado:", venta);
    productos = productos.filter(producto => {
        return producto.nombre != venta.producto
    });
    return productos;
}
/*
conseguirProductos()
    .then(items =>{
        console.log("Productos disponibles: ",items)
        return productoComprado("Ordenador Gaming");
    })
    .then(venta =>{
        procesarVenta(venta);
        return productoComprado("Tablet");
    })
    .then(venta =>{
        procesarVenta(venta);
        return productoComprado("Camara Reflex");
    })
    .then(venta => {
        procesarVenta(venta)
        //productos = productos.filter(producto => producto.nombre != venta.producto);    
    })
    .catch(error => console.log(error.message))
    //.catch(error => console.log(error.name))
    .finally(()=> {
        if(productos.length >= 1){
            console.log("Productos que quedan disponibles: ", productos)
        }else{
            console.log("No quedan productos disponibles");
        }
        console.log("Peticion finalizada")
    })      
;
*/

//Ejecutar un array de promesas
Promise.all([conseguirProductos(),productoComprado("Ordenador Gaming"),productoComprado("Tablet")])
.then(venta=>{
    console.log(venta);
});