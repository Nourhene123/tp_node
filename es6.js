
// Spread operator avec objet
const product = { name: "Pc", price: 1200 };
const productWithStock = { ...product, stock: 59 };
console.log(productWithStock);


// Déclaration des variables avec let, var et const
let age = 30;
var city = "Nabeul";
const country = "tunisie";



// Opérateur ternaire
let isAdmin = false;
let accessMessage = isAdmin ? "Accès autorisé" : "Accès refusé";
console.log(accessMessage);



// Fonction fléchée
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(4, 5)); // 20



// Destructuration d'objet
const employee = {
  firstName: "Nourhene",
  lastName: "Ferchichi",
  position: "Software Developer",
  salary: 3500
};

let { firstName: empFirstName, salary } = employee;
console.log(empFirstName, salary);

// Destructuration de tableau
const colors = ["Red", "Green", "Blue", "Yellow"];
let [color1, color2] = colors;
console.log(color1, color2);



// Chaîne de caractères avec interpolation
const firstName = "Nourhene";
const lastName = "Ferchichi";
console.log(`${firstName} ${lastName}`);



// Spread operator avec tableau
const numbers = [4, 5, 6];
const numbersCopy = [...numbers];
console.log(numbersCopy);

