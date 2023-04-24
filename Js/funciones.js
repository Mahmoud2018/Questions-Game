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
  playerList[index].score++;
  renderPlayerList();
}

function subtractScore(index) {
  if (playerList[index].score > 0) {
    playerList[index].score--;
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
}

function Allwinnar() {
  showFirstWinnerName()
  showSecondWinnerName()
  showThirdWinnerName()
  // console.log(All)
  winnar1.innerHTML = All[0]
  winnar2.innerHTML = All[2] 
  winnar3.innerHTML = All[4]
  score1.innerHTML = All[1]
  score2.innerHTML = All[3] 
  score3.innerHTML = All[5] 

// ("first winner is: " + firstWinnerName + " with a score of " + highestScore + "!")

  };


/* Darkmode */
 function Darkmode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
  
  };



 function myFunction() {
    let alarm_div = document.getElementById("alarm-icon");
    if (alarm_div.style.display === "none") {
    
    } else {
    alarm_div.style.display = "none";
    }
}