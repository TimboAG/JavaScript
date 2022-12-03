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
    e.preventDefault();

    respuestaDiv.style.display = "block";
    respuesta.textContent = `  ${reverseString(ingreso)}`;
  });
}

const reverseString = (ingreso) => {
  let alRevez = ingreso.split("");
  return alRevez.reverse().join("");
};
