import {Q1} from './component.js';



let points1 = 0; // initialize points1 letiable to 0
let points2 = 0; // initialize points2 letiable to 0

// add event listeners to countBtn1 and countBtn2
document.getElementById("countBtn1").addEventListener("click", function() {
points1++; // increment points1 by 1
document.getElementById("pointsDisplay1").innerHTML = points1; // display the updated points1 value
let bell = new Audio("./Points.mp3");
bell.play();
});

document.getElementById("countBtn2").addEventListener("click", function() {
points2++; // increment points2 by 1
document.getElementById("pointsDisplay2").innerHTML = points2; // display the updated points2 value
let bell = new Audio("./Points.mp3");
bell.play();
});

document.getElementById("countBtn3").addEventListener("click", function() {
	// reset points
points1 = 0; // initialize points1 letiable to 0
points2 = 0; // initialize points2 letiable to 0
document.getElementById("pointsDisplay1").innerHTML = points2; // display the updated points2 value
document.getElementById("pointsDisplay2").innerHTML = points2; // display the updated points2 value
});

let subtractButton = document.getElementById("subtract-button1");
let subtractButton2 = document.getElementById("subtract-button2");

let addButton = document.getElementById("add-button1");
let addButton2 = document.getElementById("add-button2");

let valueSpan1 = document.getElementById("pointsDisplay1");
let valueSpan2 = document.getElementById("pointsDisplay2");



// subtractButton
subtractButton.addEventListener("click", () => {
points1 -= 1;
valueSpan1.textContent = points1;
let bell = new Audio("./minus.wav");
bell.play();
});

// addButton
addButton.addEventListener("click", () => {
points1 += 1;
valueSpan1.textContent = points1;
let bell = new Audio("./Points.mp3");
bell.play();
});


subtractButton2.addEventListener("click", () => {
points2 -= 1;
valueSpan2.textContent = points2;
let bell = new Audio("./minus.wav");
bell.play();
});

addButton2.addEventListener("click", () => {
points2 += 1;
valueSpan2.textContent = points2;
let bell = new Audio("./Points.mp3");
bell.play();
});




//       let questions 
// // selectet questions grup 1 + 2
// let Qgrup1 = document.getElementById("Grup1");
// let Qgrup2 = document.getElementById("Grup2");

// // function for choos questions grup 1 
// Qgrup1.addEventListener("click", () => {
// 	questions = Q1 ;
// });

// // function for choos questions grup 1 
// Qgrup2.addEventListener("click", () => {
// 	questions = Q2 ;
// });


let passwordInput = document.getElementById("password");
let Chackit = document.getElementById("Chack");


let Qgrup0 = [];
let Qgrup = [Q1];


let Data = Qgrup0


Chackit.addEventListener("click", () => {
  let ChackMS = document.getElementById('ChackMS');
if (passwordInput.value === '1') {
    Data = Qgrup
    ChackMS.style.color = "green";
    ChackMS.innerHTML = 'كلمة السر صحيحة' + "✅";
} else {
  ChackMS.style.color = "red";
  ChackMS.innerHTML = '  حاول مرة اخرى ❌';
}

});



let alarm_div = document.getElementById("alarm-icon");

let questionIndex
let questions

let buttonGroup1 = document.getElementById("button-group1");

// function button choes group of questions 
buttonGroup1.addEventListener("click", (event) => {

  if (event.target.nodeName === "BUTTON") {
    questionIndex = event.target.id.split("-")[1] - 1;
    questions = Data[0][questionIndex];
  } 

  });



// select element of questions
let buttonGroup2 = document.getElementById("button-group2");
let questionContainer = document.getElementById("question-container");

// select element of answers 
let Answer = document.getElementById("Answer");
let AnswerContainer = document.getElementById("div-Answer");

// select element of numbers
let NumberContainer = document.getElementById("question-number");


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
alarm_div.style.display = "none";
time = 60 ;
}

});


// Checked function buttons1
let Buttons = document.querySelectorAll(".col1 button");

// loop through the buttons using for..of 
for (let button of Buttons) {
// listen for a click event 
button.addEventListener('click', (e) => {
	// et = event target
	let et = e.target;
	// slect active class
	let active = document.querySelector(".active");
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
let timer = document.getElementById("timer");
let time = 60; // 3 minutes in seconds

// Update the timer display every second
let intervalId = setInterval(function() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
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
  time = 60;
  timer.innerHTML = "1:00";

  intervalId = setInterval(function() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timer.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    time--;

    
    if (time < 0) {
      clearInterval(intervalId);
      timer.innerHTML = "0:00";
      let bell = new Audio("./bell.mp3");
      bell.play();
      alarm_div.style.display = "block";
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
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//     };



 /* Players list */
 
let nameInput = document.getElementById('nameInput');
let addBtn = document.getElementById('addBtn');
let delet = document.getElementById('delet');
let nameList = document.getElementById('nameList');
let names = [ ];


 
function renderNames() {
  nameList.innerHTML = '';
  names.forEach((name, index) => {
    let li = document.createElement('li');
    li.style.fontSize='25px';
    li.innerText = name.name ;
    

  
    let addBtn = document.createElement('button');
    addBtn.innerText = '+';
    addBtn.style.padding =' 5px 8px';
    addBtn.addEventListener('click', () => {
      names[index].points++;
      renderNames();
    });
  

    let subtractBtn = document.createElement('button');
    subtractBtn.style.background = 'red';
    subtractBtn.style.padding =' 5px 10px';
    subtractBtn.innerText = '-';
    subtractBtn.addEventListener('click', () => {
      if (names[index].points > 0) {
        names[index].points--;
        renderNames();
      }
    });

    
    let points = document.createElement('span');
    points.style.color='#9c2804';
    points.style.fontSize='40px';
    points.innerText = `   = ${name.points}`;
    // points.innerText = name.points;
    li.appendChild(points);
    li.appendChild(addBtn);
    li.appendChild(subtractBtn);
    nameList.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  if (nameInput.value) {
    names.push({name: nameInput.value, points: 0});
    renderNames();
    nameInput.value = '';
  }

});



delet.addEventListener('click', () => {

  let inputText = document.getElementById("nameInput").value;
  let index = names.findIndex(item => item.name === inputText);
  if (index !== -1) {
    names.splice(index, 1);
    while (nameList.firstChild) {
      nameList.removeChild(nameList.firstChild);
    }
    renderNames();
  }

});

