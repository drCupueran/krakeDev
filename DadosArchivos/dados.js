jugar = function () {
    let aleatorio = lanzarDado();
    cambiarTexto("lblNumero", aleatorio);
    if (aleatorio > 3) {
        cambiarTexto("lblResultado", "Es mayor que 3 Ganaste");
    } else {
        console.log("es menor que 3");
        cambiarTexto("lblResultado", "Es menor que 3 Perdiste");
    }
}
// crear una funcion llamada lanzarDado
//no recibe parametros
//retorna un numero aleatorio entre 1 y 6
lanzarDado = function () {
    let aleatorio = Math.random();//0 y 1
    let numeroMultiplicado = aleatorio * 6;
    
    let numeroEntero = parseInt(numeroMultiplicado);//0 y 5
    
    let valorDado = numeroEntero + 1;//entre 1 y 6
    return valorDado;
}
