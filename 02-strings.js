var name = "Marc";
var surname = "Roig ";

// Sumar variables:

//para separar con espacio añadir + ` `+
var fullName = name + " " + surname;
console.log(fullName);

// separar varias variables

var firstIngredient = "leche";
var secondIngrident = "arroz";
var thirdIngridient = "limon";
var fourthIngridient = "canela";

// Lista ingredientes: leche, arroz, limon, canela

var recipe =
  "Lista de ingredientes:  \n" +
  firstIngredient +
  ", " +
  secondIngrident +
  ", " +
  thirdIngridient +
  ", " +
  fourthIngridient;

console.log(recipe);
console.log('------------')
// Para no tener que hacer todo lo anterior, se puede interpolar usando la comilla invertida: `` y luego, para pner la variable seria ${variable}

var recipeInterpolated = `Lista de Ingredientes:
 - ${firstIngredient}
 - ${secondIngrident}.
 - ${thirdIngridient}.
 - ${fourthIngridient}.

 `;

console.log(recipeInterpolated);
console.log('------------')

var car = "Skoda";
//Funciones. Es poner el nombre de variable + un "." `().

// EJ: car.toUpperCase() lo conevierte todo en mayúsuculas
//car.toLocaleLowerCase() lo convierte todo en minúsculas
//car.trim Limpiar los espacios
//car.slice Permite elejr el incide donde quieres partir hasta el punto que tu digas
var myCar = `Mi coche es un:  ${car.toUpperCase()}`;
console.log(myCar);

console.log('-------------')

var dog='CARLINO'

var myDog=`Mi perro es un: ${dog.toLowerCase()}`
console.log(myDog)

console.log('-------------')

var computerDescription= '         Ordenador muy potenete con mucha RAM.'

console.log(computerDescription.trim())

console.log('-------------')

var school= 'The PMBA'
var schoolName= school.slice(4) // esto es donde quieres que acabe.
var schoolName1= school.slice(4, 6)  // Esto es hasta donde llega el último no se lo queda

console.log(schoolName)
console.log(schoolName1)








