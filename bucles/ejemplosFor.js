mostrarNumeros = function () {
    console.log("Antes del For");
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log("Después del For");
}

mostrarNumeros2 = function () {
    console.log("Antes del For");
    for (let indice = 0; indice <= 5; indice++) {
        console.log(indice);
    }
    console.log("Después del For");
}

mostrarPares = function () {
    console.log("Antes del For");
    for(let x=2 ; x<=10; x+=2){
        console.log(x);
    }
    console.log("Después del For");
}

mostrarInverso = function () {
    console.log("Antes del For");
    for(let y=10 ; y>0; y--){
        console.log(y);
    }
    console.log("Después del For");
}

hakenadoNasa = function () {
    console.log("Empieza el Hakeo a la NASA");
    for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
        console.log("Hakenado NASA " + porcentaje + "%");
    }
    console.log("La NASA ha sido hakeada en su totalidad");
}

mostrarImpares = function () {
    console.log("Antes del For");
    for(let impar=1 ; impar<=21; impar+=2){
        console.log(impar);
    }
    console.log("Después del For");
}