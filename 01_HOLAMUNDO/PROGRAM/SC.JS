//EJERCICIOS
        //Ejercicio 1
        let edad = 17;
        if (edad >= 18){
            console.log("Eres mayor de edad");
        }else {
            console.log("Eres menor de edad");
            
        }
//Ejercicio 2
        let temperatura = 16;
        if (temperatura < 0){
            console.log("hace mucho frio: " + temperatura + "ºC");
        }else if (temperatura > 0 < 25){
            console.log("la temperatura es agradable: " + temperatura + "ºC");
        }else {

        }
//Ejercicio 3
        let userName = "vnunez";
        let password = "1276";

        if (userName === "vnunez" && password === "1276"){
            console.log("Acceso concedido");
        }else {
            console.log("Acceso denegado");
        }
        
//Ejercicio 4
let num = 8;
if(num < 0){
    console.log("El numero " + num + "es negativo");
}else if(num === 0){
    console.log("El numero es igual a 0");
}else{
    console.log("El numero " + num + " es positivo");
}

//Ejercicio 5
let puntos = 93;
if (puntos >= 90) {
    console.log("Excelente");
}
else if (puntos >= 70 && puntos <= 89) {
    console.log("Buen trabajo");
}else{
    console.log("Necesitas mejorar...");
}