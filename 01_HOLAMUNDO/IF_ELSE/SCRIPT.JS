//EJERCICIOS
        /* Supongamos que tienes una variable llamada edad que almacena
        la edad de una persona. Escribe un programa en JavaScript que imprima 
        "Eres mayor de edad" si la edad es igual o mayor que 18, o "Eres menor de edad" 
        si la edad es menor de 18. Utiliza una declaración "if" para resolver este problema.*/
            let edad = 17;
            if (edad >= 18){
                console.log("Eres mayor de edad");
            }else {
                console.log("Eres menor de edad");
                
            }
            /* Crea una variable llamada temperatura que almacene 
            la temperatura actual en grados Celsius. Escribe un programa en 
            JavaScript que muestre un mensaje de acuerdo a la temperatura:
            Si la temperatura es menor a 0, imprime "Hace frío".
            Si la temperatura está entre 0 y 25, imprime "La temperatura es agradable".
            Si la temperatura es mayor o igual a 25, imprime "Hace calor". 
            Utiliza declaraciones "if-else" para resolver este problema.*/
            let temperatura = 16;
            if (temperatura < 0){
                console.log("hace mucho frio: " + temperatura + "ºC");
            }else if (temperatura > 0 < 25){
                console.log("la temperatura es agradable: " + temperatura + "ºC");
            }else {

            }
    /*  Crea una variable llamada nombreUsuario y otra llamada contraseña 
            que almacene un nombre de usuario y una contraseña, respectivamente. +
            Escribe un programa en JavaScript que verifique si el nombre de usuario 
            es "usuario123" y la contraseña es "secreto". Si ambos son correctos, 
            imprime "Acceso concedido"; de lo contrario, imprime "Acceso denegado". 
            Utiliza una declaración "if" para realizar la verificación.*/
            let userName = "vnunez";
            let password = "1276";

            if (userName === "vnunez" && password === "1276"){
                console.log("Acceso concedido");
            }else {
                console.log("Acceso denegado");
            }
            
/* Crea una variable llamada numero que almacene un número. 
Escribe un programa en JavaScript que determine si el número es positivo, 
negativo o igual a cero. Imprime el resultado en la consola. Utiliza una 
declaración "if-else if-else" para resolver este problema. */
    let num = 8;
    if(num < 0){
        console.log("El numero " + num + "es negativo");
    }else if(num === 0){
        console.log("El numero es igual a 0");
    }else {
        console.log("El numero " + num + " es positivo");
    }

/*Supongamos que tienes una variable puntuación que almacena 
la puntuación de un juego. Escribe un programa en JavaScript
que determine el rango de la puntuación: */
    let puntos = 92;
    if(puntos >= 90){
        console.log("Excelente");
    }else if(puntos > 70 && puntos < 89){
        console.log("Buen trabajo");
    }else{
        console.log("Sigue mejorando");
    }