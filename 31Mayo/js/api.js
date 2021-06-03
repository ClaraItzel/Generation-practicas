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
  
   /*  var img=document.createElement("img");
    img.src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc";
    var foo = document.getElementById("imagen");
    foo.appendChild(img); */
});
