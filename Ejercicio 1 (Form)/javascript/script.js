const formulario = document.querySelector("#form");

formulario.addEventListener("submit", validar);
var diaSoleado =
  "https://static.vecteezy.com/system/resources/previews/009/663/724/large_2x/sun-sun-ray-icon-transparent-free-png.png";
var diaLluvia =
  "https://www.nicepng.com/png/detail/191-1910374_svg-transparent-flat-rain-icon-transprent-png-free.png";
var diaNublado =
  "https://www.nicepng.com/png/detail/191-1910374_svg-transparent-flat-rain-icon-transprent-png-free.png";
var error = "https://images.emojiterra.com/twitter/v14.0/128px/2639.png";

imagen = document.getElementById("imagen");

function validar(e) {
  e.preventDefault();
  const ingreso = document.querySelector("#ingresoDato").value;
  const respuesta = document.getElementById("respuestaHtml");

  switch (ingreso.toLowerCase()) {
    case "soleado":
      imagen.setAttribute("src", diaSoleado);
      respuesta.textContent = ` El día de hoy está ${ingreso}`;
      break;
    case "nublado":
      imagen.setAttribute("src", diaNublado);
      respuesta.textContent = ` El día de hoy está ${ingreso}`;
      break;
    case "lloviendo":
      imagen.setAttribute("src", diaLluvia);
      respuesta.textContent = ` El día de hoy está ${ingreso}`;
      break;
    default:
      imagen.setAttribute("src", error);
      respuesta.textContent = `Debe decir si el dia esta soleado, nublado o lloviendo! intente de nuevo!`;
  }
}
