// function passToUpper(name) {
//     if (name === "marc") {
//       return name.toUpperCase();
//     } else if (name === "CARLOS") {
//       return name.toLowerCase();
//     } else {
//       return name.toUpperCase();
//     }
//   }
  
//   var myName = passToUpper("papa pepe PIPO");
//   console.log(myName); // "MARC"


// ¡Claro! Aquí te dejo algunos ejercicios para practicar funciones en JavaScript:

// Escribe una función que tome dos números como parámetros y devuelva la suma de esos números.

function sum(num1, num2) {
    var suma=num1+num2;
    return suma;
}

console.log(sum(1,3));
    
// Escribe una función que tome una cadena como parámetro y devuelva la cadena invertida. Por ejemplo, si la cadena es "hola", la función debería devolver "aloh".

function invertirCadena(cadena) {
    // Dividir la cadena en una matriz de caracteres
    var caracteres = cadena.split('');
    
    // Invertir el orden de los caracteres en la matriz
    var caracteresInvertidos = caracteres.reverse();
    
    // Combinar los caracteres invertidos en una cadena
    var cadenaInvertida = caracteresInvertidos.join('');
    
    // Devolver la cadena invertida
    return cadenaInvertida;
  }

  console.log(invertirCadena("Hola"));
  
// Escribe una función que tome un array de números como parámetro y devuelva el número más grande del array.
function arrayNumbers(numbers){
    var numeroMasGrande = numbers[0];

    for(var i = 1; i < numbers.length;i++){
        if(numbers[i]>numeroMasGrande){
            numeroMasGrande = numbers[i];
        }  


    }

    return numeroMasGrande;

}

console.log(arrayNumbers([1,2,3,5,6,2,1,4]));
// Escribe una función que tome una cadena como parámetro y devuelva la longitud de la cadena.

function lengthCad(phrase){
    var numberPhrase= phrase.length;

    return numberPhrase;

}

console.log(lengthCad("Hola que tal como estas"))
// Escribe una función que tome un objeto como parámetro y devuelva una cadena que contenga todos los pares clave-valor del objeto separados por comas. Por ejemplo, si el objeto es { nombre: "Juan", edad: 25, ciudad: "Madrid" }, la función debería devolver "nombre: Juan, edad: 25, ciudad: Madrid".

function obtenerParesClaveValor(objeto) {
    var pares = ""; // Cadena vacía para almacenar los pares clave-valor
    
    // Recorrer el objeto y concatenar los pares clave-valor a la cadena
    for (var clave in objeto) {
      pares += clave + ": " + objeto[clave] + ", ";
    }
    
    // Eliminar la última coma y el espacio de la cadena
    pares = pares.slice(0, -2);
    
    // Devolver la cadena con los pares clave-valor
    return pares;
  }
  var persona = { nombre: "Juan", edad: 25, ciudad: "Madrid" };
  var paresClaveValor = obtenerParesClaveValor(persona);
  console.log(paresClaveValor);
// Escribe una función que tome un número como parámetro y devuelva un array con todos los números enteros desde 1 hasta ese número.

function takeNumbers(numbs){
    var arrayNumbers = [];
    for (var i = 1;i<numbs; i++){
        arrayNumbers.push(i);
    }
    return arrayNumbers;


}


console.log(takeNumbers(10));
// Escribe una función que tome un array de strings como parámetro y devuelva una nueva array con los strings ordenados alfabéticamente de forma ascendente.

function takeStringsAsc(strings){
    return strings.sort()
    
}

console.log(takeStringsAsc(["Hola","Casa","Alambra"]));

// Ahora de forma descendente

function takeStringsDesc(strings){
    
    return strings.sort().reverse();

}
console.log(takeStringsDesc(["Hola","Casa","Alambra"]))

// Escribe una función que tome dos parámetros: un array de números y un número. La función deberá devolver un array con todos los números del array original que sean mayores que el número dado como segundo parámetro.

function numbersBiggerThan(arr, numbers){
    var result=[];
    for (var i = 0; i<arr.length; i++){
        if (arr[i] > numbers) {
            result.push(arr[i]);
          }
    }
    return result;
}



console.log(numbersBiggerThan(["2","2","4","5"], 2));












// Funión que devuelve unos números dentro de un array ordenados de menos a más.
function orderNumbers(numbers){
  return numbers.sort(function(a,b){
    return b-a;
  })
}

console.log(orderNumbers([1,2,3,4,5,2,3]))


// Función para calucla BMI


function bmi(weight, height) {
    var heightMeters=height / 100;
    var bmi1= weight / (heightMeters**2);
    
    
    return bmi1.toFixed(2);
  }
  
  console.log(bmi(80,180))


  // Función que quita espacios

  function noSpace(x){
    return x.replace(/\s/g, ''); //En este caso, utilizamos una expresión regular /\\s/g como primer parámetro de replace(), que encuentra todos los espacios en la cadena y los reemplaza por una cadena vacía.
    }
    
    console.log(noSpace(' Hol a'));



function pruebaRepl(prove){
    return prove.replace("", "");
}

console.log(pruebaRepl("cos",""));


// FUNCIÖN QUE DEVUELVE UN NÚMERO A STRING
console.log("-----------NumberToString---------")

function numberToString(number){
    var string= number.toString();

    return string;
}

console.log(numberToString(4))


// FUNCIÖN QUE DEVUELVE UN STRING A NUMBER
console.log("-----------STRING A NUMBER---------");

function stringToNumber(string){
    return parseInt(string);
}

console.log(stringToNumber("puta"));



// FUNCIÓN QUE DEVUELVA EVEN SI ES PAR, I SI NO ODD

console.log("-----------Even or odd---------");

function evenOrOdd(number){
    
    if(number %2==0){
        return "Even";
    }else{
        return "odd";
    }
    
}


console.log(evenOrOdd(3));


// Función para quitar la primera y última posición de un string.

//cadena.slice(inicioTrozo[, finTrozo])
function deletePosition(string){
    return string.slice(1,3);
}

console.log(deletePosition("HholaA"));





// Función que accepta tanto strings como numbers y devuelve tantas veces como los pongas. EJ:6, "I"     -> "IIIIII"

function repeatStr (n, s) {
    var repeat= "";

    for(var i=0; i<n;i++){
        repeat+=s;

    }

    return repeat;
  }

  console.log(repeatStr(3, " hola"));



  function minNumber(arr){
   return Math.min(...arr);
  }

  console.log(minNumber([2,3,1,4]));