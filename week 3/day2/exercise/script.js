//Exercise 1 : Change The Article

//1
let retrieveH1 = document.querySelector("h1")
console.log(retrieveH1)

//2
let removeP = document.querySelectorAll("p")[3];
removeP.remove();

//3
let h2Color = document.querySelector("h2");
h2Color.addEventListener("click", h2ColorFunc)

function h2ColorFunc() {
    h2Color.style.backgroundColor = "red";
}

//4
let removeH3 = document.querySelector("h3");
removeH3.addEventListener("click", h3RemoveFunc)

function h3RemoveFunc() {
    removeH3.style.display = ("none")
}

//5
let x = document.createElement("button");
let t = document.createTextNode("click");
x.appendChild(t);
document.body.appendChild(x)

let btn = document.body.querySelector("button")
btn.addEventListener("click", boldP)

function boldP() {
    document.body.style.fontWeight = "bold";

}






//Exercise 2 : Work With Forms


//1
let form = document.forms[0]
console.log(form)
//2//3
let formElements = form.elements;
console.log(formElements)

let inputFname = formElements.fname;
console.log(inputFname)

let inputLname = formElements.lname;
console.log(inputFname)

//4
function retrieveForm(e) {
    e.preventDefault();
    console.log(firstInput.value)
}
let firstInput = form.elements[0].value;


let secondInput = form.elements[1].value;


let createLi=document.createElement("li")
let ul = document.querySelector("ul")
let createText=document.createTextNode(inputFname.value)
createLi.appendChild(createText)
ul.appendChild(createLi)




form.addEventListener("submit", retrieveForm)






