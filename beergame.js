let deckCount = 0;
let dumpNumber = [];
let dumpSuits = [];
let dump = [];
let previousCard = '';
let previousSuit = '';
let Counter = 0;
let failCheck = 0;
const Cards = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
const Suits = ['Heart','Diamonds','Clovers','Spades'];
window.addEventListener('load',function(){
    var ButtonsDiv = document.getElementById('buttonsArea');
    for (x = 0; x < 3; x++){
        let buttonMade = document.createElement('button');
        ButtonsDiv.appendChild(buttonMade);
        if(x == 0){
            buttonMade.innerText = "Rules";
            buttonMade.id = "rulesAlone";
            buttonMade.className = "cardsOrNot";
            buttonMade.addEventListener('click',() => removeButtons()); //keep it dry****
        }
        if(x == 1){
            buttonMade.innerText = "Rules & Cards";
            buttonMade.id = "rulesAndCards";
            buttonMade.className = "cardsOrNot";
            buttonMade.addEventListener('click',() => removeButtons()); //keep it dry****
        }
        else if(x == 2){
            buttonMade.innerText = "Draw a card";
            buttonMade.id = "drawCard";
            buttonMade.className = "cardPuller";
            buttonMade.addEventListener('click',() => Deck(1));
        }
    }
    console.log('all assets are loaded');
})

function removeButtons(x){
    console.log(event.target.id);
    // let currentObject = event.target.id;
    array = document.getElementsByClassName('cardsOrNot');
    for (var j = 0; j < array.length;j++){
        array[j].style.display = "none";
    }
    document.getElementById('rules').style.display = "block";
    if(event.target.id == 'rulesAndCards'){
        document.getElementById('rules').style.width = '25%';
        document.getElementById('rules').style.left = '5%';
        //document.getElementById('rules').className = "cardPuller";
        
    }
    else if (event.target.id == "rulesAlone"){

        document.getElementById("drawCard").style.display = "none";
        return true;
    }
    else{

        alert ("Error, Button not identified.");
        document.getElementById("buttonsArea").style.color = "red";
    }
}
function Deck(x){
    if(x==1){
        if(Counter==0){console.log('New deck unwrapped'); Counter++;}
        if(deckCount<54){
            let randomCard = Cards[Math.floor(Math.random()*Cards.length)];
            let randomSuit = Suits[Math.floor(Math.random()*Suits.length)];
            console.log(randomCard + " of " + randomSuit + "(starting random)");
            


            for(j=0;j<dumpNumber.length;j++){
                let Counter = 0;
                while(randomCard == dumpNumber[j] && randomSuit == dumpSuits[j]){
                    randomSuit = Suits[Math.floor(Math.random()*Suits.length)];
                    console.log("suit randomized");
                    Counter++;
                    if(Counter>6){
                        Cards.splice(j,1);
                        console.log("cards spliced");
                        randomCard = Cards[Math.floor(Math.random()*Cards.length)];                        
                        break;
                    }
                }
                console.log(randomCard + " of " + randomSuit + "(ending random)");                
            }
            dumpNumber += randomCard;
            dumpSuits += randomSuit;
        }
    }
}
// function CheckSuits(chosenCard,chosenSuit){
//     for(j=0;j<dumpNumber.length;j++){
//         let Counter = 0;
//         while(chosenCard==dumpNumber[j] && chosenSuit == dumpSuits[j]){
//             console.log("Duplicate Found and randomized");
//             randomSuit = Suits[Math.floor(Math.random()*Suits.length)];
//             console.log("new suit = " + randomSuit);
//             Counter++;
//             if(counter>7){
//                 console.log("removing number from array");
//                 console.log("array before removal: " + dumpNumber);
//                 dumpNumber.splice()
//                 console.log("array after removal: " + dumpNumber);
                
//             }
//         }
//     }
// }
// function removeNum(){

// }
//ברגע שמתגלה שהמספר יצא כבר בארבעת סוגיו, יש להוריד אותו מהמערך.
