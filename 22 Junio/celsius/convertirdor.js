alert('Conectado');

let kelvin = 273.15;
let fahrenheit = 32;

function calcular (){
    let celcius = document.getElementById('grados').value;
    
    let calcularKelvin = celcius + kelvin;
    let calcularFahrenheit = celcius * fahrenheit;

    let etiqueta = document.getElementById('etiqueta');
    etiqueta.innerHTML=calcularKelvin;
}

