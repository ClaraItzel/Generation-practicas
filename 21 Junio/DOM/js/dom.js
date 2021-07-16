let subtitle= document.querySelector("#subtitle");
console.log(subtitle);
console.log(subtitle.textContent);
/* subtitle.textContent= 'Subtitulo';
 */
// agrega clases
subtitle.classList.add('red');
subtitle.classList.remove('red');

const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Raton', 'Pollo'];
const list= document.querySelector('#list');

animales.forEach(function (animal) {
    let item = document.createElement('li');
    item.textContent = animal;
    //se crea <li> animal</li>
    list.appendChild(item);

});

