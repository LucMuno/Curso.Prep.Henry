// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { ResetMode } = require("simple-git");

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Henry';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 50;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  str = nuevaString;
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  resp = x + y;
  return resp;
}
suma(7,5);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  resp1 = x - y;
  return resp1;
}
resta(12,8);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  resp2 = x * y;
  return resp2;
}
multiplica(5,4);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  resp3 = x / y;
  return resp3;
}
divide(20,4);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x===y) {
    return true;
  }
  return false;
}
sonIguales(8,6);

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length===str2.length){
    return true;
  }
  return false;
}
tienenMismaLongitud('mano','tapa');

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num<90){
    return true;
  }
  return false;
}
menosQueNoventa(85);
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num>50){
    return true;
  }
  return false;
}
mayorQueCincuenta(55);
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  resto = x % y;
  return resto;
}
obtenerResto(21,5);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  parsi = num % 2;
  if(parsi === 0){
    return true;
  }
  return false;
}
esPar(88);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  parno = num % 2;
  if(parno > 0){
    return true;
  }
  return false;
}
esImpar(65);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  resultado = Math.pow(num,2);
  return resultado;
}
elevarAlCuadrado(5);

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  resultado = Math.pow(num,3);
  return resultado
}
elevarAlCubo(7);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  resultado = Math.pow(num,exponent);
  return resultado;
}
elevar(12,4);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  resultado = Math.round(num);
  return resultado;
}
redondearNumero(12.65);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  resultado = Math.ceil(num);
  return resultado;
}
redondearHaciaArriba(25.06);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  resultado = Math.random();
  return resultado;
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  resultado = numero;
  positivo = 'Es positivo';
  negativo = 'Es negativo';
  if(resultado > 0){
    return positivo;
  }
  if(resultado < 0){
    return negativo;
  }
  if(resultado === 0){
    return false;
  }
}
esPositivo(25);
esPositivo(-12);
esPositivo(0);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  resultado = str + '!';
  return resultado;
}
agregarSimboloExclamacion('Hello World');

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  resultado = nombre + ' ' + apellido;
  return resultado; 
}
combinarNombres('Luciano','Muñoz');

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  resultado = 'Hola' + ' ' + nombre + '!';
  return resultado;
}
obtenerSaludo('German');

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  resultado = alto * ancho;
  return resultado;
}
obtenerAreaRectangulo(5,12);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  resultado = lado * 4;
  return resultado;
}
retornarPerimetro(5);


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  resultado = (base * altura) / 2;
  return resultado;
}
areaDelTriangulo(12,6);


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  resultado = euro * 1.2;
  return resultado;
}
deEuroAdolar(10);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
    if(letra.length > 1){
    return 'Dato incorrecto';
  } else if(letra === 'a'|| letra === 'A'|| letra ==='e'|| letra ==='E'|| letra === 'i'|| letra === 'I'|| letra === 'o'|| letra === 'O'|| letra === 'u'|| letra === 'U'){
        return 'Es vocal';
      }else{
        return 'Dato incorrecto';
      }
      
}
esVocal('ar');
esVocal('a');



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
