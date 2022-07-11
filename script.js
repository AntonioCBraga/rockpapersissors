//console.log("Hello World");

let playerScore = 0;
let computerScore = 0;
var scorep = document.getElementById('scoreplayer');
var scoreb = document.getElementById('scorebot');
var spli  = document.getElementById("spli");

let butn = document.createElement("button");
butn.innerHTML= "Play Again";
butn.style.marginLeft= "880px";
butn.style.position= "absolute";
butn.style.bottom = "440px";

//computer bottons
const papir = document.getElementsByClassName("btne")[2];
const sissor = document.getElementsByClassName("btne")[1];
const rocki = document.getElementsByClassName("btne")[0];
//human buttons
const papiri = document.getElementsByClassName('btn')[0];
const sisori = document.getElementsByClassName('btn')[1];
const rokki  = document.getElementsByClassName('btn')[2];

const happy = document.getElementsByClassName('myAudio')[0];
const sad = document.getElementsByClassName('myAudio')[1];


function animatron2000(){
    //bot animation remove
    rocki.classList.remove('win');
    papir.classList.remove('win')
    sissor.classList.remove('win');
    rocki.classList.remove('lose');
    papir.classList.remove('lose')
    sissor.classList.remove('lose');
    rocki.classList.remove('draw');
    papir.classList.remove('draw')
    sissor.classList.remove('draw');


    //human anims remove
    papiri.classList.remove('lose');
    sisori.classList.remove('lose');
    rokki.classList.remove('lose');
    papiri.classList.remove('win');
    sisori.classList.remove('win');
    rokki.classList.remove('win');
    papiri.classList.remove('draw');
    sisori.classList.remove('draw');
    rokki.classList.remove('draw');

}






function computerPlay(){
    var choice = ['rock','paper','sissors'];
    return choice[  Math.floor(Math.random()*3)];
}




function Fight_(playerchoice,computerchoice){
   
    if (playerchoice == 'rock'){
        if(computerchoice == 'rock'){
            animatron2000();
            rocki.classList.add('draw');
            rokki.classList.add('draw');
            
        }
        else if(computerchoice =='paper'){
            animatron2000();
            papir.classList.add('win')
            rokki.classList.add('lose');
            computerScore += 1;
        }
        else {
            animatron2000();
            rokki.classList.add('win');
            sissor.classList.add('lose');
            playerScore += 1;  
        }
    }
    else if (playerchoice == 'paper'){
        if(computerchoice == 'rock'){
            animatron2000();
            papiri.classList.add('win');
            rocki.classList.add('lose');
            playerScore += 1;
        }
        else if(computerchoice =='paper'){
            animatron2000();
            papir.classList.add('draw');
            papiri.classList.add('draw');
        }
        else {
            animatron2000();
            sissor.classList.add('win');
            papiri.classList.add('lose');
            computerScore += 1;
        }
    }
    else{
        if(computerchoice == 'rock'){
            animatron2000();
            rocki.classList.add('win');
            sisori.classList.add('lose');
            computerScore += 1;    
        }
        else if(computerchoice =='paper'){
            animatron2000();
            sisori.classList.add('win');
            papir.classList.add('lose');
            playerScore += 1;
        }
        else {
            animatron2000();
            sisori.classList.add('draw');
            sissor.classList.add('draw');
        } 
    }

}
    


function winner(){
    animatron2000();
    scoreb.textContent = null;
    scorep.textContent = null;
    spli.textContent = null;
    
    if(playerScore === 5){
        playerScore = -9999;
        computerScore = -9999;
        happy.play();
        spli.textContent = "You Win!";
        playag();
       

    }
    else if(computerScore === 5){
        playerScore = -9999;
        computerScore = -9999;
        sad.play();
        spli.textContent = "You Lose!";
        playag();
    }
}

function playag(){
    butn.style.visibility = 'visible';
    document.body.appendChild(butn);
}

butn.onclick = function(){
    spli.textContent = "-";
    playerScore= 0;
    computerScore= 0;
    butn.style.visibility= "hidden";
}


function clickHandler(e) {
 
    role = this.id;
    
    
    if(role == '1' ){
        
        Fight_('paper',computerPlay()) ;
    }
    else if(role == '2' ){
        
        Fight_('sissors',computerPlay()) ;
    }
    else if(role == '3' ){
        
        Fight_('rock',computerPlay()) ;
       
    }
    if(playerScore >= 0 &&computerScore >=0 ){
        scoreb.textContent = computerScore.toString();
        scorep.textContent = playerScore.toString();
    }
    if(playerScore === 5 || computerScore === 5 ){
        winner();
    }
}   



const btn = document.querySelectorAll('.btn');

btn.forEach(btn => btn.addEventListener('click',(clickHandler)));



