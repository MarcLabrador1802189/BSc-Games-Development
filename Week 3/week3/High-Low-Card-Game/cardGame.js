var cardHTML = document.getElementById("card");
var scoreHTML = document.getElementById("score");
var resultHTML = document.getElementById("result");

var possibleCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var previousCard = 0;
var randomNumber = 0;

var numQuestionsAsked = 0;
var numCorrect = 0;


function resetCardGame(){
    previousCard = generateCard();
    cardHTML.innerText = previousCard; 

    resultHTML.innerText = "You were: ";
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}

function submitGuess(highLowGuess){
    var newCard = generateCard();
    var correctGuess = guessCard(highLowGuess, newCard);
    updateScores(correctGuess);
    modifyCardGameHTML(correctGuess);
    setPreviousCard(newCard);
}

function generateCard(){    
    randomNumber = 0;
    var randomCard = 0;
    
    do{
        randomNumber = Math.floor(Math.random() * possibleCards.length);
        randomCard = possibleCards[randomNumber];
    } while (previousCard === randomCard);
    
    return randomCard
}

/*Based on the user's input, and the new card, check whether the previous card is 
* higher or lower and whether the player was correct. Then, return the answer as a boolean*/
function guessCard(highLowGuess, newCard) {
    var correctGuess = false;
    if (highLowGuess === "Higher") {
        if (newCard > previousCard) {
            correctGuess = true;
        } else {
            correctGuess = false;
        }
    }
    else {
        if (newCard < previousCard) {
            correctGuess = true;
        } else {
            correctGuess = false;
        }
    }
    return correctGuess;
}

/*Update the number of correct answers if the player guessed correctly, then update the number of questions asked*/
function updateScores(correctGuess) {
    if (correctGuess) {
        numCorrect++;
    }

    numQuestionsAsked++; 
}

function modifyCardGameHTML(correctGuess){        
    //If the player guessed correctly, let them know by modifying the resultHTML.
    if (correctGuess) {
        resultHTML.innerText = "You've got: 1 Point!";
    } else {
        resultHTML.innerText = "You've got: No Points!" + correctGuess;
    }
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}

function setPreviousCard(newCard){
    previousCard = newCard;
    cardHTML.innerText = previousCard;
}

resetCardGame();