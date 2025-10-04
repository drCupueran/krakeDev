calcularPromedioNotas = function () {
    let nota1 = recuperarFlotante("txtNota1");
    let nota2 = recuperarFlotante("txtNota2");
    let nota3 = recuperarFlotante("txtNota3");

    let promedio = calcularPromedio(nota1, nota2, nota3);
    cambiarTexto("lblPromedio", promedio.toFixed(2));
    
    if (promedio > 7) {
        cambiarImagen("imgResultado", "./imagenes/apro.gif"); // Ruta del gif de éxito
    } else {
        cambiarImagen("imgResultado", "./imagenes/repro.gif"); // Ruta del gif de fracaso
    }
    return promedio;
}