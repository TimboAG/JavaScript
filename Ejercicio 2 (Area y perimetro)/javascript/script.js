const formulario = document.querySelector("#form");

formulario.addEventListener("submit", validar);

function validar(e) {
  e.preventDefault();
  var ingreso = document.querySelector("#ingresoDato").value;
  const respuestaArea = document.getElementById("respuestaArea");
  const respuestaPerimetro = document.getElementById("respuestaPerimetro");
  ingreso = ingreso.replace(/,/g, ".");
  if (!isNaN(ingreso)) {
    ingreso = parseFloat(ingreso);
    var area = Math.PI * Math.pow(ingreso, 2);
    var perimetro = 2 * Math.PI * ingreso;
    respuestaArea.textContent = ` El area del valor ingresado es  ${area}`;
    respuestaPerimetro.textContent = ` El perimetro del valor ingresado es  ${perimetro}`;
  } else {
    respuestaArea.textContent = ` El valor ingresado debe ser un numero, vuelva a intentarlo`;
    respuestaPerimetro.textContent = ``;
  }
}
