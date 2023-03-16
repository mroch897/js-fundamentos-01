
// Calcular la medoa qde una colleción de notas
const getAvarage = (scores) =>{
    let sum=0;
    for (let i=0;i<scores.length; i++){
        const score = scores[i];
        sum+=score;
    }
    return sum /scores.length;
};
const marks =[10,4,6,9,4,6,1];
const average= getAvarage(marks);
console.log(`La media de las notas es: ${average}`);


//Filtras las notas de los números pares

const getEvenNumber =(numbers) =>{
    const evenNumbers= [];
    for (let i=0;i<numbers.length;i++){
        const number = numbers[i];
        if(number %2==0){
            evenNumbers.push(number);
        }
    }

    return [numbers, evenNumbers];
}


const [originalArray, evenNumbers]=getEvenNumber([1,2,41,5,3,1,2]);



console.log(`Los número pares del array: ${originalArray} son: ${evenNumbers}`);

