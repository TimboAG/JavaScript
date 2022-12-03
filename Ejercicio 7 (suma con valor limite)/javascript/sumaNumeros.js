const formulario = document.querySelector("#form1");
const limiteDiv = document.querySelector("#limite");
const formSuma = document.querySelector("#form2");
let respuesta = document.getElementById("respuesta");
const respuestaDiv = document.querySelector("#respuestaDiv");
const inicio = document.querySelector("#botonInicio");
formSuma.style.display = "none";

window.onload = (e) => {
  e.preventDefault();
  principio();
};

function principio() {
  limiteDiv.style.display = "block";
  formSuma.style.display = "none";
  inicio.style.display = "none";
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    var limite = document.querySelector("#ingresoDatoLimite").value;
    limite = limite.replace(/,/g, ".");
    limite = parseFloat(limite);
    if (!isNaN(limite)) {
      var suma = 0;
      limiteDiv.style.display = "none";
      formSuma.style.display = "block";
      sumar(limite, suma);
    } else {
      respuesta.textContent = ` El valor ingresado no es un numero, vuelva a intentarlo`;
    }
  });
}

function sumar(limite, suma) {
  inicio.style.display = "block";
  respuestaDiv.style.display = "none";
  formSuma.addEventListener("submit", (e) => {
    var ingreso = document.querySelector("#ingresoDato").value;
    ingreso = ingreso.replace(/,/g, ".");
    ingreso = parseFloat(ingreso);
    e.preventDefault();
    if (!isNaN(ingreso)) {
      suma = suma + ingreso;
      if (limite > suma) {
        console.log("valor ingreso" + ingreso);
        console.log("valor limite" + limite);
        console.log("valor suma" + suma);
        respuestaDiv.style.display = "block";
        respuesta.textContent = ` La suma de los numeros ingresados es: ${suma}`;
      } else {
        respuesta.textContent = ` El valor de la suma llego a su limite, el limite es ${limite} y la suma es: ${suma}`;
      }
      if (ingreso > limite) {
        respuestaDiv.style.display = "block";
        respuesta.textContent = ` El valor de ingresado supera al limite`;
      }
    } else {
      respuesta.textContent = ` El valor ingresado no es un numero, vuelva a intentarlo`;
    }
  });
}
