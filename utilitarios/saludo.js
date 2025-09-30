saludar = function () {
    //recuepera el valor de la caja txtNombre
    let nombre = recuperarTexto("txtNombre");
    //recuepera el valor de la caja txtApellido
    let apellido = recuperarTexto("txtApellido");
    
}
recuperarTexto = function (idComponente) {
    let componente = document.getElementById(idComponente);
    let valorIngresado = componente.value;
    return valorIngresado;
}