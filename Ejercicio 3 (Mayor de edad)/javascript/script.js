const formulario = document.querySelector("#form");

formulario.addEventListener("submit", validar);

function validar(e) {
  e.preventDefault();
  var ingreso = document.querySelector("#ingresoDato").value;
  const respuesta = document.getElementById("respuesta");
  var valoresAceptados = /^[0-9]+$/;
  if (ingreso.match(valoresAceptados)) {
    ingreso = parseInt(ingreso);
    if (ingreso >= 18) {
      respuesta.textContent = ` Es mayor de edad!`;
    } else {
      respuesta.textContent = ` Es menor de edad!`;
    }
  } else {
    respuesta.textContent = ` El valor ingresado debe ser un numero y no puede llevar puntos ni comas, vuelva a intentarlo`;
  }
}
