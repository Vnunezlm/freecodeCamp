/*Primeros 10 números pares.
Crea un programa utilizando un bucle while 
para almacenar en un arreglo los primeros 
10 pares 
function encontrarPares(){
let n = parseInt(prompt("Ingrese un numero"));
let array = [];
for(let i = 1;i <= n; i++){
array.push(i*2);
}
alert(`Primeros ${n} pares:${array}`);
}*/
function numerosPares(){
    let k = parseInt(prompt("Ingrese un número"));
    let array = [];
    let p = 1;
    while(p <= k){
        p++;
        array.push(p*2);
    }
    alert(`Numeros pares: ${array}`);
}
