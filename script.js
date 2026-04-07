import { Saludo } from "./saludos.js";
import { verificarSeguridad } from "./contraseña.js";
import { Fahrenheit } from './grados.js';
import { calcularAreaCuadrado, calcularAreaCirculo } from './geometria.js';
import { sumar, restar } from './contador.js';



///////////////saludos////////////////////


const inputNombre = document.getElementById("input-nombre");
const selectIdioma = document.getElementById("select-idioma");
const btnSaludar = document.getElementById("btn-saludar");
const displaySaludo = document.getElementById("resultado-saludo");

btnSaludar.onclick = function () {
  const nombre = inputNombre.value;
  const idioma = selectIdioma.value;

  if (nombre === "") {
    displaySaludo.textContent = "escribe un nombre.";
    return;
  }

  displaySaludo.textContent = Saludo(nombre, idioma);
};
//////////////////contraseña////////////////////



const inputPass = document.getElementById("password");
const mensajeSeguridad = document.getElementById("mensaje-seguridad");

inputPass.addEventListener("input", function () {
  const resultado = verificarSeguridad();

  mensajeSeguridad.textContent = resultado;


});

//////////////////grados////////////////////


const inputC = document.getElementById("input-celsius");
const btnCalcular = document.getElementById("btn-calcular");
const resultadoTexto = document.getElementById("resultado");

btnCalcular.onclick = function() {
    
    const valorTexto = inputC.value;
  
    const gradosC = parseFloat(valorTexto);
   
    const gradosF = Fahrenheit(gradosC);

    
    resultadoTexto.textContent =  " equivalen a " + gradosF.toFixed(2) + "°F";
};

///////////////geometria////////////////////



const inputLado = document.getElementById("lado-cuadrado");
const btnCuadrado = document.getElementById("btn-cuadrado");
const resCuadrado = document.getElementById("res-cuadrado");

btnCuadrado.onclick = function() {
    const lado = parseFloat(inputLado.value);
    if (!isNaN(lado)) {
        const area = calcularAreaCuadrado(lado);
        resCuadrado.textContent = "El área es: " + area;
    }
};


const inputRadio = document.getElementById("radio-circulo");
const btnCirculo = document.getElementById("btn-circulo");
const resCirculo = document.getElementById("res-circulo");

btnCirculo.onclick = function() {
    const radio = parseFloat(inputRadio.value);
    if (!isNaN(radio)) {
        const area = calcularAreaCirculo(radio);
        resCirculo.textContent = "El área es: " + area;
    }
};


/////////////////contador////////////////////



let cuenta = 0;


const display = document.getElementById("numero");
const btnMas = document.getElementById("btn-mas");
const btnMenos = document.getElementById("btn-menos");


function actualizarPantalla() {
    display.textContent = cuenta;
    
  
}


btnMas.onclick = function() {
    cuenta = sumar(cuenta); 
    actualizarPantalla();
};

btnMenos.onclick = function() {
    cuenta = restar(cuenta); 
    actualizarPantalla();
};
