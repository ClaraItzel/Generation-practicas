function validarPaquetes(){
    let pesoMuneca= 75;
    let pesoPayaso= 112;

    const munecas = document.getElementById("I_munecas").value;
    const payaso = document.getElementById("I_payasos").value;

    let totalMuneca= pesoMuneca * munecas;
    let totalPayaso= pesoPayaso * payaso;

    let suma = totalMuneca + totalPayaso;
    var contador= 0;
    if(totalMuneca >0 || totalPayaso>0 || suma >0){
        alert(`El peso de las muñecas ${totalMuneca} mas el peso del los payasos es ${totalPayaso} es ${suma}`);
        while(suma > 0){
            contador++;
            suma-=1000;
        }
        alert(`Requieres ${contador} paquetes`);
    }else{
        alert(`El peso de las muñecas ${totalMuneca} mas el peso del los payasos es ${totalPayaso} es ${suma}`);
        console.log('Solo es un paquete');
    }

}
