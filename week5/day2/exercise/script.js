
// exercise xp 1 and 2




let btn = document.getElementById("btn");
btn.addEventListener("click", makeRequest);
let objxhr;

//MAKING THE REQUEST

//1.create the XMLHTTPREQUEST object
function makeRequest() {
    objxhr = new XMLHttpRequest();

    //2. Make the request
    objxhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&rating=g&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

    //3. Send the request to the server
    objxhr.send();


    // CHECK THE RESPONSE OR CHECK THE DATA PROCESSING FROM THE SERVER

    //process the data

    objxhr.onprogress = function () {
        document.body.style.backgroundColor = "blue";
        console.log("THE SERVER IS PROCESSING THE DATA")
    }


    objxhr.onload = function () {
        document.body.style.backgroundColor = "white";
        if (objxhr.status === 200) {
            console.log("SUCCESS")
            let result = JSON.parse(objxhr.response)
            console.log(result)


        }
    }
}
