import {Q1} from './component.js'; 


let points1 = 0; // initialize points1 variable to 0
let points2 = 0; // initialize points2 variable to 0

// add event listeners to countBtn1 and countBtn2
document.getElementById("countBtn1").addEventListener("click", function() {
points1++; // increment points1 by 1
document.getElementById("pointsDisplay1").innerHTML = points1; // display the updated points1 value
});

document.getElementById("countBtn2").addEventListener("click", function() {
points2++; // increment points2 by 1
document.getElementById("pointsDisplay2").innerHTML = points2; // display the updated points2 value
});

document.getElementById("countBtn3").addEventListener("click", function() {
	// reset points
points1 = 0; // initialize points1 variable to 0
points2 = 0; // initialize points2 variable to 0
document.getElementById("pointsDisplay1").innerHTML = points2; // display the updated points2 value
document.getElementById("pointsDisplay2").innerHTML = points2; // display the updated points2 value
});

const subtractButton = document.getElementById("subtract-button1");
const subtractButton2 = document.getElementById("subtract-button2");

const addButton = document.getElementById("add-button1");
const addButton2 = document.getElementById("add-button2");

const valueSpan1 = document.getElementById("pointsDisplay1");
const valueSpan2 = document.getElementById("pointsDisplay2");



// subtractButton
subtractButton.addEventListener("click", () => {
points1 -= 1;
valueSpan1.textContent = points1;
});

// addButton
addButton.addEventListener("click", () => {
points1 += 1;
valueSpan1.textContent = points1;
});


subtractButton2.addEventListener("click", () => {
points2 -= 1;
valueSpan2.textContent = points2;
});

addButton2.addEventListener("click", () => {
points2 += 1;
valueSpan2.textContent = points2;
});




//       let questions 
// // selectet questions grup 1 + 2
// const Qgrup1 = document.getElementById("Grup1");
// const Qgrup2 = document.getElementById("Grup2");

// // function for choos questions grup 1 
// Qgrup1.addEventListener("click", () => {
// 	questions = Q1 ;
// });

// // function for choos questions grup 1 
// Qgrup2.addEventListener("click", () => {
// 	questions = Q2 ;
// });



let Qgrup = [Q1];
	
var x = document.getElementById("myDIV");

let questionIndex
let questions

const buttonGroup1 = document.getElementById("button-group1");

// function button choes group of questions 
buttonGroup1.addEventListener("click", (event) => {

  if (event.target.nodeName === "BUTTON") {
    questionIndex = event.target.id.split("-")[1] - 1;
    questions = Qgrup[0][questionIndex];
 
  }
  });



// select element of questions
const buttonGroup2 = document.getElementById("button-group2");
const questionContainer = document.getElementById("question-container");

// select element of answers 
const Answer = document.getElementById("Answer");
const AnswerContainer = document.getElementById("div-Answer");

// select element of numbers
const NumberContainer = document.getElementById("question-number");


// function button show number of questions 
buttonGroup2.addEventListener("click", (event) => {

if (event.target.nodeName === "BUTTON") {
	questionIndex = event.target.id.split("-")[1] - 1;
	NumberContainer.textContent = questions[questionIndex].Number;
}
});

// function button show questions  
buttonGroup2.addEventListener("click", (event) => {

if (event.target.nodeName === "BUTTON") {
questionIndex = event.target.id.split("-")[1] - 1;
questionContainer.textContent = questions[questionIndex].question +" 🤔!؟" ;
AnswerContainer.textContent = "";

}
});

// function button show Answers of questions 
Answer.addEventListener("click", (event) => {
if (event.target.id === "Answer") {
AnswerContainer.textContent = questions[questionIndex].answer +"  ✔";
x.style.display = "none";
}

});


// Checked function buttons1
let Buttons = document.querySelectorAll(".col1 button");

// loop through the buttons using for..of 
for (let button of Buttons) {
// listen for a click event 
button.addEventListener('click', (e) => {
	// et = event target
	const et = e.target;
	// slect active class
	const active = document.querySelector(".active");
	// check for the button that has active class and remove it
	if (active) {
	active.classList.remove("active");
	}
	// add active class to the clicked element 
	et.classList.add("active");
});

}


// Checked function buttons2
let Checked = document.getElementById("button-group2");

Checked.addEventListener('click', (e) => {
let isButton = e.target.nodeName === 'BUTTON'; 
if (!isButton) {
return;
}
e.target.classList.replace("btn", "btn-Checked");
});



// Timer function 
var timer = document.getElementById("timer");
var time = 90; // 3 minutes in seconds

// Update the timer display every second
var intervalId = setInterval(function() {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  time--;
  
  if (time < 0) {
    clearInterval(intervalId);
    timer.innerHTML = "0:00";
  }
}, 1000);

// Reset the timer when the button is clicked
buttonGroup2.addEventListener("click", function() {
  clearInterval(intervalId);
  time = 90;
  timer.innerHTML = "2:00";

  intervalId = setInterval(function() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    time--;

    
    if (time < 0) {
      clearInterval(intervalId);
      timer.innerHTML = "0:00";
      var bell = new Audio("./bell.mp3");
      bell.play();
      x.style.display = "block";
    }
  }, 1000);
});



// function myFunction() {
// 	document.getElementsByClassName("btn btn-dark");

//   gg = document.getElementsByClassName("btn btn-dark");
  
//   gg.target.classList.replace("btn btn-dark", "btn btn-danger");

//   }



//   /* Darkmode */
//   function Darkmode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//     };
