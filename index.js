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


// function getRandomName(){
//     var gamer = ["ronaldo", "messi", "mbappe"];
//     return gamer[Math.floor(Math.random() * gamer.length )]
// }

// function displayWord(){
//     var selectedWord = getRandomName();

//     nameGamer.innerHTML = `
//         ${selectedWord.split('').map(letter => `${correctLetters.includes(letter) ? letter : ''}`).join('')}`

// }

// // function restartGame(){
// //     userLimit = 5
// //     latestGuessed = ''
// //     nameGamer = ''
// // }
    
    
//     function startGame(e){
//         var userTry = e.key
        
//         latestGuessed.innerHTML = userTry
        
//         displayWord()
    
//        function userButton(){
//         if(!wrongLetters.includes(userTry)){
//             wrongLetters.push(userTry);
//            console.log(wrongLetters);
//         }
//     }
 
    
//      userLimit --

//     numberRemaining.innerHTML = `${userLimit}`
//     if( userLimit === 0 ){
//         alert ("siz herf secmek limitinizi bitirdiniz yeniden cehd edin")
//     }
    
// }
// window.onkeydown = startGame;



 function getRandomName(){
        var gamer = ["ronaldo", "messi", "mbappe"];
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
                resultGame.innerHTML = "QAZANDINIZ"
                nameGamerTop.innerHTML = word
            }

        }

        function updateWrongLatters(){
            latestGuessed.innerHTML = `
                ${wrongLetters.length > 0 ? `<h3>DUZGUN OLMYAN HERFLER</h3>` : ''}
                ${wrongLetters.map(letter => `<span>${letter}<span>`)}

            `;
        }

        window.addEventListener('keydown', function(e) {
           
            numberRemaining.innerHTML = userLimit
            userLimit --
            if(userLimit === 0){
                alert("siz uduzdunuz");
            }
           
            if (e.keyCode >= 65 && e.keyCode <= 90){
                var letter = e.key;

                if(selectedWord.includes(letter)){
                    if(!correctLetters.includes(letter)){
                        correctLetters.push(letter);
                        displayWord();
                    } else{
                        console.log("bu herfi artiq elave etdiz");
                    }
                } else{
                    if(!wrongLetters.includes(letter)){
                        wrongLetters.push(letter);
                        updateWrongLatters()
                    }
                }
            }
        })

        

    displayWord()