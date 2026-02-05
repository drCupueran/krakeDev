//longitud de la placa 7 u 8 caracteres
//los primeros 3 caracteres deben ser letras mayusculas
//el cuarto caracter en un guion -
//los ultimos 3 o 4 caracteres deben ser digitos
// el 8 caracter es un digito no todas las placas tienen, antes de intentar validar verificar la longitud
validarEstructura = function (placa) {
    let errores = ["", "", "", "", "", "", "", ""]; 

    // Validar longitud
    if (placa.length < 7 || placa.length > 8) {
        errores[0] = "La placa debe tener 7 u 8 caracteres.";
        return errores;
    }

    // Validar letras
    for (let i = 0; i < 3; i++) {
        if (!esMayuscula(placa.charAt(i))) {
            errores[i] = "El caracter " + (i + 1) + " debe ser una letra mayúscula.";
        }
    }

    // Validar guion
    if (placa.charAt(3) !== "-") {
        errores[3] = "El cuarto caracter debe ser un guion.";
    }

    // Validar dígitos
    let cantidadDigitos;
    if (placa.length == 7) {
        cantidadDigitos = 3;
    } else {
        cantidadDigitos = 4;
    }

    for (let i = 0; i < cantidadDigitos; i++) {
        let posicion = 4 + i;
        if (!esDigito(placa.charAt(posicion))) {
            errores[posicion] = "El caracter " + (posicion + 1) + " debe ser un dígito.";
        }
    }

    return errores; // 
}





