mostrarImagen = function (idComponente, rutaImagen) {
    let componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente = document.getElementById(idComponente);
    componente.value = mensaje;
}
recuperarTexto = function (idComponente) {
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}
recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}
recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}