const formulario = document.querySelector("#form1");
const formulario2 = document.querySelector("#form2");

const menu = document.getElementById("menu");
const respuesta = document.getElementById("respuesta");
const titulo = document.getElementById("titulo");
const ingreso2Input = document.getElementById("ingreso2");
const ingres1Input = document.getElementById("ingreso1");
var signo = document.querySelector("#signo");
var ingreso;

window.addEventListener("load", function () {
  // var menu2 = `1- Sumar
  //  2-Restar
  //  3-Dividir
  // 4-Multiplicar `;
  // menu.textContent = menu2;
  // alert(menu2);
  titulo.textContent = `¿Que desea Realizar? `;
  //   menu.textContent = `1- Sumar
  // 2-Restar
  // 3-Dividir
  // 4-Multiplicar
  // `;
  menu.innerHTML =
    "1- Sumar " +
    "<br>" +
    "2-Restar " +
    "<br>" +
    " 3-Dividir" +
    "<br>" +
    " 4-Multiplicar ";

  ingreso2Input.style.display = "none";
  ingreso = document.querySelector("#ingresoDato").value;
  formulario.addEventListener("submit", validar);
});

function validar(e) {
  e.preventDefault();
  ingreso = document.querySelector("#ingresoDato").value;
  console.log(ingreso);
  if (!isNaN(ingreso)) {
    if (ingreso < 4) {
      realizarOperacion(ingreso, e);
    } else {
      respuesta.textContent = ` El valor ingresado no es valido, vuleva a intentarlo`;
    }
  } else {
    respuesta.textContent = ` El valor ingresado no es un numero, vuelva a intentarlo`;
  }
}

function realizarOperacion(ingreso, e) {
  e.preventDefault();
  ingres1Input.style.display = "none";
  ingreso2Input.style.display = "block";

  ingreso = parseInt(ingreso);
  menu.textContent = "";
  switch (ingreso) {
    case 1:
      titulo.textContent = `SUMA
      ingrese los numeros que desea sumar:`;
      signo.textContent = " + ";
      break;
    case 2:
      titulo.textContent = `RESTA
      ingrese los numeros que desea restar:`;
      signo.textContent = "  -  ";
      break;
    case 3:
      titulo.textContent = `DIVISION
      ingrese los numeros que desea dividir:`;
      signo.textContent = " / ";
      break;
    case 4:
      titulo.textContent = `MULTIPLICACION
      ingrese los numeros que desea multiplicar:`;
      signo.textContent = " * ";
      break;
  }

  console.log("num1");

  formulario2.addEventListener("click", (e) => {
    e.preventDefault();
    let num1 = document.getElementById("ingresoDato1").value;
    let num2 = document.getElementById("ingresoDato2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1);
    if (!isNaN(num1) && !isNaN(num2)) {
      let resultadoCalculo;
      switch (ingreso) {
        case 1:
          resultadoCalculo = num1 + num2;
          console.log("caso1");
          console.log(resultadoCalculo);
          respuesta.textContent = ` La suma de los dos valores es: ${resultadoCalculo}`;
          break;
        case 2:
          resultadoCalculo = num1 - num2;
          respuesta.textContent = ` La suma de los dos valores es: ${resultadoCalculo}`;
          break;
        case 3:
          resultadoCalculo = num1 / num2;
          respuesta.textContent = ` La suma de los dos valores es: ${resultadoCalculo}`;
          break;
        case 4:
          resultadoCalculo = num1 * num2;
          respuesta.textContent = ` La suma de los dos valores es: ${resultadoCalculo}`;
          break;
      }
    } else {
      respuesta.textContent = ` Alguno de los valores ingresados no es un numero, vuelva a intentarlo`;
    }
  });
}
