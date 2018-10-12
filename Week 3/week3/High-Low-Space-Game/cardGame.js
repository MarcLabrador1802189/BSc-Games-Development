var cardHTML = document.getElementById("card");
var scoreHTML = document.getElementById("score");
var resultHTML = document.getElementById("result");
var reqToPassHTML = document.getElementById("reqToPass");
var hiLoGameHTML = document.getElementById("hiLoGame");
var endCardGameHTML = document.getElementById("endCardGameMessage");
var winOrLoseHTML = document.getElementById("winOrLose");


var possibleCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var previousCard = 0;
var randomNumber = 0;

var numQuestionsAsked = 0;
var numCorrect = 0;
var totalQuestionsRequired = 5;
var correctRequired = 3;
var wonGame = false;


function resetCardGame(){
    hiLoGameHTML.style.display = "";
    endCardGameHTML.style.display = "none";    
    
    previousCard = generateCard();
    cardHTML.innerText = previousCard;
    numQuestionsAsked = 0;
    numCorrect = 0;

    resultHTML.innerText = "You were: ";
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
    reqToPassHTML.innerText = "You need at least " + correctRequired + "/" + totalQuestionsRequired + " correct to pass.";
}

function submitGuess(highLowGuess){
    var newCard = generateCard();
    var correctGuess = guessCard(highLowGuess, newCard);
    updateScores(correctGuess);
    modifyCardGameHTML(correctGuess);
    setPreviousCard(newCard);
    
    if(numCorrect >= correctRequired || numQuestionsAsked === totalQuestionsRequired) { //If the player has won or lost                
        if(numCorrect >= correctRequired) {
            wonGame = true;
            winOrLoseHTML.innerText = "You've won!";            
        }
        else {
            wonGame = false;
            winOrLoseHTML.innerText = "You've lost!";
        }                
        
        hiLoGameHTML.style.display = "none";
        endCardGameHTML.style.display = "";        
    }
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

function guessCard(highLowGuess, newCard){
    var correctGuess;
    
    if(highLowGuess === "Higher"){ 
        if(oxygen === 0){
            newCard--;
        }
        
        if(newCard > previousCard){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else if(highLowGuess === "Lower"){
        if(oxygen === 0){
            newCard++;
        }
        
        if(newCard < previousCard){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else {
        console.log("No guess provided");
        correctGuess = false;
    }
    
    return correctGuess;
}

function updateScores(correctGuess){
    if(correctGuess){
        numCorrect++;        
    }
    
    numQuestionsAsked++;
}

function modifyCardGameHTML(correctGuess){
    var resultString = "";
    
    if(correctGuess){
        resultString = "Correct";
    } else resultString = "Incorrect";
    
    resultHTML.innerText = "You were: " + resultString;
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
    reqToPassHTML.innerText = "You need at least " + correctRequired + "/" + totalQuestionsRequired + "correct to pass.";
}

function setPreviousCard(newCard){
    previousCard = newCard;
    cardHTML.innerText = previousCard;
}