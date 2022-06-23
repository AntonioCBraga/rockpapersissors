console.log("Hello World");


function computerPlay(){
    var choice = ['rock','paper','sissors'];

    return choice[  Math.floor(Math.random()*3)];
}



let choise = prompt("rock, paper, sissors");

function Fight_(playerchoice, computerchoice){
    console.log('player choice: ' + playerchoice)
    console.log('computer choice: ' + computerchoice);
    if(playerchoice != "rock" && playerchoice != 'paper' && playerchoice != 'sissors'){
        return 'error typing';
    }
    else{
       if (playerchoice == 'rock'){
            if(computerchoice == 'rock'){
                return 'draw';
            }
            else if(computerchoice =='paper'){
                return 'computer wins!';
            }
            else {
                return 'you win!';
            }
       }
       else if (playerchoice == 'paper'){
            if(computerchoice == 'rock'){
                return 'you win!';
            }
            else if(computerchoice =='paper'){
                return 'draw';
            }
            else {
                return 'computer wins!';
            }
        }
        else{
            if(computerchoice == 'rock'){
                return 'computer win!';
            }
            else if(computerchoice =='paper'){
                return 'you win!';
            }
            else {
                return 'draw';
            } 
        }

    }
}


console.log(Fight_(choise,computerPlay()));