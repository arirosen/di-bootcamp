//Exercise 1 : List Of People//

let people = ["Greg", "Mary", "Devon", "James"]
//1
people.shift();
//2
people.splice(2, 1, "jason");
//3
people.push("ari");
//4
let maryIndex = people.indexOf("Mary");
console.log(maryIndex);
//5
let people1 = people.slice(1, 3);
console.log(people1);
//6
//foo is not present//
let foo = people.indexOf("foo");
console.log(foo);
//7
let last = people.length - 1;
console.log('last', people[last]);


//Part II - Loops//
//1
for (let i = 0; i <= people.length - 1; i++) {
    console.log(people[i])
}
//
//2
for (let i = 0; i <= people.length - 1; i++) {
    console.log(people[i])
    if (people[i] == "jason")
        break;
}

//Exercise 2 : Your Favorite Colors//

let colors = ["blue", "green", "yellow", "red", "white"]
for (let i = 0; i < colors.length; i++) {

    console.log(`my #${i + 1} choice is ${colors[i]}`)
}




//Exercise 3 : Repeat The Question//
let num = 0;
while (num < 10) {
    let res = prompt("enter a number");
    console.log(typeof (res))
    if (!isNaN(res)) {
        num = Number(res)
        console.log(num);
        if (num > 10) {
            break;
        }
    }
}
console.log(num + "is greater than 10");


//Exercise 4 : Building Management//

let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}


//2
console.log(building.numberOfFloors, "floors")
//3
console.log((building.numberOfAptByFloor.firstFloor) + building.numberOfAptByFloor.thirdFloor, " 1st and 3rd floors");
//4
console.log("dan ",building.numberOfRoomsAndRent.dan[0])
//5
let sarah=building.numberOfRoomsAndRent.sarah[1]
let david=building.numberOfRoomsAndRent.david[1]
let dan=building.numberOfRoomsAndRent.dan[1]

if(sarah+david>dan){
    building.numberOfRoomsAndRent.dan[1]=1200;
console.log( building.numberOfRoomsAndRent.dan[1])
}


//Exercise 5 : Family//
let family = {
    ari:55,
    ben:65,
    siblings: 32,
}
for(key in family){
console.log(key);
}
for(key in family){

    console.log(family[key]);
}

  //Exercise 6//

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
for (x in details) {
    console.log([x])
    console.log(details[x])
}

//Exercise 7 : Secret Group//


let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

for (let i = 0; i < names.length; i++) {
  
    
}