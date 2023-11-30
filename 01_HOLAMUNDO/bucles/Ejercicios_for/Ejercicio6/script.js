/*Desarrolla un programa utilizando 
bucle for para permitir ingresar 5 
calificaciones y posteriormente mostrar 
el promedio desde en una página HTML.

estructura for:
function encontrarPares(){
let n = parseInt(prompt("Ingrese un numero"));
let array = [];
for(let i = 1;i <= n; i++){
array.push(i*2);
}
alert(`Primeros ${n} pares:${array}`);
}*/
function ces(){
    let array = [];
    for(let i = 0; i <= 5; i++){
        let notas = parseInt(prompt("ingrese una calificación"));

    if(isNaN(notas)){
        alert("ingresar un valor valido");
        return;
    }
    array.push(notas);
    }
    let suma = 0;
    for(let j = 0; j < array.length; j++){
        suma += array[j]
    }
    let promedioFinal = suma / array.length;
    alert(`Las notas ingresadas: ${array}`);
    alert(`El promedio final es: ${promedioFinal}`);
    
}



