
//1. Retrieve the form
let form = document.getElementById("formCategory");
//2. Add an event listener to the form - event submit
form.addEventListener("submit", retrieveDataFromForm);

//3. Create the retrieveDataFromForm function
function retrieveDataFromForm(event){
	event.preventDefault();
	// event.target : the form
	// event.target.elements : list of all the elements of the form
	// event.target.elements.categoryInput : the specific input with the name categoryInput
	let inputCategory = event.target.elements.categoryInput;
	makeRequest(inputCategory.value)
}

//make the HTTP GET REQUEST
function makeRequest (categoryUser){
	//1. Create a object XMLHttpRequest
	let objxhr = new XMLHttpRequest();

	//2. Open the request
	// find one random gif depending on a category
	objxhr.open('GET', `https://api.giphy.com/v1/gifs/random?tag=${categoryUser}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);


	//3. Send the request to the server
	objxhr.send();


	//4. The server received the request and is processing the data
	objxhr.onprogress = function () {
		console.log("PROCESSING DATA")
	}

	//5. The server sends us back a response
	// 2 possibilities: everything went weel, the status 200
	//  			  : everything went wrong, not the status 200
	objxhr.onload = function () {
		//1.if everything went well - it means that the server sent us back a response
		if (objxhr.status === 200) {
			//2.the respose if a JSON string - we need to convert it to an JS object
			// to use it
			let result = JSON.parse(objxhr.response)
			//3. From the response that is now a JS object, we retrieve the 
			//url of the random gif
			let gifURL = result["data"]["images"]["original"]["url"];
			
			//4. Now that I retrieved the gif URL, we want to append the gif
			// to our page

			//4.1 - we created a section in the HTML and we retrieve it using 
			// document.getElementById
			let section = document.getElementById("container");
			//4.2 - we create an image
			let imageGif =  document.createElement("img");
			//4.3 - the source of the image should be the gif url that we retrieved above
			imageGif.setAttribute("src", gifURL)
			//4.4 - we need to append the image to the section
			section.appendChild(imageGif);
		} else {
			console.log("ERROR")
		}
	}

}