obtenerAletorio = function () { 
    let aleatorio = Math.random();//0 y 1
    let numeroMultiplicado = aleatorio * 3;
    let numeroEntero = parseInt(numeroMultiplicado);//0 y 2
    let valorDado = numeroEntero + 1;//entre 1 y 3
    return valorDado;
}

generarElemento = function () {
    let valorDado = obtenerAletorio();
    if (valorDado == 1) {
        return "piedra";
    }
    if (valorDado == 2) {
        return "papel";
    }
    if (valorDado == 3) {
        return "tijera";
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0;//empate
    }
    if (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") {
        return 1;//gana jugador 1
    }   
    if (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") {
        return 1;//gana jugador 1
    }   
    if (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel") {
        return 1;//gana jugador 1
    }   
    return 2;//gana jugador 2
}

generarRuta = function (nombre) {
    return "./imagenes/" + nombre + ".png";
}