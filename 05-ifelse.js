// Que són los condicionales?
// Los condicionales son una forma de hacer puertas lógicas.
// Un ejemplo seria: Está la puerta de casa abierta?
//- Si la respuesta es si: Entra en casa.
//- Si la respuesta es n: Cojo las llaves para abrir

var age = 24;
var canParticipate = false;

if (age < 30) {
  canParticipate = true;
}

console.log(`Puede participar el usuario? ${canParticipate}`);



var yearsToRenew=0;
var driverAge=78;



// 18 años o más, y 50 o menos =>10
// Más de 50 y menos o igual a 75 => 5
// Más de 75 años=>1
console.log("------------------------")

// IF
if(driverAge >=18 && driverAge <=50) {
    yearsToRenew=10;
}

if(driverAge >=50 && driverAge <=75){
    yearsToRenew=5;
}

if (driverAge >75){
    yearsToRenew=1;
}


console.log(yearsToRenew);

console.log("------------------------")
// ELSE

var myName= 'marc'.toUpperCase();

if(myName==='Marc'.toUpperCase()){
    console.log('Eres el puto amo');
}else{
    console.log('Eres un pringado');
}


console.log("------------------------")


// Se puede hacer de manera cutre: Así, va por orden, sino siempre mostraria personal record
var time=8000;
var record='';

if(time <12000){
    record='Personal record';
}

if(time<10000){
    record=' Olympic Record';
} 

if(time <=8000){
 record='World Record';
}

console.log(`El record es: ${record}`)


// Para hacerlo de manera correcta se puede usar el else:

var runTime= 15000;

var recordR= ' ';

if (runTime<8000){
    recordR="World Record";
}else if(runTime<10000){
    recordR="Olympic Record";

}else if(runTime<12000){
    recordR="Personal best";
}else{
    recordR="Intentalo la proxima";
}

console.log(`El record es: ${recordR}`)



//


var city= 'Madrid';

var hasCar= false;

if(city === 'Barcelona' && hasCar === false){ 
    console.log("Va en me");
}else if(city=== 'Barcelona' && hasCar===true){
    console.log("Puede ir en coche o metro");
}else if(city==='Madrid' || city==='Barcelona' && hasCar===false){// Siempre que hay un OR y un AND es mejor poner los OR que van relacionados entre parentesis.
     console.log("Va en metro");
}