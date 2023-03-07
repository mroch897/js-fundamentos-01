// Los loops o bucles son una forma que tiene la programación de darle vueltas al mismo conteido hasta que nosotros pongamos un límite.
//Un ejemplo seria: 
    // Nos imaginamos que en una pista de atletísmo, queremos que el corredor (códgigo)se pare cuando llegue a la vuelta número 10. 




// Loop "for"



for( var i = 0; i<5; i++){ // Hay que poner 3 cosas separadas por ";".  i+1 también se puede poner i++
console.log(`El valor de i es: ${i}`);
}

console.log("-----------");

//for( VALOR INCICIAL; COMPARACIÓN; OPERACIÓN TRAS CADA LOOP) {
  //  CONTENIDO
//}


for( var j = 10; j>=0; j--){
    console.log(`El valor de j es: ${j}`);
}

console.log("-----------");

for(var x=10; x>=0; x=x-3){
    console.log(`El valor de x es: ${x}`);
}

console.log("-----------");
var timesRepeated= 0;
var sentence='La programación me gusta';
console.log(sentence[1]); // Usamos array [] para ver en que posición está 
console.log(sentence.length); // para calcular la posición final de un string, se usa el ".length"
                            // Entonces length cuenta con números naturales, es decir: 1,2,3... en lugar de posicones: 0,1,2,3


for( var i = 0; i<sentence.length;i++){ // Usando l i<sentence.length, como length cuenta en número naturales al no poner el igual contará uno menos    
    if(sentence[i] === 'a'){
        timesRepeated++;

    }

}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`);