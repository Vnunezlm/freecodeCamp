        // SCRIPT2.JS
function medirTemp() {
    // Tu lógica para medir la temperatura y mostrar un mensaje
    // ...

    // Por ejemplo:
    let temperatura = prompt("Ingrese la temperatura actual: ");
    if (temperatura < 0) {
        alert("Hace frío");
    } else if (temperatura >= 0 && temperatura < 25) {
        alert("La temperatura es agradable");
    } else {
        alert("Hace calor");
    }
}
