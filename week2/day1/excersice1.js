//Exercise 1//

let food="apples";
let meal="breakfast";
console.log(`I eat ${food} at every ${meal}`);

//Exercise 2//

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

myWatchedSeriesLength=myWatchedSeries.length;
let myWatchedSeriesSentence=`${myWatchedSeries[0]} ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;

console.log(`i watched ${myWatchedSeriesLength} ${myWatchedSeries}`);

//part 2//
myWatchedSeries.splice(2,1,"friends");
myWatchedSeries.push("vikgings");
myWatchedSeries.unshift("game of thrones");
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);


//Exercise 3//

const tempurture_C=42;
const tempurture_F=tempurture_C/5*9+32;
console.log(`${tempurture_C} is ${tempurture_F}`)

//Exercise 4//

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55 a+b=34+21=55
    // Actual:55


    a = 2;

    console.log(a+b) //second expression
    // Prediction: 23 a+b=2+21=23
    // Actual:23

    //value of c
     // Prediction: undefined because there is no defined value
    // Actual: undefined

    console.log(3 + 4 + '5');
     // Prediction: 75  number+string
    // Actual:75




    //Exercise 5//
typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:not a number
// Actual:undefined

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction:boolean
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:undefined
// Actual:nan

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:jonny5
// Actual:jonny5

"johnny" - 5
// Prediction:undefined
// Actual:nan

99 * "hello"
// Prediction:undefined
// Actual:nan

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false





//Exercise 6//



5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction:javascript
// Actual:javascript

" " + " "
// Prediction:space space
// Actual:" "

" " + 0
// Prediction:" 0"
// Actual:" 0"

true + true
// Prediction:?
// Actual:2

true + false
// Prediction:?
// Actual:1

false + true
// Prediction:?
// Actual:1

false - true
// Prediction:?
// Actual:-1

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:undefined
// Actual:nan

