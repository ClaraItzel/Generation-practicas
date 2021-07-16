/**
 *Recibes la tarea de construir un sistema de alarma para 
        una fábrica de champús. Tu sistema recibe las siguientes 
        variables: temperatura ambiente, humedad ambiental, número 
        de trabajadores en la planta y nivel de líquido en los 
        tanques. La alarma debe sonar siempre que la temperatura 
        ambiente sea superior o inferior a los umbrales(90% y 30%), si la humedad 
        es superior al 50%, 
        si hay más de 100 trabajadores en la planta al mismo tiempo, o si el nivel del 
        líquido es superior al 90% (para evitar el desbordamiento).
 */

        const alarma = () => {
            let tempA = document.getElementById('ItempA').value;
        let humedad = document.getElementById('Ihumedad').value;
        let trabajadores = document.getElementById('Itrabajadores').value;
        let tanques = document.getElementById('Itanques').value;

        let boton = document.getElementById('enviar')
        boton.addEventListener('click',()=>{

            
            console.log('variables:'+tempA);
            if(trabajadores >= 100){
                alert('¡¡¡CORREEEEEEEEE!!! D:');
            } else if(tempA>90 || tempA<30){
                alert('¡¡¡CORREEEEEEEEE!!! D:');
            } else if (tanques>90){
                alert('¡¡¡CORREEEEEEEEE!!! D:');
            } else if (humedad>50){
                alert('¡¡¡CORREEEEEEEEE!!! D:');
            } else{
                alert('Todo ok 😉');
            }

        });
}

alarma();