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

//obtiene la primera letra de la placa mayuscula y retorna la provincia correspondiente caso contrario retorna null

obtenerProvincia = function (placa) { 
     let primeraLetra = placa.charAt(0); 

    const provincias = {
        'A': "Azuay",
        'B': "Bolívar",
        'C': "Carchi",
        'E': "Esmeraldas",
        'G': "Guayas",
        'H': "Chimborazo",
        'I': "Imbabura",
        'L': "Loja",
        'M': "Manabí",
        'N': "Napo",
        'O': "El Oro",
        'P': "Pichincha",
        'R': "Los Ríos",
        'S': "Santa Elena",
        'T': "Tungurahua",
        'U': "Sucumbíos",
        'X': "Cotopaxi",
        'Y': "Pastaza",
        'Z': "Zamora Chinchipe"
    };

    return provincias[primeraLetra] || null;
}

//usa el segundo caracter de la placa para determinar el tipo de vehiculo segun este en la pagina web si la letra no esta en la lista retorna null

obtenerTipoVehiculo = function (placa) {
    let segundaLetra = placa.charAt(1);
    const tiposVehiculo = {
        'A': "Automóvil particular",
        'C': "Camioneta",
        'D': "Camión",
        'E': "Especial",
        'M': "Motocicleta",
        'P': "Público",
        'T': "Taxi"
    };
    return tiposVehiculo[segundaLetra] || null;
}
// lunes 1 y 2, martes 3 y 4, miercoles 5 y 6, jueves 7 y 8, viernes 9 y 0 , fin de semana y feriados no hay pico y placa
obtenerDiasPicoYPlaca = function (placa) {
    let ultimoDigito = placa.charAt(placa.length - 1);

    const diasPicoPlaca = { 
        '1': "Lunes",
        '2': "Lunes",
        '3': "Martes",  
        '4': "Martes",
        '5': "Miércoles",
        '6': "Miércoles",
        '7': "Jueves",
        '8': "Jueves",
        '9': "Viernes", 
        '0': "Viernes"
    };

    return diasPicoPlaca[ultimoDigito] || null;
}



