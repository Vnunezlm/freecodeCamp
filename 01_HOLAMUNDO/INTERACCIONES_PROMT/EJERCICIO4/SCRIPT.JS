function negativoPositivo(){
    let num = prompt("Ingrese un numero: ");
if(num < 0){
    alert("El numero " + num + "es negativo");
}else if(num === 0){
    alert("El numero es igual a 0");
}else{
    alert("El numero " + num + " es positivo");
}
}