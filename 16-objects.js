const person={
    name: 'Marc',
    surname:'Roig',

};

// Como acceder a la propiedad del objeto:

const personName= person['name'];// Aquí accedemos al name.

// también sue puede entrar de la siguiente manera.
constPersonSurname= person.surname;


console.log(`El nombre es: ${personName} y su apellido es ${constPersonSurname}`); 

// De todas formas, podemos acceder a dicha propieda

console.log(`El nombre es ${person.name} y su apellido es ${person.surname} `);

// Como editar/añadir algo en un objeto: 

person['age']=30;

console.log(`La persona tiene ${person.age} años`);

// Para borrar una propiedad.
person['city']='Madrid'; // añadimos ciudad
delete person.city // aqui la eliminamos

console.log(`La persona vive en ${person.city}`); // Si nos fijamos sale undifined


person['city']='Barcelona'; // Ahora la volemos a añadir

console.log(`La persona vive en ${person.city}`);

person.city='Tarragona';  // aqui editamos el "city";
console.log(`La persona vive en ${person.city}`);

person.city='Barcelona';

// CLAVES DINÁMICAS--> Clave que depende de una variable

function getKey(object, key){  // Estoy ahora, lo podemos usuar para distintas acciones como pedir nombre, apellido...
    return object[key];

}

const dynamicName=getKey(person,'name');
const dynamicSurname=getKey(person,'surname');
const dynamicAge=getKey(person,'age');
const dynamicCity=getKey(person,'city');

console.log(`La calave dinámica name vale ${dynamicName}`);
console.log(`La calave dinámica surname vale ${dynamicSurname}`);
console.log(`La calave dinámica age vale ${dynamicAge}`);
console.log(`La calave dinámica city vale ${dynamicCity}`);

console.log(`${dynamicName} ${dynamicSurname} que actualmente tiene ${dynamicAge} años, vive en ${dynamicCity}`)
