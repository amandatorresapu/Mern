const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

console.log(groceries)
console.log(groceryList)

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );