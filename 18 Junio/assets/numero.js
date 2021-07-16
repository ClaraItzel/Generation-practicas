/* Escribir un programa que lea un entero positivo, n , introducido por el usuario y después muestre en pantalla la suma de todos los enteros desde 1 hasta n
 */
function calculando(n) {
    for (let i = 0; i <= n; i++) {
        let resultado=n+i;
    document.write(`<h2> La suma de ${n} + ${i} es: ${resultado} <h2> <br>`);
    }
}
let boton = document.getElementById('enviar')
        boton.addEventListener('click',()=>{
     let n = parseInt(document.getElementById('Inumero').value) ;
 
calculando(n);
});