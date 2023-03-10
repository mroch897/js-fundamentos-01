

// FUNCIONES MÚLTIPLES


function sum(num1, num2){
    return num1+num2;
}

var totalSum =sum(4,8);

console.log(`La suma total vale ${totalSum}`);

// FUNCIONES ANÓNIMAS

var substract = function(a, b){
    return a-b;
}

console.log(`La resta vale ${substract(1,2)}`);

// Hay una forma de declara una función anónima de mejor manera y más corta: Funcion flecha (Arrow funcion)

var multiply= function(a, b){
    return a*b;
}

var multiply= (a, b) =>{ // Se puede usar quitando la palabra funcion y poniendo =>
    return a*b;
}

// return implícito
var multiply = (a, b) => a*b; // También se puede usar así. Pero por ejemplo no se puede añadir un console log