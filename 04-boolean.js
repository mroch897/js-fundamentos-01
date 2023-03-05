

var trueVar= true;

console.log(trueVar);


//Iguales

console.log('Igual Doble:' +(5==5)); // Dice true o false  si los elementos son iguales
console.log('Igual doble son string y number: '+ ('5' == 5));


// Intentar siempre el triple igual

console.log('Igual Triple:' +(5===5)); // Dice true o false  si los elementos son iguales
console.log('Igual Triple son string y number: '+ ('5' === 5));



// Otro tipo de comparaciones es el mayor o no

console.log('Es mayor 2 que 3?: '+ (2>3));
console.log('Es mayor 2 que 3?: '+ (3<2));



//También se puede comparar strings

var isSameName= 'Juan' === 'juan';

console.log('Son el mismo nombre?:' +isSameName)

// En este caso, para forzar que no distinga entre minúsculas o mayúsculas se puede poner un toUppercas()

var isSameName1= 'Juan'.toUpperCase() === 'juan'.toUpperCase();

console.log('Son el mismo nombre?:' +isSameName1)


//Convertir algo a booleano
 // Truthy:
 console.log('Es 2 truthy?' + Boolean(2));
 console.log('Es PMBA truthy?' + Boolean('PMBA'));
 console.log('Es true truthy?' + Boolean(true));



 //Falsy

 console.log('Es 0 falsy?: '+ Boolean(0)) // es false siempre
 console.log('Es un string vacio falsy?: '+ Boolean(' ')) 
 console.log('Es false falsy?: '+ Boolean(false)) 

 var surname; // Sin valor, será false.
 console.log( 'Es surname falsy?' + Boolean(surname))

 surname = null; // También será false