// variables
let operVal = ""; // ahora guardará el operador
let firstNum = "";
let secondNum = "";
let result = 0;

// imput de la pantalla
const addNumber = function (num) {
  const inputest = document.querySelector(".pantalla");
  inputest.value += num;
  if (operVal === "") {
    firstNum += num;
  } else {
    secondNum += num;
  }
};


const addOperador = function (operador) {
  const inputOperador = document.querySelector(".pantalla");
  const ultimo = inputOperador.value.slice(-1); // último carácter
  const operadores = ["+", "-", "*", "/"];

  // Evita agregar si no hay nada aún
  if (inputOperador.value === "") return;

  if (operadores.includes(ultimo)) {
    // Si ya hay un operador al final, lo reemplaza
    inputOperador.value = inputOperador.value.slice(0, -1) + operador;
  } else {
    // Si no hay operador al final, lo añade
    inputOperador.value += operador;
  }

  operVal = operador;

  if (secondNum !== "") {
    evaluate();
    firstNum = result.toString();
    secondNum = "";
  }
};


const resultado = function () {
  const inputResultado = document.querySelector(".pantalla");
  inputResultado.value = result;
};

// clear pantalla
const clearTest = function () {
  document.querySelector(".pantalla").value = "";
  firstNum = "";
  secondNum = "";
  operVal = "";
};

const backSpace = function () {
  const clear = document.querySelector(".pantalla");
  clear.value = clear.value.slice(0, -1);
};


// evalucion de la operación

const evaluate = function () {
  let a = parseFloat(firstNum);
  let b = parseFloat(secondNum);

  switch (operVal) {
    case "+":
      return sume(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
  

};



// funciones matemáticas
const sume = (a, b) => {
  result = a + b;
  resultado();
};
const subtract = (a, b) => {
  result = a - b;
  resultado();
};
const multiply = (a, b) => {
  result = a * b;
  resultado();
};
const divide = (a, b) => {
  if (b === 0) {
    result = "Error";
  } else {
    result = a / b;
  }
  resultado();
};

// asignar botones
document.querySelector(".uno").onclick = () => addNumber("1");
document.querySelector(".dos").onclick = () => addNumber("2");
document.querySelector(".tres").onclick = () => addNumber("3");
document.querySelector(".cuatro").onclick = () => addNumber("4");
document.querySelector(".cinco").onclick = () => addNumber("5");
document.querySelector(".seis").onclick = () => addNumber("6");
document.querySelector(".siete").onclick = () => addNumber("7");
document.querySelector(".ocho").onclick = () => addNumber("8");
document.querySelector(".nueve").onclick = () => addNumber("9");
document.querySelector(".cero").onclick = () => addNumber("0");

document.querySelector(".suma").onclick = () => addOperador("+");
document.querySelector(".resta").onclick = () => addOperador("-");
document.querySelector(".multiplicar").onclick = () => addOperador("*");
document.querySelector(".dividir").onclick = () => addOperador("/");

document.querySelector(".igual").onclick = () => evaluate();
document.querySelector(".clearButton").onclick = () => clearTest();
document.querySelector(".backSpace").onclick = () => backSpace();
document.querySelector(".punto").onclick = () => addNumber(".");

//operadores botones

const botonSuma = document.querySelector(".suma");
botonSuma.onclick = () => addOperador(operador = "+");
operVal = true;

const botonResta = document.querySelector(".resta");
botonResta.onclick = () => addOperador(operador = "-");
operVal = true;

const botonMultiplicar = document.querySelector(".multiplicar");
botonMultiplicar.onclick = () => addOperador(operador = "*");
operVal = true;

const botonDividir = document.querySelector(".dividir");
botonDividir.onclick = () => addOperador(operador = "/");
operVal = true;

const igualButton = document.querySelector(".igual");
igualButton.onclick = () => evaluate();







// clear button

const clearButton = document.querySelector(".clearButton");
clearButton.onclick = () => clearTest();


const backSpaceButton = document.querySelector(".backSpace");
backSpaceButton.onclick = () => backSpace();











