// CONFIGURACIÓN
let millas = 10;

// ELEMENTOS
var h1Millas;
var pCategoria;
var pMensaje;
var txtCantidad;
var imgCategoria;

// MODAL
var modalOverlay;
var modalMessage;

window.onload = function () {
  h1Millas = document.getElementById("h1Millas");
  pCategoria = document.getElementById("pCategoria");
  pMensaje = document.getElementById("pMensaje");
  txtCantidad = document.getElementById("txtCantidad");
  imgCategoria = document.getElementById("imgCategoria");

  modalOverlay = document.getElementById("modalOverlay");
  modalMessage = document.getElementById("modalMessage");

  actualizarPantalla("Mensaje: listo");
};

/* =========================
   FUNCIONES DE APOYO
   ========================= */

leerCantidadEntera = function () {
  var n = parseInt(txtCantidad.value, 10);
  if (isNaN(n)) {
    n = 0;
  }
  return n;
};



actualizarPantalla = function (mensaje) {


  h1Millas.innerText = "Millas: " + millas;
  pMensaje.innerText = mensaje;
  
  //actualizarImagen();
};

/* =========================
   FUNCIONES DE LÓGICA
   ========================= */

ganarCincoMillas = function () {
  millas = millas + 5;
  let h1Resultado = document.getElementById("h1Millas");
    if (millas > 50) {
    alert ("solo puede llegar a 50 millas")
   }
 h1Resultado.innerText = millas;
 }

perderDiezMillas = function () {
  millas = millas - 10;
  let h1Resultado = document.getElementById("h1Millas");
    if (millas < 0) {
    alert ("No puede tener menos de 0 millas")
   }
 h1Resultado.innerText = millas;
}
 
ganarMillas = function (cantidad){
  millas = millas + cantidad;
  let h1Resultado = document.getElementById("h1Millas");
    if (millas > 50) {
    alert ("solo puede llegar a 50 millas")
   }
 h1Resultado.innerText = millas;
}


/* =========================
   MODAL
   ========================= */

abrirModal = function (mensaje) {
  modalMessage.innerText = mensaje;
  modalOverlay.classList.remove("hidden");
};

cerrarModal = function () {
  modalOverlay.classList.add("hidden");
};

clicFondo = function (e) {
  if (e.target.id === "modalOverlay") {
    cerrarModal();
  }
};

/* =========================
   BOTONES
   ========================= */


probarGanar5 = function () {
  ganarCincoMillas();
  actualizarPantalla("+5 millas");
};

probarPerderDiez = function () {
  perderDiezMillas();
  actualizarPantalla("- 10 millas");
};
probarGanarMillas = function () {
  cantidad = document.getElementById("txtCantidad")
  cantidadEntera = parseInt(cantidad.value);
  ganarMillas(cantidadEnteras);
  actualizarPantalla();
}
probarConvertir = function () {
  var dolares = convertirMillas(millas);
  abrirModal("Tienes " + millas + " millas. Equivalen a $" + dolares);
};
