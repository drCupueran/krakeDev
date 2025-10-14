calcularPromedioNotas = function () {
    let nota1 = recuperarFlotante("txtNota1");
    let nota2 = recuperarFlotante("txtNota2");
    let nota3 = recuperarFlotante("txtNota3");

    let promedio = calcularPromedio(nota1, nota2, nota3);
    
    if (promedio < 5  && promedio > 0) {
        cambiarImagen("imgResultado", "./imagenes/repro.gif"); // Ruta del gif de reprobado
        cambiarTexto("lblPromedio", promedio.toFixed(2)+" Reprobado");
    } else if (promedio >= 5 && promedio <= 8) {
        cambiarImagen("imgResultado", "./imagenes/mucho.gif"); // Ruta del gif de normal
        cambiarTexto("lblPromedio",promedio.toFixed(2)+" Buen Trabajo");
    }else if (promedio > 8 && promedio <= 10) {
        cambiarImagen("imgResultado", "./imagenes/apro.gif"); // Ruta del gif de aprobado
        cambiarTexto("lblPromedio",promedio.toFixed(2)+ " Aprobado");
    } else {
        cambiarImagen("imgResultado", "./imagenes/error.gif"); // Si el promedio no es válido, muestra un gif de error
        cambiarTexto("lblPromedio", "Datos Incorrectos");
    }
   }