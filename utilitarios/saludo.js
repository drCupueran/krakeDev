saludar = function () {
    //recuepera el valor de la caja txtNombre
    let nombre = recuperarTexto("txtNombre");
    //recuepera el valor de la caja txtApellido
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Bienvenido " + nombre + " " + apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarImagen("imgSaludo", "./imagenes/saludo.gif");
    mostrarTextoEnCaja("txtNombre","");
}
