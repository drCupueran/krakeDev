// Función para verificar si un carácter es una letra mayúscula
//obtine el código ASCII del caracter y verifica si está en el rango de letras mayúsculas
// true si es mayúscula, false en caso contrario
esMayuscula = function (caracter) {

    let codigo = caracter.charCodeAt(0);
    if (codigo >= 65 && codigo <= 90)
        return true;
    else
        return false;
}

esDigito = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo >= 48 && codigo <= 57)
        return true;
    else
        return false;
}

esGuionBajo = function (caracter) {
    let codigo = caracter.charCodeAt(0);
    if (codigo == 95)
        return true;
    else
        return false;
}

