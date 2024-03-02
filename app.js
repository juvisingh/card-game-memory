var signhs;
var shuffledArray;
window.onload = function() {
    signs = ["😊","😂","🤣","😍","😉","😎","😢","😁","🥰","😘","🤩","😮","😴","😜","😕"]
    shuffledArray = signs.sort((a, b) => 0.5 - Math.random());  
    makeCards()
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
setInterval(getTime,1000)
var wannaFlip = false;
var timeOut
function checkCards(num) {
    checkWinner()
    flipOrNot(num)
}
function flipOrNot(value) {
  value.addEventListener('click', function() {
    value.classList.toggle('flipped');
    timeOut = setTimeout(function() {
      value.classList.remove('flipped');
    }, 5000); // 5000 milliseconds = 5 seconds
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
    var dupSigns = shuffledArray.concat(shuffledArray)
    for (var i = 0; i < dupSigns.length; i++) {
        var div = document.getElementById("card-container")
        var card = document.createElement('div');
        card.className= "card"
        card.id = "flip" + [i];
        card.innerHTML = `<div class="card-face card-front" onClick = "getValue('picture${i}')">
        <h1 id='flipp${i}'><img src="./logo.png" style="width: 50%; height:50%"></h1>
      </div>
      <div class="card-face card-back">
        <h1 id = "picture${i}">${dupSigns[i]}</h1>
      </div>`;
      div.appendChild(card);
    }
}
function getValue(num) {
    if (numClicked == 1) {
        firstCard = document.getElementById(num).innerHTML;
        firstId = document.getElementById(num).id
        numClicked++;
        numCount++;
        document.getElementById('move').innerHTML = "Moves: " + numCount;
    }
    else if (numClicked == 2) {
        secondCard = document.getElementById(num).innerHTML;
        numClicked = 1;
        secondId = document.getElementById(num).id
        numCount++
        document.getElementById('move').innerHTML = "Moves: " + numCount
        findPairs()
    }
}
function findPairs() {
    console.log(firstCard)
    console.log(secondCard)
    if (firstCard == secondCard) {
        // var toChange = document.getElementById(firstId);
        // toChange.classList.toggle('paused');
        firstId = firstId.replace("picture", "flipp")
        // console.log(firstId)
        secondId = secondId.replace("picture", "flipp")
        // var cardElement2 = document.getElementById(secondId)
        // console.log(sec)
        // cardElement2.classList.remove = 'card-back';
        // cardElement2.classList.add = "card-front";
        document.getElementById(firstId).innerHTML = firstCard
        document.getElementById(secondId).innerHTML = secondCard
        document.getElementById(firstId).style.backgroundColor = "#B6BAC1"
        document.getElementById(secondId).style.backgroundColor = "#B6BAC1"
        firstId = firstId.replace("picture", "flip")
        secondId = secondId.replace("picture", "flip")
        document.getElementById(firstId).style.backgroundColor = "#B6BAC1"
        document.getElementById(secondId).style.backgroundColor = "#B6BAC1"
        firstId = "";
        secondId = "";
        firstCard = "";
        secondCard = "";
        pairsFound++
        console.log(pairsFound)
    }
}
var seconds = 0;
var minutes = 0;
function getTime() {
  seconds++;
  if (seconds == 60) {
      seconds = 0;
      minutes++;
  }
  var finalTime = minutes + ':' + (seconds < 10 ? '0' : '')  + seconds;
  document.getElementById('countUp').innerHTML = finalTime;
}
function checkWinner() {
  if(pairsFound == 15) {
    document.getElementById('title').innerHTML = "You Won! Congrats!"
  }
}

// function reset() {
//   seconds = 0;
//   minutes = 0;
//   numCount = 0;
//   numClicked = 1;
//   firstCard = "";
//   secondCard = "";
//   firstId = "";
//   secondId = "";
//   pairsFound = 0;
//   time = 0;
//   document.getElementById('title').innerHTML = "Card Memory Game"
//   document.getElementById("score").innerHTML = "Score: In Progress..."
//   document.getElementById("move").innerHTML = "Moves: 0"
//   document.getElementById("countUp").innerHTML = "0:00"
//   // for (var i = 0; i < 30; i ++) {
//   //   var numToChange = document.getElementById("flip${i}")
//   //   numToChange.classList.toggle('flipped');
//   // }
// }