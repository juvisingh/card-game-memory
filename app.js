var shuffledArray;
var signs;
window.onload = function() {
  //creates the signs and symbols
    signs = ["😊","😂","🤣","😍","😉","😎","😢","😁","🥰","😘","🤩","😮","😴","😜","😕"]
    //used to shuffle the array randomly by getting a random number each time
    shuffledArray = signs.sort((a, b) => 0.5 - Math.random());  
    //function to make the cards itself
    makeCards()
    //the following are event listners to watch when the card is clicked on
    var card = document.getElementById('flip1');
    checkCards(card)
    var card2 = document.getElementById('flip2');
    checkCards(card2)
    var card3 = document.getElementById('flip3');
    checkCards(card3)
    var card4 = document.getElementById('flip4');
    checkCards(card4)
    var card5 = document.getElementById('flip5');
    checkCards(card5)
    var card6 = document.getElementById('flip6');
    checkCards(card6)
    var card7 = document.getElementById('flip7');
    checkCards(card7)
    var card8 = document.getElementById('flip8');
    checkCards(card8)
    var card9 = document.getElementById('flip9');
    checkCards(card9)
    var card10 = document.getElementById('flip10');
    checkCards(card10)
    var card11 = document.getElementById('flip11');
    checkCards(card11)
    var card12 = document.getElementById('flip12');
    checkCards(card12)
    var card13 = document.getElementById('flip13');
    checkCards(card13)
    var card14 = document.getElementById('flip14');
    checkCards(card14)
    var card15 = document.getElementById('flip0');
    checkCards(card15)
    var card16 = document.getElementById('flip15');
    checkCards(card16)
    var card17 = document.getElementById('flip16');
    checkCards(card17)
    var card18 = document.getElementById('flip17');
    checkCards(card18)
    var card19 = document.getElementById('flip18');
    checkCards(card19)
    var card20 = document.getElementById('flip19');
    checkCards(card20)
    var card21 = document.getElementById('flip20');
    checkCards(card21)
    var card22 = document.getElementById('flip21');
    checkCards(card22)
    var card23 = document.getElementById('flip22');
    checkCards(card23)
    var card24 = document.getElementById('flip23');
    checkCards(card24)
    var card25 = document.getElementById('flip24');
    checkCards(card25)
    var card26 = document.getElementById('flip25');
    checkCards(card26)
    var card27 = document.getElementById('flip26');
    checkCards(card27)
    var card28 = document.getElementById('flip27');
    checkCards(card28)
    var card29 = document.getElementById('flip28');
    checkCards(card29)
    var card30 = document.getElementById('flip29');
    checkCards(card30)
  };
//sets the timer for it to run every second so it can update
var timer = setInterval(getTime,1000)
//sets the game winning solution every second to check
setInterval(checkWinner,1000)
var timeOut
function checkCards(num) {
  //runs the code to flip the card
    flipOrNot(num)
}
function flipOrNot(value) {
  value.addEventListener('click', function() {
    value.classList.toggle('flipped');
    timeOut = setTimeout(function() {
      value.classList.remove('flipped');
    }, 1000); // 3000 milliseconds = 3 seconds
})
}
var numCount = 0;
var numClicked = 1;
var firstCard;
var secondCard;
var firstId;
var secondId;
var pairsFound = 0;
var time = 0;
var signs = ["😊","😂","🤣","😍","😉","😎","😢","😁","🥰","😘","🤩","😮","😴","😜","😕"]

function makeCards() {
  //duplicates the array to make pairs and then later is distrubuted amongst the cards
    var dupSigns = shuffledArray.concat(shuffledArray)
    for (var i = 0; i < dupSigns.length; i++) {
      //finds the div element that contains the grid
        var div = document.getElementById("card-container")
      //creates a new div instead of what was previously found
        var card = document.createElement('div');
        card.className= "card"
        card.id = "flip" + [i];
        card.innerHTML = `<div class="card-face card-front" id='flippp${i}' onClick = "getValue('picture${i}')">
        <h1 id='flipp${i}'><img src="./logo.png" style="width: 50%; height:50%"></h1>
      </div>
      <div class="card-face card-back">
        <h1 id = "picture${i}">${dupSigns[i]}</h1>
      </div>`;
      div.appendChild(card);
    }
}
function getValue(num) {
  //labels each card to check if they are similar.
    if (numClicked == 1) {
      //gets the value of the card which is later compared
        firstCard = document.getElementById(num).innerHTML;
        firstId = document.getElementById(num).id
        console.log(firstCard)
        numClicked++;
        numCount++;
        //updates the amount of moves everytime
        document.getElementById('move').innerHTML = "Moves: " + numCount;
    }
    else if (numClicked == 2) {
      //gets the value of the second card that is clicked
        secondCard = document.getElementById(num).innerHTML;
        numClicked = 1;
        console.log(secondCard)
        secondId = document.getElementById(num).id
        numCount++
        document.getElementById('move').innerHTML = "Moves: " + numCount
        //checks if the two selected cards are the same or not
        findPairs()
    }
}
//to make sure the card stays "flipped" over when they match
function changeSides(){
  firstId = firstId.replace("picture", "flipp")
  secondId = secondId.replace("picture", "flipp")
  document.getElementById(firstId).innerHTML = firstCard
  document.getElementById(secondId).innerHTML = secondCard
  document.getElementById(firstId).style.backgroundColor = "#B6BAC1"
  document.getElementById(secondId).style.backgroundColor = "#B6BAC1"
  firstId = firstId.replace("flipp", "flippp")
  secondId = secondId.replace("flipp", "flippp")
  document.getElementById(firstId).style.backgroundColor = "#B6BAC1"
  document.getElementById(secondId).style.backgroundColor = "#B6BAC1"
  document.getElementById(firstId).style.transform = "none"
  document.getElementById(secondId).style.transform = "none"
  firstId = firstId.replace("flippp", "flip")
  secondId = secondId.replace("flippp", "flip")
  document.getElementById(firstId).style.pointerEvents = "none"
  document.getElementById(secondId).style.pointerEvents = "none"
  firstId = "";
  secondId = "";
  firstCard = "";
  secondCard = "";
  pairsFound++
  console.log(pairsFound)
}
function findPairs() {
  //checks if the cards are the same and then later runs the function to "flip" them
    if (firstCard == secondCard) {
      console.log(firstCard)
      console.log(secondCard)
      changeSides()
     }
    }
var seconds = 0;
var minutes = 0;
//function to keep track of the time
function getTime() {
  seconds++;
  //if the time is 60 seconds, it converts it into a minute
  if (seconds == 60) {
      seconds = 0;
      minutes++;
  }
  //has a little if else statement by checking if the seconds is double digits or not, just for formatting.
  var finalTime = minutes + ':' + (seconds < 10 ? '0' : '')  + seconds;
  document.getElementById('countUp').innerHTML = finalTime;
}
//checks if there is a winner
function checkWinner() {
  if(pairsFound >= 15) {
    document.getElementById('title').innerHTML = "You Won! Congrats!"
    clearInterval(timer)
    document.getElementById('score').innerHTML = "Score: " + (minutes < 1 ?  198 : (minutes * 138)) + seconds
  }
}
