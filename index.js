//
// Destructuring 1 nilai pada berkas javascript
//

// import coffeeStock from './state.js';
// // Menulis tiap tipe kopi   
// const displayStock = stock => {
//     for (const type in stock) {
//         console.log(type);
//     }
// }

// displayStock(coffeeStock);

//
// Destructuring banyak  nilai pada berkas javascript
//

import { coffeeStock, isCoffeeMachineReady } from './state.js';
 
console.log(coffeeStock);

// Menulis tiap tipe kopi   
const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeeStock);

console.log(isCoffeeMachineReady);


// const coffeeStock = require('./state');
 
// console.log(coffeeStock);

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//       console.log("Kopi berhasil dibuat!");
//     } else {
//       console.log("Biji kopi habis!");
//     }
//   }
   
//   makeCoffee("robusta", 80);