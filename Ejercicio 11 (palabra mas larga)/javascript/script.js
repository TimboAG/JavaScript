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
    respuesta.textContent = `  ${palabraMasLarga(ingreso)}`;
  });
}

const palabraMasLarga = (ingreso) => {
  const mayor = ingreso.split(" ");
  let palabraMasLarga = mayor[0];
  for (const ingreso of mayor) {
    if (ingreso.length >= palabraMasLarga.length) {
      palabraMasLarga = ingreso;
    }
  }
  return palabraMasLarga;
};
