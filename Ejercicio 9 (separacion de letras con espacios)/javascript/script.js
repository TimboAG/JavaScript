const form = document.querySelector("#form");
let respuesta = document.getElementById("respuesta");
const respuestaDiv = document.querySelector("#respuestaDiv");

window.onload = (e) => {
  e.preventDefault();
  principio();
};

function principio() {
  respuestaDiv.style.display = "none";
  form.addEventListener("submit", (e) => {
    console.log("aca principio");
    var ingreso = document.querySelector("#ingresoDato").value;
    ingreso = ingreso.toString();
    let texto = "";
    console.log(ingreso.length);
    e.preventDefault();
    let texto1;
    for (let i = 0; i < ingreso.length; i++) {
      texto1 = ingreso.substring(i, i + 1);
      texto = texto + texto1 + " ";
    }
    respuestaDiv.style.display = "block";

    respuesta.textContent = `  ${texto}`;
  });
}
