calcularValorDescuento = function (monto, porcentajeDescuento) {
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento;
}
calcularIva = function (monto) {
    let valorIva = (monto * 12) / 100;
    return valorIva;
}
calcularSubtotal = function (precio, cantidad) {
    let subtotal = precio * cantidad;
    return subtotal;
}
calcularTotal = function (subtotal, descuento, iva) {
    let valorTotal = (subtotal - descuento) + iva;
    return valorTotal;
}

// calcula el valor descuento al subtotal, no en porcentaje si no en monto, descuento depende de la cantidad de producntos
//menos de 3 sin descuento
//de 3 a 5 un 3% de descuento
//de 6 a 11 un 4% de descuento
// 12 o mas un 5% de descuento

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let porcentaje = 0;

    if (cantidad >= 3 && cantidad <= 5) {
        porcentaje = 3;
    } else if (cantidad >= 6 && cantidad <= 11) {
        porcentaje = 4;
    } else if (cantidad >= 12) {
        porcentaje = 5;
    }

    return calcularValorDescuento(subtotal, porcentaje);
}
