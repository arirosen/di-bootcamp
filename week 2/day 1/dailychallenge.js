//excersice1//


let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
fruits.sort();
fruits.push("kiwi");
fruits.splice(0,1);
fruits.reverse();
console.log(fruits);



//excersice2//


let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let Fruits= moreFruits[1][1][0];
console.log(Fruits);