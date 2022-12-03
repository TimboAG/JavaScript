const formulario = document.querySelector("#form");

formulario.addEventListener("submit", validar);

function validar(e) {
  e.preventDefault();
  var ingreso = document.querySelector("#ingresoDato").value;
  const respuesta = document.getElementById("respuesta");
  ingreso = ingreso.replace(/,/g, ".");
  if (!isNaN(ingreso)) {
    ingreso = parseFloat(ingreso);
    if (ingreso == 0) {
      respuesta.textContent = ` El numero ingresado no es par ni impar`;
    } else if (ingreso % 2 == 0) {
      respuesta.textContent = ` El numero ingresado es par`;
    } else {
      respuesta.textContent = ` El numero ingresado es impar`;
    }
  } else {
    respuesta.textContent = ` El valor ingresado no es un numero`;
  }
}
