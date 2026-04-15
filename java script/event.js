//////////////Event in JavaScript//////////////////////

// An event is an action that occurs in the system,
//  such as a user clicking a button, submitting a form, or hovering over an element.
//  JavaScript allows you to respond to these events by attaching event listeners to HTML elements.
//  When an event occurs, the corresponding 
// event listener is triggered, and you can execute a function to handle the event.


// Example: Handling a Button Click Event

/*const btn = document.querySelector('#btn');

btn.onclick =() => {
console.log("btn was clicked"); 
let a = 10;
a++;
console.log(a);
}*/
////////////////////////////////////////////////////////////////////////////////

/*let box =document.querySelector('.content');

box.onmouseover = () => {
    console.log("You are inside the box");
}
*/

////////////////This is a Event Object//////////////////////

// When an event occurs, an event object is created and passed to the event listener function.
// This object contains information about the event, such as the type of event, 
// the target element, 
// and other relevant details. You can access this information to
//  perform specific actions based on the event.

//////////////////////////////////////////////////////////////////////////////

/*const btn = document.querySelector('#btn');

btn.onclick =(evt) => {
console.log(evt); // This will log the event object to the console
console.log(evt.type); // This will log the type of event (e.g., "click")
console.log(evt.clientX, evt.clientY); // This will log the X and Y coordinates of the mouse click
console.log(evt.target); // This will log the target element that triggered the event
}

let box =document.querySelector('.content');

box.onmouseover =(evt) => {
    console.log(evt); // This will log the event object to the console
    console.log(evt.type); // This will log the type of event (e.g., "mouseover")
    console.log(evt.clientX, evt.clientY); // This will log the X and Y coordinates of the mouse move
console.log(evt.target); // This will log the target element that triggered the event
}*/


///////////////////////////////////////////////////////////////////////////




////////////This is a Event Listener//////////////////////

// An event listener is a function that waits for a specific event to occur on an element and
//  then executes a block of code in response to that event. 
// Event listeners are typically attached to HTML elements using JavaScript, 
// allowing you to create interactive web pages.



/*let btn = document.querySelector("#btn");////This also used to connect multiple events on one element.

// And also used find out the type of event and target element.


btn.addEventListener("click", (evt) => {
    console.log("Button was clicked using addEventListener one time");
   // console.log(evt); // This will log the event object to the console
   // console.log(evt.type); // This will log the type of event (e.g., "click")
   // console.log(evt.clientX, evt.clientY); // This will log the X and Y coordinates of the mouse click
  //  console.log(evt.target); // This will log the target element that triggered the event   
});

btn.addEventListener("click", () => {
    console.log("Button was clicked using addEventListener two time ");
});


btn.addEventListener("click", () => {
    console.log("Button was clicked using addEventListener three time ");
});
//////////How to remove an event listener?////////////////////////////This is used to remove the event listener from the element.
 const removeListener = () => {
    console.log("Button was clicked using addEventListener four time ");
}
btn.removeEventListener("click", (removeListener)); */


///////////////////////////////////////////////////////////////////////////////


///////////////////let pratice question//////////////////////


/*let btn = document.querySelector('#btn');

let body = document.querySelector("body");

let currMode = "light";

btn.addEventListener("click", () => {
    if (currMode === "light") {/////This is used to current mode is light then change to dark and if current mode is dark then change to light.
        currMode = "dark";///his is changing the current mode to dark.
        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log(currMode);
    }
});*/



///////////////////////////////////////////////////////////////


