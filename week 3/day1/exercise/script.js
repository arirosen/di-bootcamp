//Exercise 1 : Change The Navbar

//1
document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation")
//2
let addLi = document.createElement("li");
let text = document.createTextNode("Logout");
//3
addLi.appendChild(text);
//4
document.body.children[0].children[0].appendChild(addLi);







//Exercise 2 : Users
//1
let newLi = document.body.children[2].children[1];
newLi.innerHTML = "Richard";
//2

for (let i = 0; i < 2; i++) {

    let newUl = document.querySelectorAll(".list")[i].children[0];
    newUl.innerHTML = "ari";

}

//3
let heyStudents = document.createElement("li");
let text1 = document.createTextNode("Hey students");
heyStudents.appendChild(text1);
for (let i = 0; i < 2; i++) {
    document.querySelectorAll(".list")[i].appendChild(heyStudents)
}

//4
let removeSarah = document.querySelectorAll(".list")[1].children[1];
removeSarah.remove();








//Exercise 3 : Users And Style//
//1
let theDiv = document.getElementsByTagName("div")[2]
theDiv.style.backgroundColor="lightBlue";
theDiv.style.padding="15px";
//2
theDiv.nextElementSibling.children[0].style.display="none";
//3
theDiv.nextElementSibling.children[1].style.border="5px solid black"
//4
theDiv.style.fontSize="50px";
theDiv.nextElementSibling.children[1].style.fontSize="30px";


