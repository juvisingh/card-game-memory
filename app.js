window.onload = function() {
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
function checkCards(num) {
    num.addEventListener('click', function() {
        num.classList.toggle('flipped');
        setTimeout(function() {
          num.classList.remove('flipped');
        }, 5000); // 5000 milliseconds = 5 seconds
      });
}
var numCount = 0;
var numClicked = 1;
var firstCard;
var secondCard;
var firstId;
var secondId;
var time = 0;
var signs = ["😊","😂","🤣","😍","😉","😎","😢","😁","🥰","😘","🤩","😮","😴","😜","😕"]

function makeCards() {
    var dupSigns = signs.concat(signs)
    for (var i = 0; i < dupSigns.length; i++) {
        var div = document.getElementById("card-container")
        var card = document.createElement('div');
        card.className= "card"
        card.id = "flip" + [i];
        card.innerHTML = `<div class="card-face card-front" onClick = "getValue('picture${i}')">
        <h1>Front</h1>
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
    }
    else if (numClicked == 2) {
        secondCard = document.getElementById(num).innerHTML;
        numClicked = 1;
        secondId = document.getElementById(num).id
        findPairs()
    }
}
function findPairs() {
    console.log(firstCard)
    console.log(secondCard)
    if (firstCard == secondCard) {
        numCount++;
        document.getElementById("score").innerHTML = "Score: " + numCount;
        // var toChange = document.getElementById(firstId);
        // toChange.classList.toggle('paused');
        var cardElement = document.querySelector('.card.flipped');
        cardElement.classList.add('paused');
        firstId = "";
        secondId = "";
        firstCard = "";
        secondCard = "";
    }
}