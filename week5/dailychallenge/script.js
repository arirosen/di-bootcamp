
const toFirst = document.getElementById("first");
const toLast = document.getElementById("last");

document.forms.my.addEventListener("submit", function (event) {
	event.preventDefault();
	//console.log(toFirst + " " +toLast);
	let name = {
		firstname : toFirst.value,
		lastname : toLast.value,
	}
	const toJson = JSON.stringify(name);
	console.log(name);
	console.log("as json: " + toJson);
	
})