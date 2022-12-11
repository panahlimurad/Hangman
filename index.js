var imagePlayer = document.querySelector("#imagePlayer")
var nameGamerTop = document.querySelector("#nameGamerTop")
var nameGamer = document.querySelector("#nameGamer")
var numberRemaining = document.querySelector("#numberRemaining")
var latestGuessed = document.querySelector("#latestGuessed")


var correctLetters = ['r','o','m','a', 'n', 'l','d','o'];
var wrongLetters = [];
var userLimit = 5;

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
        var selectedWord = getRandomName();
    
        nameGamer.innerHTML = `
            ${selectedWord.split('').map(letter => `
            <div class ="leader">
            ${correctLetters.includes(letter) ? letter : ''}
            </div>
            `).join('')}`;

            var word = nameGamer.innerText.replace(/\n/g,'');
            if(word === selectedWord){
                console.log("bildiniz");
            }



        }

    displayWord()