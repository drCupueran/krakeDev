
jugar = function (seleccionado) {
 
    let elemento = generarElemento();
    let ruta = generarRuta(elemento);
    let ganador = determinarGanador(seleccionado, elemento);

    if (ganador == 0) {
        mostrarTexto("EMPATE");
    } else if (ganador == 1) {
        mostrarTexto("GANASTE LA PARTIDA");
        
    } else {
        mostrarTexto("PERDISTE LA PARTIDA");
        
    }

}

