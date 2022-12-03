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
    e.preventDefault();
    respuestaDiv.style.display = "block";
    if (ingreso != "") {
      respuesta.textContent = `  ${tipoDato(ingreso)}`;
    } else {
      respuesta.textContent = ` Debe ingresar un dato`;
    }
  });
}

const tipoDato = (ingreso) => {
  var texto;
  ingreso = ingreso.replace(/,/g, ".");

  if (!isNaN(ingreso)) {
    const myArray = ingreso.split(".");
    ingreso.split(".");
    if (myArray[0] != null && myArray[1] != null) {
      texto = ` El tipo de dato es un double`;
    } else {
      texto = ` El tipo de dato es un entero`;
    }
  } else if (typeof ingreso === "undefined") {
    texto = `  El tipo de dato undefined`;
  } else {
    texto = `  El tipo de dato es un texto`;
  }

  return texto;
};
