calcularValorDescuento = function (monto,porcentajeDescuento) {
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    return valorDescuento;
}
calcularIva = function (monto) {
    let valorIva = (monto * 12)/100;
    return valorIva;
}
calcularSubtotal=function(precio, cantidad){
    let subtotal = precio * cantidad;
    return subtotal;
}
calcularTotal = function (subtotal, descuento,iva) {
    let valorTotal = (subtotal - descuento) + iva;
    return valorTotal;
}