let nuevo_post = JSON.stringify({
    title: "El nuevo post de Daniel",
    body: "Cotenido del post",
    userID: 54
});

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    body: nuevo_post,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
})
.then(response => response.json())
.then(datos => console.log(datos));