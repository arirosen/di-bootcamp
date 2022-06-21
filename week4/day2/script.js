// Exercise 1 : Find The Sum

// Create a one line function (ie. an arrow function) 
// that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b;


// Exercise 2 : Kg And Grams
// Instructions 
// Create a function that receives a weight in kilograms
//  and returns it in grams. (Hint: 1 kg is 1000gr)


// First, use function declaration and invoke it.
function kiloToGrams(a){
return a*1000;
}
kiloToGrams(1)



// Then, use function expression and invoke it
let kiloToGrams2=function(a){
    return a*1000;
}
kiloToGrams2(2)



// Write in a one line comment, the difference between
//  function declaration and function expression.
//answe:its an anonymous function



// Finally, use one line arrow function and invoke it.
const kiloToGrams3=(a)=>a*1000;




// Exercise 3 : Fortune Teller

// Create a self invoking function that takes 4 arguments:
//  number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title>
//  in <geographic location>, and married to <partner's name> with <number of children> kids."


(function (numberOfChildren,partner,location,job){

  alert( `You will be a ${job} in ${location}, and married to ${partner} with ${numberOfChildren} kids.`)
})
(5,"yuli","tlv","doctor")




// Exercise 4 : Welcome
// John has just signed in to your website and you want to welcome him.
//1
// Create a Bootstrap Navbar in your HTML file.
//2
// In your js file, create a self invoking funtion that takes 1 argument: 
// the name of the user that just signed in.
//3
// The function should add a div in the nabvar, displaying the name
//  of the user and his profile picture.

(function (userName){
let node=document.createElement("div");
let textnode=document.createTextNode(userName);
node.appendChild(textnode);
document.getElementsByTagName("nav").appendChild(node)
})
("john")








