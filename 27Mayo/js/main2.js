/* Calcular el salario bruto y neto mensual y quincenal de una persona, 
el salario diario debe ser ingresado por el usuario a traves de promt, 
los descuentos para calcular el sueldo netos serán sueldo bruto - ISR(30%)  - IMSS(10)*/

//Declaracion de variables
var SD= parseInt(prompt('Ingresa tu salario diario'));
var SBM= SD*30;
var SBQ= SD*15;
var ISR= .30;
var IMSS= .10;

//Calculando Sueldo Neto

var SalarioNetoM= SBM - ((SBM*ISR)+(SBM*IMSS));
var SalarioNetoQ= SBQ - ((SBQ*ISR)+(SBQ*IMSS));

//Mostrar en pantalla

alert(`
        Tu pago de nomina quincenal bruto sería de: ${SBQ}
        El pago de tu nomina mensual bruto seria de: ${SBM}
        Tu pago de nomina quincenal neto sería de: ${SalarioNetoQ}
        El pago de tu nomina mensual neto seria de: ${SalarioNetoM}
       `);


