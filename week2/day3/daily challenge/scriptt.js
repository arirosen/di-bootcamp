//Exercise 1 : Information//
//Part I//

function infoAboutMe() {

    console.log("my name is ari and i like to code")
}
infoAboutMe()


//Part II//

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("your name is " + personName + " you are " + personAge + " years old " + " your favorite color is " + personFavoriteColor)

}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")



//Exercise 2 : Tips
function calculateTip() {
    let tip = prompt("whats the amount of the  bill?")

    if (tip < 50) {
        tip *= 1.2;
    }
    if (tip >= 50 && tip <= 200) {
        tip *= 1.15;
    }
    if (tip > 200) {
        tip *= 1.1;
    }
    console.log(tip)
}
calculateTip()


//Exercise 3 : Find The Numbers Divisible By 23
let num = 0;
let sum = 0;
let v = 0;
function isDivisible() {

    while (num <= 500) {

        if (num % 23 == 0) {
            v = num;
            console.log(v)
            sum += v;
        }
        num++
    }
}
isDivisible()
console.log(sum)


//Exercise 4 : Shopping List//

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}
let shoppinglist = ["banana", "orange", "apple"]
function myBill()







