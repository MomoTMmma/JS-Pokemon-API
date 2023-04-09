
/*
JS and the DOM- Document Object Model
There's a bunch of options for JS to interact with the html dom.
We can use JavaScript to select, modify, add, hide, remove elements from our html page.
because we're through JS none of these things cause a page refresh.
*/

// selecting an element from html
console.log(document)

// generally 2 ways to select elements- the preferred way (getElement/s)
console.log(document.getElementsByTagName('h1')[0].id, typeof document.getElementsByTagName('h1')[0].id)
console.log(document.getElementById('text').innerHTML)

// the other way- querySelector we can use css selector syntax to grab an element
console.log(document.querySelector('#text').innerHTML)

// modifying text in the doc
setTimeout( () => {document.getElementById('text').innerHTML = 'JAVASCRIPT CHANGED THIS!!!'}, 4000);

// eventlisteners and using JS functions

// an eventListener is a JS funciton that looks for specifc events on an html page- 
// when we detect that event happening we'll do something.

// let's add an EL for our button
// create a function to run when it's clicked

let changeColor = () => {
    //first, select the element to change
    let header = document.getElementById('text');

    !header.className ? header.className = "color-change1" :
    header.className === "color-change1" ? header.className = "color-change2" :
    header.className = '';
    console.log(header.className)
}
// select the button
let color_button = document.getElementById('color-button');
console.log(color_button);
// add the EL
color_button.addEventListener('click', changeColor);


// adding a new button. . . with JS
// we can use JS to add elements to the page
// we're gonna use the simple method- append
// document.<element>.append()
// adds it to the END of the specified element

let new_button = document.createElement('button');
new_button.innerHTML = "I'm ALIVE!!!";
document.body.append(new_button);

// make a function to add text
let addText = () => {
    let new_text = document.createElement('h3');
    new_text.innerHTML = "Clutch can refer to many different objects or ideas, but mostly this cohort";
    new_text.className = 'color-change2';
    document.body.append(new_text);
}
new_button.addEventListener('mouseover', addText);

// let's look at selecting multiple elements

// any selector that selects multiple elements (with an s)
// gives you the htmlcollection array- check console to see how we can work with it
console.log(document.getElementsByTagName('button'))

// let's select and add EL
// we'll listen for the submit

let formSubmit = (event) => {
    // a page refresh is NOT what we want here so. . . 
    event.preventDefault();
    console.log(event);
    let fname = event.target[0].value;
    let lname = event.target[1].value
    console.log('form data:', fname, lname)

    form.reset();
    let new_html = document.createElement('h3');
    new_html.innerHTML = fname + " " + lname;
    new_html.className = 'color-change1';
    form.after(new_html);
}

let form = document.getElementById('nameForm');
console.log(form);
form.addEventListener('submit', formSubmit)





