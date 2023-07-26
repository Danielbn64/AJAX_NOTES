let caja = document.querySelector("#contenedor");
caja.innerHTML = "Cargando...";
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())//Por alguna razón no puedo hace un console.log() de response.json()
    //.then(datos => console.log(datos[82].title))
    .then(items => {
        console.log(items);
        caja.innerHTML = "";
        mostrar(caja, items);
    })
    //.catch(error => console.log(error.message))
    .catch(error => {
        console.log("La peticion a fallado");
    })
;

//Mostrar
function mostrar(contenendor, elementos){  
    elementos.forEach(elemento =>{
        let mostrar = `
        <article>
            <h2>${elemento.title}<h2>
            <p>${elemento.body}<p>
        </article>
        <hr/>
        `;
        contenedor.innerHTML += mostrar
    });
    return elementos;
}