/* Players list */
 
var playerList = [];
var winnar1 = document.getElementById("winnar1");
var winnar2 = document.getElementById("winnar2");
var winnar3 = document.getElementById("winnar3");

var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var score3 = document.getElementById("score3");

function addPlayer() {
  var input = document.getElementById("new-player");
  var name = input.value;
  var player = {
    name: name,
    score: 0
  };
  playerList.push(player);
  renderPlayerList();
  input.value = "";
}

function addScore(index) {
  playerList[index].score+= 150 ;
  renderPlayerList();
}

function subtractScore(index) {
  if (playerList[index].score > 0) {
    playerList[index].score-= 150;
    renderPlayerList();
  }
}

function removePlayer(index) {
  playerList.splice(index, 1);
  renderPlayerList();
}

let All = []
function showFirstWinnerName() {
  var highestScore = 0;
  var firstWinnerName = "";
  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i].score > highestScore) {
      highestScore = playerList[i].score;
      firstWinnerName = playerList[i].name;
    }
  }
    All.push(firstWinnerName )
    All.push(highestScore )

}

function showSecondWinnerName() {
  var highestScore = 0;
  var secondWinnerName = "";
  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i].score > highestScore && playerList[i].score < Math.max(...playerList.map(p => p.score))) {
      highestScore = playerList[i].score;
      secondWinnerName = playerList[i].name;
    }
  }
    All.push(secondWinnerName)
    All.push(highestScore)

}

function showThirdWinnerName() {
  var highestScore = 0;
  var thirdWinnerName = "";
  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i].score > highestScore && playerList[i].score < Math.max(...playerList.filter(p => p.score < Math.max(...playerList.map(p => p.score))).map(p => p.score))) {
      highestScore = playerList[i].score;
      thirdWinnerName = playerList[i].name;
    }
  }
  All.push(thirdWinnerName )
  All.push( highestScore)

}

function renderPlayerList() {
  var list = document.getElementById("player-list");
  list.innerHTML = "";
  for (var i = 0; i < playerList.length; i++) {
    var player = playerList[i];
    var item = document.createElement("li");
    item.innerHTML = player.name + " - Score: " + player.score + 
                     " <button onclick='addScore(" + i + ")'>+</button>" + 
                     " <button style='background-color: black' onclick='subtractScore(" + i + ")'>-</button>" + 
                     " <button style='background-color: #9c2804' onclick='removePlayer(" + i + ")'>x</button>" 
    list.appendChild(item);
  }
  let bell = new Audio("./Sounds/add.mp3");
      bell.play();
}

function Allwinnar() {
  showFirstWinnerName();
  showSecondWinnerName();
  showThirdWinnerName();
  // console.log(All)
  
  winnar1.innerHTML = All[0];
  score1.innerHTML ='Score <br>' + All[1]+ ' xp';

  winnar2.innerHTML =  All[2];
  score2.innerHTML = 'Score <br>'+ All[3] + ' xp';

  winnar3.innerHTML = All[4] ;
  score3.innerHTML = 'Score <br>' + All[5] + ' xp'; 

// ("first winner is: " + firstWinnerName + " with a score of " + highestScore + "!")
  let WIN = new Audio("./Sounds/success.mp3");
    WIN.play();
  };


/* Darkmode */
 function Darkmode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
  
  };


/* Show Alarm */
 function myFunction() {
    let alarm_div = document.getElementById("alarm-icon");
    if (alarm_div.style.display === "none") {
    
    } else {
    alarm_div.style.display = "none";
    }
}

/* Random characters Winner */
const imageArray = [
  "./pic/1.png",
  "./pic/2.png",
  "./pic/3.png",
  "./pic/4.png",
  "./pic/5.png",
  "./pic/6.png",
  "./pic/7.png",
  "./pic/8.png",
  "./pic/9.png",
  "./pic/10.png",
  "./pic/11.png",
  "./pic/12.png",
  "./pic/13.png",
  "./pic/14.png",
  "./pic/15.png",
  "./pic/16.png",
  "./pic/17.png",
  "./pic/18.png",
  "./pic/19.png",
  "./pic/20.png",
  "./pic/21.png",
  "./pic/22.png",
  "./pic/23.png",
  "./pic/24.png",
  "./pic/25.png",
  "./pic/26.png",
  "./pic/27.png",
  "./pic/28.png",
  "./pic/29.png",
  "./pic/30.png",
  "./pic/31.png",
  "./pic/32.png",
  "./pic/33.png",
  "./pic/34.png",
  "./pic/35.png",
  "./pic/36.png",
  "./pic/37.png",
  "./pic/38.png",
  
];

const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const button = document.getElementById("Chack");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * 35); 
	image1.setAttribute("src", array[randomNum + 1]);
	image2.setAttribute("src", array[randomNum + 2]);
	image3.setAttribute("src", array[randomNum ] );
  // console.log(image1)
  // console.log(image2)
  // console.log(image3)

}

