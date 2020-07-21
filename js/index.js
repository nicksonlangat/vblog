
/*var age = prompt('what is your age');
document.getElementById('someText').innerHTML= age;


function fun(){
    console.log('this is a function');
}
fun();*/

//function greeting(yourName){
   // var name = prompt('what is ur name');
  // var result = 'hello' + " " + yourName;
 //console.log(result);
//}
//var name = prompt('what is ur name');
//greeting(name);

//function sumNumbers(num1, num2,){
    //var result = num1 + num2;
    //console.log(result);
//}
//sumNumbers(10, 10);
//let fruit='banana';
//let moreFruits = 'banana\napple';
//console.log(moreFruits);
//console.log(fruit.length);
//console.log(fruit.replace('ban', '123'));
//console.log(fruit.toUpperCase());
//let fruits = ['banana','apple','orange', 'pineapples'];
//fruits[0]= 'pear';
//console.log(fruits[0]);
//for(let i = 0; 1 < fruits.length; i++){
  //  console.log(fruits[i]);

//}
//console.log(fruits.join(' * '));
//console.log(fruits, fruits.pop(), fruits);
//console.log(fruits, fruits.push('blueberries'), fruits);
//fruits.shift();
//console.log(fruits);
//fruits.unshift('kiwi');
//let vegetables = ['asparagus', 'tomato', 'broccoli'];

//let emptyArray = new Array();
//for (let num = 0; num < 10; num++){
//    emptyArray.push(num);

//}
//console.log(emptyArray);
//let student={
   // "first":"rafih",
   // "last":"rafih2",
   // studentInfo: function (){
     //   return this.first + '\n'+ this.last;
   // }
//};
//console.log(student.first);
//student.first = 'notrafih';
////console.log(student.first);
////console.log(student.studentInfo());
//var age = 4//5;
//if ((age >= 18) && (age //<= 35)) {
//  //
//////status = 'target demo//';
////c//onsole.log(status);////
//}else {
//// //   status = 'not my audience';
//////// //   console.log(status//)//;//
//////
//}
////////switch statements
////////switch(2){
 //////   case 0:
//        text = 'weekend';
 // // //     break;
 //       case 5:
 //           text = 'weekend';
 //           break;
 //           case 6:
  //              text = 'weekend';
   //             break;
 //               default:
   ////                 text = 'weekday'
//}
//console.log(text);
function ageInDays(){
var birthYear = prompt('what year were u born?');
var ageInDayss = (2018 - birthYear) * 365;
var h1= document.createElement('h1');
var textAnswer = document.createTextNode('you are' + ageInDayss + 'days old');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "../Img/dan-nelson-qmDaC5QHJU4-unsplash.jpg" ;
  div.appendChild(image);
}
//challenge 3;
/*function rpsGame(yourChoice){
  console.log(yourChoice);
  var humanChoice,botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log('computer Choice', botChoice);
results = decideWinner(humanChoice,botChoice); //[0,1] human lost|bot won
console.log(results);
message = finalMessage(results); //{'message': 'You won!''color':'green'}
console.log(message);
rpsFrontEnd(yourChoice.id, botChoice, message);
}
 
function randToRpsInt(){
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
  return['rock','paper','scissors'][number];
}
function decideWinner( yourChoice, computerChoice){
var rpsDatabase = {
  'rock':{'scissors':1,'rock': 0.5, 'paper':0},
  'paper':{'rock':1, 'paper':0.5, 'scissors':0},
  'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
};
var yourScore = rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]){
if (yourScore === 0){
  return{'message':'you lost', 'color':'red'};

}else if(yourScore === 0.5){
  return{'message':'you tied','color':'yellow'};

}else{
  return{'message': 'you win!', 'color':'green'};
}
}

function rpsFrontEnd(humanImageChoice, betImageChoice, finalMessage){
var imagesDatabase = {
  'rock': document.getElementById('rock').src,
  'paper': document.getElementById('paper').src,
  'scissors': document.getElementById('scissors').src
}
document.getElementById('rock'),remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
var humanDiv = document.createElement('div');
var betDiv= document.createElement('div');
var messageDiv = document.createElement('div');



}*/                                                                      
//challenge 4 :change the color of all button



var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for(let i=0; i<all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
if (buttonThingy.value === 'red'){
  buttonsRed();
}else if (buttonThingy.value === 'green'){
  buttonsGreen();
}else if (buttonThingy.value === 'reset'){
  buttonsColorReset();
}else if (buttonThingy.value === 'random'){
  randomColors();
}
}

