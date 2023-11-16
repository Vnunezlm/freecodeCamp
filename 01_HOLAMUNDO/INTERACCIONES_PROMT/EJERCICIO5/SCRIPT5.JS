    function puntuación(){
        let puntos = parseInt(prompt("Ingrese su puntuación: "));
        if(puntos < 0){
        
        }
    if(puntos < 0){
        alert("Ingrese un dato válido");
    } else if(puntos >= 90){
        alert("Excelente");
    }else if(puntos >= 70 && puntos <= 89){
        alert("Buen trabajo");
    }else{
        alert("Necesitas mejorar...");
    }
    }
