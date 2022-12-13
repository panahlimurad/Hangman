var imagePlayer = document.querySelector("#imagePlayer")
var nameGamerTop = document.querySelector("#nameGamerTop")
var nameGamer = document.querySelector("#nameGamer")
var numberRemaining = document.querySelector("#numberRemaining")
var latestGuessed = document.querySelector("#latestGuessed")
var resultGame = document.querySelector("#resultGame")


var correctLetters = [];
var wrongLetters = [];
var userLimit = 10;
var selectedWord = getRandomName();


 function getRandomName(){
        var gamer = ["ronaldo", "messi", "neymar"];
        return gamer[Math.floor(Math.random() * gamer.length )];

    }
    
    function displayWord(){
        
         nameGamer.innerHTML = `
            ${selectedWord.split('').map(letter => `
            <div class ="leader">
            ${correctLetters.includes(letter) ? letter : ''}
            </div>
            `).join('')}`;

            var word = nameGamer.innerText.replace(/\n/g,'');
            
            if(word === selectedWord){
                resultGame.innerHTML = "YOU WIN"
                nameGamerTop.innerHTML = word
                imagePlayer.src = `./img/${nameGamerTop.innerHTML}.jpg`
                
            }

        }

        function updateWrongLatters(){
            latestGuessed.innerHTML = `
                ${wrongLetters.map(letter => `<div class = "leader">${letter}</div>`)}

            `;
        }

        window.addEventListener('keydown', function(e) {
           
            userLimit --
            numberRemaining.innerHTML = userLimit
            if(userLimit === 0){
                resultGame.innerHTML = "YOU LOST"
                
            }

           
            if (e.keyCode >= 65 && e.keyCode <= 90){
                var letter = e.key;

                if(selectedWord.includes(letter)){
                    if(!correctLetters.includes(letter)){
                        correctLetters.push(letter);
                        displayWord();
                    }
                }
                    if(!wrongLetters.includes(letter)){
                        wrongLetters.push(letter);
                        updateWrongLatters()
                    }
                
            }
        })

        

    displayWord()