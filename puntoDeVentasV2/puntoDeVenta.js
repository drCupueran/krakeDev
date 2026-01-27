calcularValorTotal = function () {
    let nombreProducto = recuperarTexto("txtProducto");
    let precioProducto = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");

   
    let productoValido = esProductoValido(nombreProducto, "lblError1");
    let cantidadValida = esCantidadValida(cantidad, "lblError2");
    let precioValido   = esPrecioValido(precioProducto, "lblError3");

    if (productoValido && cantidadValida && precioValido) {
        
        let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        mostrarTexto("lblSubtotal", valorSubtotal);

        let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        mostrarTexto("lblDescuento", valorDescuento);

        let valorIVA = calcularIva(valorSubtotal - valorDescuento);
        mostrarTexto("lblIva", valorIVA);

        let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        mostrarTexto("lblTotal", valorTotal);

     
    } else {
        
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblIva", "0.0");
        mostrarTexto("lblTotal", "0.0");
        
    }
}
esCampoObligatorio = function (valor, idComponenteError) {
    if (valor == "" || valor == null) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else {
        mostrarTexto(idComponenteError, "");
        return true;
    }
}

esCampoObligatorioNumerico = function (valor, idComponenteError) {
    if (valor == "" || valor == null || isNaN(valor)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    } else {
        mostrarTexto(idComponenteError, "");
        return true;
    }  
}

esCantidadValida = function (cantidad, idComponenteError) {
    if (!esCampoObligatorioNumerico(cantidad, idComponenteError)) {
        return false;
    }
   
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "La cantidad debe ser un entero entre 0 y 100");
        return false;
    }
    mostrarTexto(idComponenteError, "");
    return true;
}

esPrecioValido = function (precio, idComponenteError) {
    if (!esCampoObligatorioNumerico(precio, idComponenteError)) {
        return false;
    }
 
    if (precio <= 0 || precio > 50) {
        mostrarTexto(idComponenteError, "El precio debe estar entre 1 y 50");
        return false;
    }
    mostrarTexto(idComponenteError, "");
    return true;
}

esProductoValido = function (producto, idComponenteError) {
    if (!esCampoObligatorio(producto, idComponenteError)) {
        return false;
    }
    if (producto.length > 10) {
        mostrarTexto(idComponenteError, "El nombre del producto debe tener máximo 10 caracteres");
        return false;
    }
    mostrarTexto(idComponenteError, "");
    return true;
}


limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtCantidad", "");
    
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblIva", "0.0");
    mostrarTexto("lblTotal", "0.0");

    mostrarTexto("lblError1", "");
    mostrarTexto("lblError2", "");
    mostrarTexto("lblError3", "");

    
}
