// La diferencia que tiene con el while, es que en el “WHILE” la condición se hace antes de cada loop. En cambio en el “DO WHILE” la condición se hace al final de cada loop.

console.log("------WHILE------")
var x=0;

while (x<=10){
    x++;

}

console.log(`La variable i vale: ${x}`);


console.log("------ DO WHILE------")

var j=0;

do{
j++;

} while(j<=10);

console.log(`La variable j vale: ${j}`);

console.log("--------------")




var timesRepeated = 0;
var sentence = 'La programación me gusta';
var i = 0;

do {
  if (sentence[i] === 'a') {
    timesRepeated++;
  }

  i++;
} while (i < sentence.length);

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`);