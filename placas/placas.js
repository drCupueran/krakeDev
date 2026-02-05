//validarPlaca no recibe nada
//obtiene el valor ingresado por el usuario en la caja de texto
//invoca a la función validarEstructura y guarda el retorno en una variable erroresEstructura
//si erroresEstructura es diferente de null muestra el mensaje ESTRUCTURA VALIDA, caso cintrario ESTRUCTURA INCORRECTA
//no retorna nada, usar utilitarios.js
validarPlaca = function () {
    let placa = document.getElementById("txtPlaca").value;

    // Limpiar todos los labels
    for (let i = 1; i <= 8; i++) {
        document.getElementById("lblError" + i).innerHTML = "";
    }

    let errores = validarEstructura(placa);

    // 🚨 Verificar si hay algún error
    let hayErrores = false;
    for (let i = 0; i < errores.length; i++) {
        if (errores[i] !== "") {
            hayErrores = true;
            document.getElementById("lblError" + (i + 1)).innerHTML = errores[i];
        }
    }

    if (!hayErrores) {
        mostrarTexto("lblResultadoPlaca", "ESTRUCTURA VALIDA");
    } else {
        mostrarTexto("lblResultadoPlaca", "ESTRUCTURA INCORRECTA");
    }
}

