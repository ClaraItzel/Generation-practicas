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
   let nombre= prompt('Ingresa tu nombre');
   Persona.Nombre= nombre;
   let Apellido= prompt('Ingresa tus Apellidos');
   Persona.Apellido= Apellido;
   let Edad= prompt('Ingresa tu edad');
   Persona.Edad= Edad;
   console.log(Persona.Saludo(nombre));
   console.log(Persona.Edades(nombre,Edad));

 
   
