let dinero = {
quinientos: [20, 500],
doscientos: [20,200],
cien: [20,100],
cincuenta:[20,50],
veinte: [20,20],
moneda: [20,10]
};
var cantidad= document.querySelector('#inp').value;
let total= (dinero.quinientos[1]*dinero.quinientos[0])+
(dinero.doscientos[1]*dinero.doscientos[0])+
(dinero.cien[1]*dinero.cien[0])+
(dinero.cincuenta[1]*dinero.cincuenta[0])+
(dinero.veinte[1]*dinero.veinte[0])+
(dinero.moneda[1]*dinero.moneda[0]);



console.log(total);
function calculando(cantidad, billete){
    let dinero=0;
    let cont=0;
    var img=document.createElement("img");
    var foo = document.getElementById("imagen");
    img.src="../img/bilete500.jpg"
    foo.appendChild(img);
    for (let acum = billete; acum <= cantidad; acum=acum+billete) {
        cont++;
        if(cont>19){
            dinero=cantidad-acum;
            
            break;
        }else{
            
           dinero=cantidad-acum; 
        }  
    }
    console.log(`Toma ${cont} billetes de ${billete}`);
    return dinero;
}
let boton=document.querySelector('#boton').addEventListener('click',() =>{
 
if(cantidad<=total){
    
    if(cantidad>=500){
        let residuo= calculando(cantidad,500);

        while (residuo>0) {
          if(residuo>=200){
              residuo=calculando(residuo,200);
          }else if(residuo<200&&residuo>=100){
            residuo=calculando(residuo,100);
          }else if(residuo<100&&residuo>=50){
            residuo=calculando(residuo,50);
          }else if(residuo<50&&residuo>=20){
            residuo=calculando(residuo,20);
          }else if(residuo<20&&residuo>=10){
            residuo=calculando(residuo,10);
          }
          else{
              console.log("no contamos con monedas menores a 10 i'm zorry");
              break;
          }
          
        }
    }
    
}else{
    console.log("no contamos con el suficiente efectivo en la maquina");
}
        
});


