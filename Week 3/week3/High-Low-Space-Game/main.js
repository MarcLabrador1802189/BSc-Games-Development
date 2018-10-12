var textSpaceHTML = document.getElementById("textSpace");
var chapterTitleHTML = document.getElementById("chapterTitle");
var endStoryGameHTML = document.getElementById("endStoryGameMessage");

var burnHTML = document.getElementById("burn");
var oxygenHTML = document.getElementById("oxygen");
var moraleHTML = document.getElementById("morale");

var burn = false;
var oxygen = 1; //0 = low, 1 = normal;
var morale = 1; //0 = low, 1 = normal, 2 = high;

var currentStoryNode = 0;
var endStory = false;


function startGame(){
    resetCardGame();
    var storyObject = findStoryStringFromNode(0);
    
    textSpaceHTML.innerHTML = storyObject.story;
    chapterTitleHTML.innerText = storyObject.chapter;
}

function updateStory(wonGame){
    var newNode = findNewNode(wonGame);
       
    var storyObject = findStoryStringFromNode(newNode);
    
    textSpaceHTML.innerHTML = storyObject.story;
    chapterTitleHTML.innerText = storyObject.chapter;
    
    currentStoryNode = newNode;
}

function continueStory(){    
    updateStory(wonGame);
    
    if(!endStory){
        resetCardGame();
    }
}

function findNewNode(wonGame){
    var newNode = 0;
    
    switch (currentStoryNode){
        case 0: 
            if(wonGame){
                newNode = 1;
            }
            else{
                newNode = 2;
            }
            
            break;
            
        case 1: 
            if(wonGame){
                newNode = 3;
            }
            else{
                newNode = 4;
                setBurn(true);
            }
            
            break;
        case 2: 
            if(wonGame){
                newNode = 5;
                setOxygen(0);
            }
            else{
                newNode = 6;
                setBurn();
                setMorale(0);
            }
            
            break;
        case 3: 
            if(wonGame){
                newNode = 7;
            }
            else{
                newNode = 19;
            }
            
            break;
        case 4: 
            if(wonGame){
                newNode = 9;
            }
            else{
                newNode = 8;
                setOxygen(0);
            }
            
            break;
        case 5:
            if(wonGame){
                newNode = 3;
            }
            else{
                newNode = 4;
                setBurn(true);
            }
            
            break;
        case 6: 
            if(wonGame){
                newNode = 17; //////////////////////////////////////////////////////////TODO end state
                loadEndGame();
            }
            else{
                newNode = 18; //////////////////////////////////////////////////////////TODO end state
                loadEndGame();
            }
            
            break;
        case 7: 
            if(wonGame){
                newNode = 9;
            }
            else{
                newNode = 8;
            }
            
            break;
        case 8: 
            if(wonGame){
                newNode = 20; //TODO end state
                loadEndGame();
            }
            else{
                newNode = 21; //TODO end state
                loadEndGame();
            }
            
            break;
        case 9: 
            if(wonGame){
                if(burn){
                    newNode = 10;
                    setBurn(false);
                }
                else {
                    newNode = 12; //////////////////////////////////////////////////////////TODO end state
                    loadEndGame();
                }                
            }
            else{
                newNode = 11;
                setMorale(0);
            }
            
            break;
        case 10: 
            if(wonGame){
                newNode = 13; //////////////////////////////////////////////////////////TODO end state
                loadEndGame();
            }
            else{
                newNode = 14; //////////////////////////////////////////////////////////TODO end state
                loadEndGame();
            }
            
            break;
        case 11: 
            if(wonGame){
                newNode = 15; //////////////////////////////////////////////////////////TODO end state
                loadEndGame();
            }
            else{
                newNode = 16; //////////////////////////////////////////////////////////TODO end state
                loadEndGame();
            }
            
            break; 
        case 19:
            if(wonGame){
                newNode = 9;
            }
            else{
                newNode = 8;
            }
            
            break;
    }
    
    return newNode;
}

function findStoryStringFromNode(node){    
    var storyString = "";
    
    switch (node){
        case 0: 
            storyString = getNode0();
            break;
        case 1:
            storyString = getNode1();
            break;
        case 2:
            storyString = getNode2();
            break;
        case 3:
            storyString = getNode3();
            break;
        case 4: 
            storyString = getNode4();
            break;
        case 5:
            storyString = getNode5();
            break;
        case 6:
            storyString = getNode6();
            break;
        case 7:
            storyString = getNode7();
            break;
        case 8: 
            storyString = getNode8();
            break;
        case 9:
            storyString = getNode9();
            break;
        case 10:
            storyString = getNode10();
            break;
        case 11:
            storyString = getNode11();
            break;
        case 12:
            storyString = getNode12();
            break;
        case 13:
            storyString = getNode13();
            break;
        case 14:
            storyString = getNode14();
            break;
        case 15:
            storyString = getNode15();
            break;
        case 16:
            storyString = getNode16();
            break;
        case 17:
            storyString = getNode17();
            break;
        case 18:
            storyString = getNode18();
            break;
        case 19:
            storyString = getNode19();
            break;
        case 20:
            storyString = getNode20();
            break;
        case 21:
            storyString = getNode21();
            break;            
    }
    
    return storyString;
}

function setBurn(value){
    burn = value;
    if(burn) {
        burnHTML.innerHTML = "<b>Burn: Lots</b>"
    } else {
        burnHTML.innerHTML = "<b>Burn: None</b>"
    }
}

function setOxygen(value){
    oxygen = value;
    
    var oxygenString;
    
    if(oxygen) { oxygenString = "Normal"; }
    else { oxygenString = "Low"; }
    
    oxygenHTML.innerHTML = "<b>Oxygen: " + oxygenString + "</b>"
}

function setMorale(value){
    morale = value;
    
    var moraleString;
        
    switch(morale){
        case 0:
            moraleString = "Low";
            totalQuestionsRequired--;
            break;
        case 1:
            moraleString = "Normal";
            totalQuestionsRequired++;
            correctRequired++;
            break;
        case 2:
            moraleString = "High";
            correctRequired--;
            break;
    }
    
    moraleHTML.innerHTML = "<b>Morale: " + moraleString + "</b>"
}

function loadEndGame(){
    endStoryGameHTML.style.display = "";
    hiLoGameHTML.style.display = "none";
    endCardGameHTML.style.display = "none";   
    endStory = true;
}

startGame();