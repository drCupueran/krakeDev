
ejecutarPrueba1 = function () {
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
recorrerCadena = function (cadena) {

    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " POSICION " + posicion);
    }
    console.log("Empieza el segundo For");

    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " Posicion " + posicion);
    }
}

invertirCadena = function (cadena) {
    let caracter;
    let resultado = "";  
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        caracter = cadena.charAt(posicion);
        resultado = resultado + caracter;
    }   
    return resultado;
}
ejecutarPrueba2 = function () {
    let mensaje = recuperarTexto("txtCadena");
    let cadenaInvertida= invertirCadena(mensaje);
    mostrarTexto("lblResultado", cadenaInvertida);
}