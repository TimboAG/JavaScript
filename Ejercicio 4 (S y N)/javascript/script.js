const formulario = document.querySelector("#form");

formulario.addEventListener("submit", validar);

function validar(e) {
  e.preventDefault();
  var ingreso = document.querySelector("#ingresoDato").value;
  const respuesta = document.getElementById("respuesta");
  ingreso = ingreso.toLowerCase();
  let valoresN = ingreso.match(/n/g);
  let valoresS = ingreso.match(/s/g);
  var union = ` ${valoresN} ${valoresS}`;
  union = union.replace(/,/g, "");
  union = union.replace(/\s+/g, "");
  console.log(union);
  if (valoresN != null && valoresS != null) {
    if (union.length === ingreso.length) {
      respuesta.textContent = ` CORRECTO`;
    } else {
      respuesta.textContent = ` INCORRECTO`;
    }
  } else {
    respuesta.textContent = ` INCORRECTO`;
  }
}
