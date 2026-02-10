let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function (seleccionado) {
 
    let elemento = generarElemento();
    let ruta = generarRuta(elemento);
    mostrarImagen("imgComputadora", ruta);

    let ganador = determinarGanador(seleccionado, elemento);

    if (ganador == 0) {
        mostrarTexto("txtResultado", "EMPATE");
    } else if (ganador == 1) {
        mostrarTexto("txtResultado", "GANASTE LA PARTIDA");
        puntosUsuario++;
        
    } else {
        mostrarTexto("txtResultado", "PERDISTE LA PARTIDA");
        puntosComputadora++;
    }
    mostrarTexto("puntosUsuario", puntosUsuario);
    mostrarTexto("puntosComputadora", puntosComputadora);
    validarSeleccion(puntosUsuario, puntosComputadora);

}

validarSeleccion = function (puntosUsuario, puntosComputadora) {
    if (puntosUsuario == 5) {
        mostrarTexto("txtResultado", "HAS GANDO EL JUEGO");
        puntosUsuario = 0;
        puntosComputadora = 0;
    } else if (puntosComputadora == 5) {
        mostrarTexto("txtResultado", "EL COMPUTADOR TE HA VENCIDO");
        puntosUsuario = 0;
        puntosComputadora = 0;
    }
    return puntosUsuario, puntosComputadora;
}
