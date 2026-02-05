//validarPlaca no recibe nada
//obtiene el valor ingresado por el usuario en la caja de texto
//invoca a la función validarEstructura y guarda el retorno en una variable erroresEstructura
//si erroresEstructura es diferente de null muestra el mensaje ESTRUCTURA VALIDA, caso cintrario ESTRUCTURA INCORRECTA
//no retorna nada, usar utilitarios.js

mostrarResultado = function(idLabel, mensaje) {
    document.getElementById(idLabel).innerHTML = mensaje;
}

validarPlaca = function () {
    let placa = document.getElementById("txtPlaca").value;

    // Limpiar todos los labels de errores
    for (let i = 1; i <= 8; i++) {
        mostrarResultado("lblError" + i, "");
    }

    let errores = validarEstructura(placa);

    // Verificar si hay errores
    let hayErrores = errores.some(error => error !== "");

    if (!hayErrores) {
        mostrarResultado("lblResultadoPlaca", "ESTRUCTURA VALIDA");

        // Provincia primero
        let provincia = obtenerProvincia(placa);
        if (provincia) {
            mostrarResultado("lblProvincia", "Provincia: " + provincia);

            // Solo si la provincia es válida mostramos tipo de vehículo
            let tipoVehiculo = obtenerTipoVehiculo(placa);
            mostrarResultado("lblTipoVehiculo", tipoVehiculo ? "Tipo de vehículo: " + tipoVehiculo : "");

        } else {
            mostrarResultado("lblProvincia", "Provincia incorrecta");
            mostrarResultado("lblTipoVehiculo", "");
        }

    } else {
        mostrarResultado("lblResultadoPlaca", "ESTRUCTURA INCORRECTA");
        mostrarResultado("lblProvincia", "");
        mostrarResultado("lblTipoVehiculo", "");
        // Mostrar errores específicos
        errores.forEach((error, i) => {
            if (error !== "") mostrarResultado("lblError" + (i + 1), error);
        });
    }
}


