const form = document.querySelector("#form");
let respuesta = document.getElementById("respuesta");
const respuestaDiv = document.querySelector("#respuestaDiv");
const num = document.querySelector("#numeroPersonas");
const formNumero = document.querySelector("#formNumero");
const personaDiv = document.querySelector("#divCrearPersona");

let personas = [];
let ingresoLimite;

function Persona(nombre, edad, sexo, peso, altura) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
  this.peso = peso;
  this.altura = altura;
}

window.onload = (e) => {
  e.preventDefault();
  registroLimite();
};

const registroLimite = () => {
  personas.splice(0, personas.length);
  ingresoLimite = 0;
  personaDiv.style.display = "none";
  respuestaDiv.style.display = "none";
  num.style.display = "block";
  formNumero.addEventListener("submit", (e) => {
    e.preventDefault();
    ingresoLimite = document.querySelector("#ingresoNumero").value;
    inicio();
  });
};

const inicio = () => {
  console.log(personas.length);
  console.log(ingresoLimite);
  console.log(personas);
  if (ingresoLimite > personas.length) {
    crearPersonasForm();
  } else {
    respuestaDiv.style.display = "block";
    respuesta.innerHTML = ` ${mostrarRespuesta()}`;
  }
};

const crearPersonasForm = () => {
  personaDiv.style.display = "block";
  respuestaDiv.style.display = "none";
  num.style.display = "none";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("aca principio");
    let nombre = document.querySelector("#ingresoNombre").value;
    let edad = document.querySelector("#ingresoEdad").value;
    let peso = document.querySelector("#ingresoPeso").value;
    let altura = document.querySelector("#ingresoAltura").value;
    let sexo = document.querySelector("#ingresoSexo").value;
    let sexoTexto = sexoSelect(sexo);
    let miPersona = crearPersona(nombre, edad, sexoTexto, peso, altura);
    console.log(miPersona);
    personas.push(miPersona);
    inicio();
  });
};

const crearPersona = (nombre, edad, sexoTexto, peso, altura) => {
  let persona = new Persona(nombre, edad, sexoTexto, peso, altura);
  return persona;
};

const mostrarRespuesta = () => {
  var respuesta = JSON.stringify(personas);
  // var respuesta =
  //   "Hola " +
  //   miPersona.nombre +
  //   "<br>" +
  //   "Sus datos son: " +
  //   "<br>" +
  //   "edad: " +
  //   miPersona.edad +
  //   "<br>" +
  //   "sexo: " +
  //   miPersona.sexo +
  //   "<br>" +
  //   "peso: " +
  //   miPersona.peso +
  //   "<br>" +
  //   "altura:" +
  //   miPersona.altura +
  //   "<br>";
  return respuesta;
};
const sexoSelect = (sexo) => {
  var texto = "";
  switch (sexo) {
    case "1":
      texto = "Femenino";
      break;
    case "2":
      texto = "Masculino";
      break;
    case "3":
      texto = "Otro";
      break;
  }
  return texto;
};
