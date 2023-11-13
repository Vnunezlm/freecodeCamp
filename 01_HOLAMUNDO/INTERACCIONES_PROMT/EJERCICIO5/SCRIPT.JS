function puntuación(){
    let puntos = prompt("Ingrese su puntuación: ");
if(puntos >= 90){
    alert("Excelente");
}else if(puntos > 70 && puntos < 89){
    alert("Buen trabajo");
}else{
    alert("Necesitas mejorar...");
}
}
