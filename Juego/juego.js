let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function (seleccionado) {
 
    let elemento = generarElemento();
    let ruta = generarRuta(elemento);
    let ganador = determinarGanador(seleccionado, elemento);

    if (ganador == 0) {
        mostrarTexto("EMPATE");
    } else if (ganador == 1) {
        mostrarTexto("GANASTE LA PARTIDA");
        puntosUsuario= puntosUsuario + 1;
        
    } else {
        mostrarTexto("PERDISTE LA PARTIDA");
        puntosComputadora = puntosComputadora + 1;
        
    }

}

