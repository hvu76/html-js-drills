// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Ha Vu';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');
  let favoriteThings = document.querySelector('#favthings');
  console.log(favoriteThings);
  /*favoriteThings.innerHTML = `
  <li>Coding</li>
  <li>Sleeping</li>
  <li>Watching Netflix</li>
  <li>Video Games</li>
  <li>Swimming</li>`;*/ 

  let favThingsList = ['Coding','Sleeping','Watching Netflix','Video Games','Swimming'];
  
  /*for(let thing of favThingsList){
    console.log(thing);
    let li = document.createElement('li');
    li.innerText = thing;
    favoriteThings.appendChild(li); 
  }*/

  let li1 = document.createElement('li');
  li1.innerText = 'Eating';
  favoriteThings.appendChild(li1);

  let li2 = document.createElement('li');
  li2.innerText = 'Shopping';
  favoriteThings.appendChild(li2);

  let li3 = document.createElement('li');
  li3.innerHTML = '<strong>Running</strong>';
  favoriteThings.appendChild(li3);

  let li4 = document.createElement('li');
  li4.textContent = 'Smiling';
  favoriteThings.appendChild(li4);

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
}

function replaceImage() {
  console.log('Called replaceImage()');
  let image = document.querySelector("#picture");
  console.log(image);
  image.setAttribute("src","pusheen.png");

  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');
  let codeStatus = document.querySelector("#codestatus");
  /*let newImg  = document.createElement('img');
  newImg.setAttribute('src','https://media.giphy.com/media/spHCUbRqG4cjS/giphy.gif');
  codeStatus.appendChild(newImg);*/
  codeStatus.innerHTML = `<img src="https://media.giphy.com/media/spHCUbRqG4cjS/giphy.gif">`;

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted

informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.
  console.log('Form submitted');

  let fnameByIndex = informationForm[0].value;
  let lnameByIndex = informationForm[1].value;
  let carsByIndex = informationForm[2].value;
  document.querySelector('#firstname').innerHTML = fnameByIndex;
  document.querySelector('#lastname').innerHTML = lnameByIndex;
  document.querySelector('#chosencar').innerHTML = carsByIndex;

  if (document.getElementById('icecreamyes').checked) {
    icecreamValue = document.getElementById('icecreamyes').value;
    document.querySelector('#icecreamstatus').innerHTML = icecreamValue;
  }
  else{
    icecreamValue = document.getElementById('icecreamno').value;
    document.querySelector('#icecreamstatus').innerHTML = icecreamValue;
  }

  humancheckValue = document.getElementById('humancheck').checked;
  codercheckValue = document.getElementById('codercheck').checked;

  document.querySelector('#checks').innerHTML = `
  <div>This person is a human: ${humancheckValue}</div>
  <div>This person is a coder: ${codercheckValue}</div>
  `;
  /*let icecream = document.getElementsByName('icecream')[1].value;
  console.log(icecream);*/

  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Change this text if you want!');
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  let colorText = document.querySelector('#colorText');
  colorText.style.color = "blue";
  colorText.style.backgroundColor = "red";
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener('keydown', function(event) {
  console.log(event.code);
  if(event.code == 'KeyR'){
    document.querySelector('#colorText').style.color = 'red';
  }
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here

let toDoListForm = document.querySelector(".form");

toDoListForm.addEventListener('submit', function(event){
  event.preventDefault();
  let toDoItem = document.querySelector('#todo').value;
  let ul = document.querySelector('#todos');
  let li = document.createElement('li');
  li.innerText = toDoItem;
  ul.appendChild(li);
});

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Your code goes here

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
