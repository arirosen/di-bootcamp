const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

function addRobotsToPage() {
    robots.forEach(element => {
        let name = element["name"];
        let email = element["email"];
        let image = element["image"];
        let id = element["id"];

        appendRobotOnPage(name, email, image, id)

    })
}

let section = document.getElementById("container");

function appendRobotOnPage(name, email, imagee, id) {
    
    let div = document.createElement("div");
    div.classList.add("card");
    div.setAttribute("id", id)
    let image = document.createElement("img");
    image.classList.add("imgRobot");
    let paragraphEmail = document.createElement("p");
    let paragraphName = document.createElement("p");

    
    image.src = imagee;
    let textEmail = document.createTextNode(email);
    paragraphEmail.appendChild(textEmail);
    let textName = document.createTextNode(name);
    paragraphName.appendChild(textName);

    div.appendChild(image);
    div.appendChild(paragraphEmail);
    div.appendChild(paragraphName); 
    section.appendChild(div)
}

addRobotsToPage()


let searchBar = document.getElementById("search");
searchBar.addEventListener("input", letters);

function letters() {
    let valueInput = searchBar.value;

    let SearchValue = robots.filter(element =>
        element["name"].toLowerCase().includes(valueInput.toLowerCase())
    )

    robots.forEach(element => {
        let erase = document.getElementById(element["id"]);
        if (!SearchValue.includes(element)) {
            let erase = document.getElementById(element["id"]);
            erase.style.display = "none";
        } else {
            erase.style.display = "block";
        }
    })
}