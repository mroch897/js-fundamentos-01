var name='Marcos';
console.log('1. name:', name);

function changeName(newName){
    name= newName
}
console.log('2. name:', name);

changeName('Marc')

console.log('3. name:', name);


//SCOUT: Es el alcance que tiene cada función.
// Ahora lo hacemos de una manera correcta

function sum(a,b){
    console.log('Función sum de scope global');
    return a+b;
}
function substract(a,b){
    return a-b;
}

function doOperation(operation, a, b){
    // Esta variable hace shadowing a la función sum de scope global
    // Solo dentro de la función doOperation();
    //var sum= (num1, num2)=> num1+num2; // Aquí dentro declaramos otra funciónn

    if(operation==='sum'){
        return sum(a,b);
    }else if(operation === 'substract'){
        return substract(a,b);
    }else{
        return 'No operation';
    }
}

const result= doOperation('sum', 3,4);
console.log(`El resultado es: ${result}`);