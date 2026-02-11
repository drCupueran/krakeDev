let puntosUsuario = 0;
let puntosComputador = 0;
let juegoActivo = true;

jugar = function (seleccionado) {
    if (!juegoActivo) {
        return;
    }

    let rutaUsuario = generarRuta(seleccionado);
    mostrarImagen("imgUsuario", rutaUsuario);

    let elemento = generarElemento();
    let ruta = generarRuta(elemento);
    mostrarImagen("imgComputador", ruta);

    let ganador = determinarGanador(seleccionado, elemento);

    if (ganador == 0) {
        mostrarTexto("txtResultado", "EMPATE");
    } else if (ganador == 1) {
        mostrarTexto("txtResultado", "GANASTE LA PARTIDA");
        puntosUsuario++;
    } else {
        mostrarTexto("txtResultado", "PERDISTE LA PARTIDA");
        puntosComputador++;
    }

    mostrarTexto("puntosUsuario", puntosUsuario);
    mostrarTexto("puntosComputador", puntosComputador);
    validarSeleccion();
}

validarSeleccion = function () {
    if (puntosUsuario == 5) {
        mostrarTexto("txtResultado", "HAS GANADO EL JUEGO");
        juegoActivo = false;
    } else if (puntosComputador == 5) {
        mostrarTexto("txtResultado", "EL COMPUTADOR TE HA VENCIDO");
        juegoActivo = false;
    }
}

limpiar = function () {
    puntosUsuario = 0;
    puntosComputador = 0;
    juegoActivo = true;

    mostrarTexto("puntosUsuario", puntosUsuario);
    mostrarTexto("puntosComputador", puntosComputador);
    mostrarTexto("txtResultado", "¡Empieza el juego!");
    mostrarImagen("imgUsuario", "");
    mostrarImagen("imgComputador", "");
}

