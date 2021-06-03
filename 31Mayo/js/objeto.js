/* objeto persona nombre apellido edad metodo saludar donde diga hola y el nombre tambien el metodo edad
para decir su edad en consola debe imprimir los 2 metodos

y una funcion para pasar los datos para rellenar el objeto*/
let Persona= {
 Nombre: 'Clara',
 Apellido: 'Gómez',
 Edad:21,
 Saludo: function MostrarSaludo(nombre) {
     return `Hola ${nombre}, Bienvenido/a`;
 },
 Edades: function MostrarEdad(nombre, edad) {
     return `Hola ${nombre}, tienes ${edad} años`;
 }
}

console.log(Persona.Saludo('Clara'));
console.log(Persona.Edades('Clara',21));