calcularValorDescuento = function (monto,porcentajeDescuento) {
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento;
}
calcularIva = function (monto) {
    let valorIva = monto * 0.12;
    return valorIva;
}
calcularSubtotal=function(precio, cantidad){
    let total = precio * cantidad;
    return total;
}
calcularTotal = function (subtotal, descuento,iva) {
    let valorTotal = (subtotal - descuento) + iva;
    return valorTotal;
}