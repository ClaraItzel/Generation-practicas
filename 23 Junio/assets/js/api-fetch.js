let boton=document.querySelector('#boton').addEventListener('click',() =>{
  
    var img=document.createElement("img");
    var foo = document.getElementById("imagen");
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(quote => img.src=quote[0].url);
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
    }
    foo.appendChild(img);
  
});
let boton_p=document.querySelector('#boton-p').addEventListener('click',() =>{
  
    var img=document.createElement("img");
    var foo = document.getElementById("imagen-p");
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => response.json())
    .then(quote => img.src=quote[0].url);
    while (foo.firstChild) {
        foo.removeChild(foo.firstChild);
    }
    foo.appendChild(img);
  
});