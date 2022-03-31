
//Exercise 1 : Move The Box
//Instructions
//Move the box from left to right


function myMove() {

    let box = document.getElementById("animate");
    let pos = 0;


    let id = setInterval(function () {
        if (pos >= 350) {
            clearInterval(id);
        }
        pos++;
        box.style.left = pos + "px";
        box.style.top = pos + "px";
    }, 10)

}







//Exercise 2: Drag & Drop



const fill = document.querySelector(".fill");
const emptys = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);



for (const empty of emptys) {
    empty.addEventListener("dragover", dragOver)
    empty.addEventListener("dragcenter", dragEnter)
    empty.addEventListener("dragleave", dragLeave)
    empty.addEventListener("drop", dragDrop)
}


function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
    this.className = "fill";
}

function dragOver(e) {
    e.preventDefault

}


function dragEnter(e) {
    e.preventDefault
    this.className += " hovered";
}


function dragLeave() {
    this.className = "empty";

}


function dragDrop() {
    this.className = "empty";
    this.append("fill")
}
