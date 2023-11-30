//Ejercicio
function contar(){
    let cont = parseInt(prompt("Ingrese un número"));
    let array = [];
    
    while(cont >= 10){
        array.push(cont);
        cont--;
    }
    alert(`Lista: ${array }`);
}

