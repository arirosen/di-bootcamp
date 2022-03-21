//Exercise 1: Simple If/Else Statement//
//1
let x = 5;
let y = 2;
//2
if (x > y) {
    console.log((x), "is the biggest number")
}
else {
    console.log((y), "is the biggest number")
}



//Exercise 2: Chihuahua//
//1
let newDog = "Chihuahua";
//2
let letters = console.log(newDog.length)
//3
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())
//4
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas")
}
else {
    console.log("I dont care, I prefer cats")
}



//Exercise 3: Even Or Odd//
//1
let enterNumber = prompt("enter a number")
//2
if (enterNumber % 2 == 0) {
    console.log((enterNumber), "is an even number")
}
else {
    console.log((enterNumber), "is an odd number")
}


//Exercise 4: Group Chat//
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 1) {
    console.log(users[0], "is online")
}
else
    if (users.length == 2) {
            console.log(users[0],"and", users[1], "are online")}
        else if(users.length > 2) {
            console.log(users[0], users[1],"and", (users.length - 2), "more are online")}
            else {(users.length == 0) 
                console.log("no one is online")
            }









