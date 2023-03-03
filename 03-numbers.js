var two= 2;
var twoWithDecimals= 2.5;
var negative= -2;

//Suma:

var sum= 3+2;
console.log(`La suma vale: ${sum}`)

console.log('------------')

//Resta

var substract= 10-4;
console.log(`La resta vale: ${substract}`)

console.log('------------')


// Multiplicación

var multiply= 10*4;
console.log(`La multiplicación vale: ${multiply}`)

console.log('------------')


// División

var divide= 40/4;

console.log(`La división vale: ${divide}`)

console.log('------------')


// División con decimales

var divideWithDecimals= 25/4;

console.log(`La división con decimales vale: ${divideWithDecimals}`)

console.log('------------')


// Resto

var rest = 25%4;
console.log(`El resto vale: ${rest}`)

console.log('------------')


//Potencia

var power = 5**2

console.log(`La potencia vale: ${power}`)

console.log('------------')



// Operaciones complejas:

var complexCalculs= 2+2 *(4+5)/5+6;
console.log(`El resultado es: ${complexCalculs}`)

console.log('------------')

//Operaciones complejas usando una variable

var firstCalc= 2*4+5;
var complexCalculs2= 2+ firstCalc /5+6;

console.log(`El resultado es: ${complexCalculs2}`)

console.log('------------')

// Función Number: Se puede pasar una variable que tenga un número en forma de string y lo convierte a number

var numberAsString= '30';
var number= 35;

const numberAsNumber= Number(numberAsString)
console.log(number+ numberAsNumber);


//NaN ( Not a Number)

var notValidnumber= Number('_');
console.log(`El número no vàlido es: ${notValidnumber}`)

// Para comprobar si un número es nan usamos Number.isNaN() ejemplo: 

console.log(`Es el número nan?: ${Number.isNaN(notValidnumber)}`);