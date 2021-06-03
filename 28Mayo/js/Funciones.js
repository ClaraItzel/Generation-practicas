/* 1. Crear una función que reciba por parámetros 2 números y los sume. 
Imprimir por console.log diferentes sumas
 */
function suma(n1, n2) {
    return n1+n2;
}

let i,num1=5, num2=8;

for (let i = 0; i < 4; i++) {
    
    op=suma(num1, num2);
    console.log(`La suma de ${num1} y ${num2} es: ${op}`);
    
    num1= num1+2;
    num2=num2+6;
}