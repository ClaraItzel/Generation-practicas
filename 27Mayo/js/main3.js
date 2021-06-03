/*Hacer un programa en javascript en donde se le pregunte la edad al usuario y
 si el usuario tiene 18 años o mas y menos de 29 años, 
 le impriman por consola que ha sido aceptado en el programa de generation, 
 en caso de no ser así mostrar un mensaje indicando que no cumple los requisitos del programa*/
 var edad=parseInt(prompt('Ingresa Edad'));
 
if(edad>=18 && edad<30){
    alert(`Felicidades te han aceptado en generation`)
}else{
    alert(`No cumples con los requisitos de edad`);
}