// function getPriceByCity() {
//   // describimos función
//   var city = "Valencia";
//   var price = 0;

//   if (city === "Madrid") {
//     price = 10;
//   } else if (city === "Valencia") {
//     price = 20;
//   } else {
//     price = 30;
//   }

//   return price;
// }

// var priceByCity = getPriceByCity(); //invocamos la función

// console.log(`El precio es: ${priceByCity}`);


// Tambiém, se puede hacer de manera más lógica:


function getPriceByCity(city) { // Pasamos la variabel city en el parentesis
// var city = "Valencia";
   var price = 0;

   if (city === "Madrid") {
     price = 10;
   } else if (city === "Valencia") {
     price = 20;
   } else if( city === "Barcelona") {
     price = 30;
   }else{
    price = 2;
   }
   return price;
 }

 var priceInMadrid = getPriceByCity('Madrid');// Como hemos pasado la variable city en el parentesis, ahora cuando invocamos la función podemos poner la ciudad aqui
 var priceInValencia = getPriceByCity('Valencia ');
 var priceInBarcelona = getPriceByCity('Barcelona'); 
 var priceInCadiz = getPriceByCity('Cadiz'); 

 console.log(`El precio en Madrid es es: ${priceInMadrid} `);
 console.log(`El precio en Valencia es es: ${priceInValencia} `);
 console.log(`El precio en Barcelona es es: ${priceInBarcelona} `);
 console.log(`El precio en Cadiz es es: ${priceInCadiz} `);