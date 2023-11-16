    function login(){
        let userName = prompt("Ingrese su Nombre de Usuario: ")
        let password = prompt("Ingrese su contraseña: ")

        if (userName === "vnunez" && password === "1276"){
            alert("Acceso concedido");
        }else {
            alert("Acceso denegado");
        }
    }
