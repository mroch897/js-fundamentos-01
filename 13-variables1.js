// Siempre hemos trabajado con  var. Pero esto lo que provoca es que se puede "liar" ya que se puede cambiar el valor facilmente. Para solucionarlo usamos "const". Esto lo que hace es que no puede reasignar-se.


//const myName= 'Marc'; // Al pooner const, todo lo de abajo ya no serviria. Daria error, ya que no se puede reassignar.

// function changeMyname(newName){
//     myName = newName;
// }

// function sayMyName(){
//     console.log(`Mi nombre es ${myName}`);
// }

// changeMyname('pepe');
// sayMyName();

// En el caso de que queramos que una variable se pueda reasignar de nuevo, usamos let.

let myAge= 26;

function changeMyAge(age){
    myAge = age;
}

function sayMyAge(){
    console.log(`My age is ${myAge}`);
}

changeMyAge(30);
sayMyAge();