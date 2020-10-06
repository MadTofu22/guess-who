console.log('Hello from client.js');
console.log('Here are all the available people:', people);

$(onReady);

let currentSelection = null;

function onReady () {

    console.log('Hello from jquery.js');
    
    for (let person of people) {
        $('#images').append(addDiv(person));
    }
    promptSelection();
    $('main').on('click', 'div', checkSelection);
}

//append div elements for each profile in data.js, with the image from the profile page, to the DOM
function addDiv (person) {

    console.log('Hello from addDivs');
    
    //itterate through the people object array in data.js and create a div html string with an img tag, then append those strings to the DOM

    console.log('person:', person);
    
    let src = `src="https://github.com/${person.githubUsername}.png?size=250"`;
    let alt = `alt="Profile picture of ${person.name}"`;
    let imgTag = `<img ${src} ${alt}/>`;

    console.log(imgTag);
    

    return `<div>${imgTag}</div>`;
}

//get a random person from the data array and add the prompt to the screen. Store the person in global variable to check against on click
function promptSelection () {

    console.log('hello from prompt selection');

    let randomSelection = randomNumber(0, people.length);
    currentSelection = people[randomSelection].name;
    $('main').prepend(`<h2>Click on: ${currentSelection}</h2>`);
}

//creates a random integer for selecting an array element
function randomNumber (min, max) {

    return Math.floor(Math.random() * (1 + max - min) + min);
}

function checkSelection () {
    
    console.log('hello from check selection');
    
}