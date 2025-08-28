
// imput de la pantalla
const addNumber = function (test) {
  const inputest = document.querySelector(".pantalla"); 
  inputest.value += test ;

}

const addOperador = function (operador) {
  const inputOperador = document.querySelector(".pantalla"); 
  inputOperador.value += operador ;

}


// clear pantalla 

const clearTest = function () {

  const clearAll = document.querySelector(".pantalla"); 
  clearAll.value = "";
}


const backSpace = function () {
  const clear = document.querySelector(".pantalla");
  clear.value = clear.value.slice(0, -1); 
}


//botones de operaciones y numeros

const boton1 = document.querySelector(".uno");
boton1.onclick = () => addNumber( "1");

const boton2 = document.querySelector(".dos");
boton2.onclick = () => addNumber( "2");

const boton3 = document.querySelector(".tres");
boton3.onclick = () => addNumber(test = "3" );

const boton4 = document.querySelector(".cuatro");
boton4.onclick = () => addNumber(test = "4");

const boton5 = document.querySelector(".cinco");
boton5.onclick = () => addNumber(test = "5");

const boton6 = document.querySelector(".seis");
boton6.onclick = () => addNumber(test = "6");

const boton7 = document.querySelector(".siete");
boton7.onclick = () => addNumber(test = "7");

const boton8 = document.querySelector(".ocho");
boton8.onclick = () => addNumber(test = "8");

const boton9 = document.querySelector(".nueve");
boton9.onclick = () => addNumber(test = "9");

const boton0 = document.querySelector(".cero");
boton0.onclick = () => addNumber(test = "0");



//operadores buttons
const botonSuma = document.querySelector(".suma");
botonSuma.onclick = () => addOperador(operador = "+");

const botonResta = document.querySelector(".resta");
botonResta.onclick = () => addOperador(operador = "-");

const botonMultiplicar = document.querySelector(".multiplicar");
botonMultiplicar.onclick = () => addOperador(operador = "*");

const botonDividir = document.querySelector(".dividir");
botonDividir.onclick = () => addOperador(operador = "/");



// clear button

const clearButton = document.querySelector(".clearButton");
clearButton.onclick = () => clearTest();


const backSpaceButton = document.querySelector(".backSpace");
backSpaceButton.onclick = () => backSpace();


//calculos de operaciones

const sume = function (a, b) {
    return a + b;
  };
  

  const subtract = function (a, b) {
    return a - b;
  };
  

    const multiply = function (a, b) {
    return a * b;
    };


    const divide = function (a, b) {_
    if (b === 0) {
        return "Error";
    } else {
        return a / b;
    }
    };








