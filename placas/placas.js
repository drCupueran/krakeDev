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
    let hayErrores = errores.some(error => error !== "");

    if (hayErrores) {
        mostrarResultado("lblResultadoPlaca", "ESTRUCTURA INCORRECTA");
        mostrarResultado("lblProvincia", "");
        mostrarResultado("lblTipoVehiculo", "");
        mostrarResultado("lblDiaPicoPlaca", "");

        errores.forEach((error, i) => {
            if (error !== "") mostrarResultado("lblError" + (i + 1), error);
        });
        return; // 🚪 Salimos aquí, no seguimos validando
    }

    // Estructura válida
    mostrarResultado("lblResultadoPlaca", "ESTRUCTURA VALIDA");

    // Provincia
    let provincia = obtenerProvincia(placa);
    if (!provincia) {
        mostrarResultado("lblProvincia", "No existe provincia para la placa ingresada.");
        mostrarResultado("lblTipoVehiculo", "");
        mostrarResultado("lblDiaPicoPlaca", "");
        return; // 🚪 Salimos aquí
    }
    mostrarResultado("lblProvincia", "Provincia: " + provincia);

    // Tipo de vehículo
    let tipoVehiculo = obtenerTipoVehiculo(placa);
    if (!tipoVehiculo) {
        mostrarResultado("lblTipoVehiculo", "");
        mostrarResultado("lblDiaPicoPlaca", "");
        return; // 🚪 Salimos aquí
    }
    mostrarResultado("lblTipoVehiculo", "Tipo de vehículo: " + tipoVehiculo);

    // Pico y placa
    let diaPicoPlaca = obtenerDiasPicoYPlaca(placa);
    if (!diaPicoPlaca) {
        mostrarResultado("lblDiaPicoPlaca", "No aplica (inválido)");
        return;
    }
    mostrarResultado("lblDiaPicoPlaca", "Día de pico y placa: " + diaPicoPlaca);
}




