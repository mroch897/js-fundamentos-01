// Un array, es una colección de variables.

const marks= [10,4,5,3,2,1,0,0,2];

//Para acceder a una posición seria:
marks[0]; // Aquí accedemos a la posición 0 = 10;

// Para saber la longitud se usa 
const length = marks.length; 

console.log(length); // Nuestro array tiene 9 posiciones;

//Para acceder al valor de la última posición del array se usa: 
const lastElementMarks= marks[length-1];
console.log(`La últilma nota del array es: ${lastElementMarks}`);

// En arrays, podemos usar const y cambiar la variable ya que cambiamos una posición, y no un array entero. Recomendable usar const en arrays. Ejemplo
marks[0]=4;
console.log(`La nota del primer alumno es ${marks[0]}`);



// Añadir elementos al principio del array. Usamos unshift();

marks.unshift(37);
console.log(`Unshift: ${marks}`);

// Eliminar el primer elemento del array. Usamos shift
marks.shift();
console.log(`Shift: ${marks}`);


// Para añadir un elemento al final del array, usamos push();

marks.push(111);
console.log(`Push: ${marks}`);

// Para eliminar el último elemento del array, usamos pop()

marks.pop();
console.log(`Pop: ${marks}`);

// Usamos slice para quitar unas posiciones entre uno y otra, sin contar la última
const fruits =['Kiwi', 'manzana', 'melón'];
const firstFruit= fruits.slice(1, 2);


console.log(`El array con la primera fruta es ${firstFruit}`);

// Copiar un array entero

const copyFruits = fruits.slice();
console.log('Copia fruits array', copyFruits);

// Hacer una referencia a un array
const reassignedFruits= fruits;
reassignedFruits.push('Sandia');

console.log("Reassigned fruits", reassignedFruits);
console.log("Fruits", fruits);
console.log('Copia fruits array', copyFruits);