function buttonsRed(){
  for(let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}
function buttonsGreen(){
  for(let i=0; i < all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}
function buttonsColorReset(){
  for (let i=0;i< all_buttons.length;i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function randomColors(){
var choices = ['btn-primary', 'btn-danger','btn-success', 'btn-warning'];
for(let i=0; i< all_buttons.length; i++){
  let randomNumber = Math.floor(Math.random()*4);
  all_buttons[i].classList.remove(all_buttons[i].classList[1]);
  all_buttons[i].classList.add(choices[randomNumber]) ;
}
}









//cncncncncnc//
var blackJackGame ={
  'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box', 'score':0},
  'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
'cards':['2','3','4','5','6','7','8','9','10','k','j','q','a'],
'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'k':10,'j':10,'q':10,'a':[1,11]},
'wins':0,
'losses':0,
'draws':0,
'isStand':false,
'turnover':false,
};
const YOU = blackJackGame['you']
const DEALER = blackJackGame['dealer']
const hitsound = new Audio('../sound/Rec-2020-05-03_232456.3gpp');
const winSound = new Audio('../sound/Rec-2020-05-03_170410.3gpp');
const lossSound = new Audio('../sound/Rec-2020-05-03_170401.3gpp');
document.querySelector('#blackjack-hit-button').addEventListener('click',blackJackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);
document.querySelector('#blackjack-Deal-button').addEventListener('click',blackJackDeal);

function blackJackHit(){
  if(blackJackGame['isStand']=== false){
  let card = randomCard();
  console.log(card);
showCard( card,YOU);
updateScore(card,YOU);
showScore(YOU);
  }
 }

 function showCard( card,activePlayer){
   if(activePlayer['score']<= 21){
  let cardImage = document.createElement('img');
  cardImage.src=`../Img/${card}.jpg.jpg`;
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitsound.play();
 }
}
 function blackJackDeal(){
if (blackJackGame['turnover'] === true){

blackJackGame['isStand']= false;
 // showResult(computeWinner());
   let yourImages = document.querySelector('#your-box').querySelectorAll('img');
   let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
   
   for(i=0; i<yourImages.length; i++){
     yourImages[i].remove();
   }
   for(i=0; i<dealerImages.length; i++){
    dealerImages[i].remove();
  }

  YOU['score']=0;
  DEALER['score']=0;

  document.querySelector('#your-blackjack-result').textContent = 0;
  document.querySelector('#dealer-blackjack-result').textContent = 0;
 
document.querySelector('#your-blackjack-result').style.color='#ffffff';
document.querySelector('#dealer-blackjack-result').style.color='#ffffff';

document.querySelector('#blackjack-result').textContent="let's play";
document.querySelector('#blackjack-result').style.color='black';
blackJackGame['turnOver'] = true;
}
}
 function randomCard(){
   let randomIndex = Math.floor(Math.random()*13);
   return blackJackGame['cards'][randomIndex];
 }
 function updateScore(card, activePlayer){
   if(card === 'a'){
   if(activePlayer['score']+ blackJackGame['cardsMap'][card][1]<=21){
activePlayer[''] += blackJackGame['cardsMap'][card][1];
   }else{
     activePlayer['score'] += blackJackGame['cardsMap'][0];
   }
  }else{
    activePlayer['score']+= blackJackGame['cardsMap'][card];
  }
   
 }
 function showScore(activePlayer){
   if (activePlayer['score'] > 21){
     document.querySelector(activePlayer['scoreSpan']).textContent='BUST!';
     document.querySelector(activePlayer['scoreSpan']).style.color='red';
   }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
   }
  
 }

 function sleep(ms){
return new Promise(resolve => setTimeout(resolve, ms)); 
 }

  async function dealerLogic(){
   blackJackGame['isStand'] = true;
   while(DEALER ['score'] <16 && blackJackGame['isStand'] === true){
   let card = randomCard();
   showCard(card, DEALER);
   updateScore(card,DEALER);
   showScore(DEALER);
   await sleep(1000);
 }
   
     blackJackGame['turnover'] = true;
     let winner = computeWinner();
     showResult(winner);
   }
   
 function computeWinner(){
   let winner;
   if (YOU['score'] <= 21){

    if (YOU['score']> DEALER['score']|| (DEALER['score'] > 21)){
     console.log('You won!');
     blackJackGame['wins']++;
      winner= YOU;

    }else if(YOU['score']< DEALER['score']) {
console.log('you lost');
blackJackGame['losses']++;

winner = DEALER;
    }else if(YOU['score']=== DEALER['score']){
      blackJackGame['draws']++;
      console.log('you drew');
    }
   }else if(YOU['score']> 21 && DEALER['score']<=21){
      console.log('you lost');
      blackJackGame['losses']++;
      winner = DEALER;
   }else if (YOU['score'] > 21 && DEALER['score']){
    blackJackGame['draws']++;
     console.log('you drew');
   }
   console.log('Winner is', winner);
   return winner;
 }
  function showResult(winner){
let message,messageColor;

if(blackJackGame['turnover'] === true){

if(winner=== YOU){
  document.querySelector('#wins').textContent = blackJackGame['wins'];
  message = 'you won';
  messageColor = 'green';
  winSound.play();
}else if (winner === DEALER){
  document.querySelector('#Losses').textContent = blackJackGame['losses'];
  message = 'you lose';
  messageColor= 'red';
  lossSound.play();
}else{
  document.querySelector('#Draws').textContent = blackJackGame['draws'];
  message = 'you drew';
  messageColor = 'black';
}
document.querySelector('#blackjack-result').textContent = message;
document.querySelector('#blackjack-result').style.color = messageColor;
 }
}