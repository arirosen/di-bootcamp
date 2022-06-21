// //Exercise 1 : Scope


// // #1
// function q1() {
//     var a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(a);              //3
// }

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);           //0
// }


// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);         //undefined
// }

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);          //test
// }

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);          //5
// }
// alert(a);              //5




// //Exercise 2 : Ternary Operator


// //Using the code below:

// //function winBattle(){
// //   return true;
// //}
// //1
// const winBattle = () => true;
// //2//3
// let experiencePoints = winBattle() == true ? 10 : 1;
// //4
// console.log(experiencePoints)



// //Exercise 3 : Is It A String ?


// const isString = a => typeof(a) === 'string' ? true : false ;


// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// //Exercise 4 : Colors
// //1
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// colors.forEach((color, index) => colors[index] = [index] + "# choice is " + color)
// console.log(colors)
// //2
// colors.some((color) => color.indexOf("Violet") > -1, console.log("yeah"))

// //Exercise 5 : Colors #2
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// // const all = [...color, ...ordinal];
// color.forEach((el, index) => {
//   if (index === 0) {
//     console.log(`${index + 1}${ordinal[1]} choice is the ${el}`);
//   } else if (index === 1) {
//     console.log(`${index + 1}${ordinal[2]} choice is the ${el}`);
//   } else if (index === 2) {
//     console.log(`${index + 1}${ordinal[3]} choice is the ${el}`);
//   } else {
//     console.log(`${index + 1}${ordinal[0]} choice is the ${el}`);
// }
// });




// //Exercise 6 : Bank Details
// //1
// let bankAmount = 10000;
// //2
// const vat = 1.17;
// //3
// let expenses = 0;
// let positive = 0;
// let details = [+200, -100, +146, +167, -2900]
// //4
// details.forEach((element, index) => details[index] < 0 ? expenses += details[index] * vat : positive += details[index]);
// //5
// let bankAccount = bankAmount + expenses + positive;
// console.log(`i have ${bankAccount} in my bankAccount in the end of the month`);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.listen(3000)