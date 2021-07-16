function lista(tipo) {
    list.textContent="";
    tipo.forEach(function (tipo) {
        let item = document.createElement('li');
        item.textContent = tipo;
        //se crea <li> animal</li>
        list.appendChild(item);
    
    });
}
let button= document.querySelector('#animal');
button.addEventListener('click', event=>{
    var animales =['Lobo','Perro','Gato','Conejo','Aveztruz','Burro'];
    lista(animales);
})
let button2= document.querySelector('#computadoras');
button2.addEventListener('click', event=>{
    var computadoras =['Dell','Sony','HP','GHIA','MAC','Lenovo','Toshiba','Asus'];
    lista(computadoras);
})
let button3= document.querySelector('#compañeros');
button3.addEventListener('click', event=>{
    var companeros =['Clara','Felipe','Luis','Marco','Alberto','Emanuel','Carlos','Rodrigo','Ana','Humberto'];
    lista(companeros);
})
