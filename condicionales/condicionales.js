calcularTasaInteres = function (ingresoAnual) {
    let tasa;
    if (ingresoAnual < 300000) {
        tasa = 16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasa = 15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasa = 14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasa = 13;
    } else {
        tasa = 12;
    }
    return tasa;
}
calcularCapacidadPago = function (edad, ingresos, egresos) {
    //calcular el valor de la cuota mensual que debe pagar un cliente cuando el banco le asigna un prestamo
    //si su edad es mayor a 50 años, su capacidad de pago es el 30% de lo que le sobra luego de restar egresos de ingresos
    //si tienehasta 50 años, su capacidad de pago es el 40% de lo que le sobra luego de restar egresos de ingresos
    //retorna la cuota que debe pagar mensualmente
    let capacidadPagoMensual;
    let saldo = ingresos - egresos;
    if (edad > 50) {
        capacidadPagoMensual = saldo * 0.30;
    } else {
        capacidadPagoMensual = saldo * 0.40;
    }
    return capacidadPagoMensual;
}
calcularDescuento = function (precio, cantidad) {
    //determinar el valor de descuento que va arecibir el usuario por la compra de un producto
    //el descuento depende por el numero de compras del producto del mismo tipo
    //menos de 3 no tiene descuento
    //entre 3 a 5 tiene 2% de descuento
    //entre 6 a 11 tiene 3% de descuento
    // de 12 o mas tiene 4% de descuento
    let valorfinal;
    if (cantidad < 3) {
        valorfinal = precio * cantidad;
    } else if (cantidad >= 3 && cantidad <= 5) {
        valorfinal = (precio * cantidad) * 0.98;
    } else if (cantidad >= 6 && cantidad <= 11) {
        valorfinal = (precio * cantidad) * 0.97;
    } else {
        valorfinal = (precio * cantidad) * 0.96;
    }
    return valorfinal;
}
determinarColesterolLDL = function (nivelColesterol) {
    // cualquier persona de 19 años o menos , menos de 110 mg/dl nivel saludable.
    // hombres de 20 años o mayores, menos de 100 mg/dl nivel saludable.
    // mujeres de 20 años o mayores, menos de 130 mg/dl nivel saludable.
    // retorna un string que indica el nivel de colesterol LDL.
    let nivel;
    if (nivelColesterol < 110) {
        nivel = "saludable";
    } else if (nivelColesterol >= 110 && nivelColesterol < 130) {
        nivel = "limite alto";
    } else {
        nivel = "alto";
    }
    return nivel;
}
validarClave = function (clave) { 
    //tiene minimo 8 caracteres y maximo 16
    //la clave es un string
    //true si la clave es valida y false si no lo es
    let esValida = false;  
    if (clave.length >= 8 && clave.length <= 16) {
        esValida = true;
    }
    return esValida;    
}
esMayuscula = function (caracter) {
    //retorna true si el caracter es una letra mayuscula y false si no lo es
    //obtiene el codigo ASCII de la letra
    //veridificar si esta dentro del rango de las mayusculas
    // considerar mayusculas sin tilde
    let codigoAscii = caracter.charCodeAt(0);
    let esMayuscula = false;
    if (codigoAscii >= 65 && codigoAscii <= 90) {
        esMayuscula = true;
    }
    return esMayuscula;
}
esMinuscula = function (caracter) {
    //retorna true si el caracter es una letra minuscula y false si no lo es
    //obtiene el codigo ASCII de la letra
    //veridificar si esta dentro del rango de las minusculas
    // considerar minusculas sin tilde
    let codigoAscii = caracter.charCodeAt(0);
    let esMinuscula = false;
    if (codigoAscii >= 97 && codigoAscii <= 122) {
        esMinuscula = true;
    }
    return esMinuscula;
}
esDigito = function (caracter) {
//determina si la letra es un digito
//optiene el codigo ASCII del caracter
//verifica si esta dentro del rango de los digitos
//retorna true si es un digito y false si no lo es
let codigoAscii = caracter.charCodeAt(0);
    let esDigito = false
    if (codigoAscii >= 48 && codigoAscii <= 57) {
        esDigito = true;
    }  
    return esDigito;
}
darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
//el padre da permiso si saca mas de 90 en cuanlquiera de las tres materias
//notas como float
    //retorna true si el padre da permiso y false si no lo da permiso
    let permiso = false;
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        permiso = true;
    }
    return permiso;
}
otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
//el padre da permiso si saca mas de 90 en fisica o matematica y mas de 80 en geometria
//notas como float
    //retorna true si el padre da permiso y false si no lo da permiso
    let permiso = false;
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        permiso = true;
    }
    return permiso;
}
dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
//el padre da permiso si saca mas de 90 en fisica, matematica o geometria
    //ademas la nota de fisica debe ser mayo que la de matematica
//notas como float
//retorna true si el padre da permiso y false si no lo da permiso
    let permiso = false;
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMatematica) {
        permiso = true;
    }
    return permiso;
}
       
