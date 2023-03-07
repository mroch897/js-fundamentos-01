// Condicional Switch--> Nos permite enviar un parámetro de entrada y se va a evaluar en situaciones diferentes

// if (){}
// if() {} else{}
// if() {} else if{} else{}

var price;
var city= 'canada';

switch(city){
    case 'Valencia':
        price= 10;
        break; // se usa para que no entre en el siguiente case en caso de que se cumpla
    case 'Madrid':
        price = 15;
        break;  
    case 'Barcelona':
        price= 20;
        break;  
    default:
        price= 5;

}

console.log(`El precio del metro para ${city} es de ${price} euros`);