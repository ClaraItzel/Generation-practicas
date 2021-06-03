fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))

    const nuevoEnlace= document.createElement('H1')//SE RECOMIENDA EN MAYUSCULA
    //agrega el texto
    nuevoEnlace.textContent= 'Soy un pollo';

    capa.appendChild(nuevoEnlace);