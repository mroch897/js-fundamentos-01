// El bucle While solo se usa en argumento.

var count=0;

while(count<=10){
    console.log(`La cuenta va por ${count}`);
    count++; // Si no ponemos esto, entrara en bucle infinito;
}

console.log("-----------------------");

var negativeCount=10;

while(negativeCount>=0){
    console.log(`La cuenta negativa va por ${negativeCount}`);
    negativeCount--;
}
console.log("-----------------------");


var timesRepeated=0;
var sentence= 'La programación me gusta';
var i=0;

while(i<sentence.length){
    if(sentence[i]==='a'){
        timesRepeated++;
    }

    i++;
}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`);