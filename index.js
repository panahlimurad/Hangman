var imagePlayer = document.querySelector("#imagePlayer")
var nameGamerTop = document.querySelector("#nameGamerTop")
var nameGamer = document.querySelector("#nameGamer")
var numberRemaining = document.querySelector("#numberRemaining")
var latestGuessed = document.querySelector("#latestGuessed")

var userLimit = 5

function startGame(e){
    var userTry = e.key
    
    latestGuessed.innerHTML = userTry
    


    userLimit --

    numberRemaining.innerHTML = `${userLimit}`
    
}



window.onkeydown = startGame;
