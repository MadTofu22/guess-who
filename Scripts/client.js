console.log('Hello from client.js');
console.log('Here are all the available people:', people);

$(onReady);

function onReady () {

    console.log('Hello from jquery.js');
    
    for (let person of people) {
        $('#images').append(addDiv(person));
    }
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
