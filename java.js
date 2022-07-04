//console.log("Hello World");


function computerPlay(){
    var choice = ['rock','paper','sissors'];

    return choice[  Math.floor(Math.random()*3)];
}



//let choise = prompt("rock, paper, sissors");

function Fight_(playerchoice,computerchoice){
   // let playerchoice = prompt("rock, paper, sissors");
    if(playerchoice == null){
    return 'banana';
    }   
    playerchoice = playerchoice.toLowerCase();
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


//console.log(Fight_(computerPlay()));

function game(){

    roundPlayer = 0;
    roundBot = 0;


    for (let i = 0; i < 999; i++) {
            let playerchoice = prompt('rock, paper , sissors');
            let asd = Fight_(playerchoice,computerPlay());
            //console.log('You:' + roundPlayer + '  ' +'  ||Bot:' + roundBot  );
            
            if(asd == 'you win!'){
                roundPlayer += 1;
            
                if(roundPlayer >= 5 ){
                console.log('You won the  match!')
                console.log('You:' + roundPlayer + '  ' +'  ||Bot:' + roundBot  );
                return null;
                    } 
                else if(roundBot >=5){
                    console.log('You lost the  match!')
                    console.log('You:' + roundPlayer + '  ' +'  ||Bot:' + roundBot  );
                    return null;
                    }
                }
            else if(asd == 'computer wins!'){
                roundBot += 1;
                if(roundPlayer >= 5 ){

                    console.log('You won the  match!')
                    console.log('You:' + roundPlayer + '  ' +'  ||Bot:' + roundBot  );
                    return null;
                        } 
                    else if(roundBot >=5){

                        console.log('You lost the  match!')
                        console.log('You:' + roundPlayer + '  ' +'  ||Bot:' + roundBot  );
                        return null;
                        }
            }
            else if(asd == 'error typing'){

                console.log('error typing');
                console.log('You:' + roundPlayer + '  ' +'  ||Bot:' + roundBot  );
                continue;
            }

            else if(asd == 'banana'){
               return null;
            }
          
            
            console.log('You:' + roundPlayer + '  ' +'  ||Bot:' + roundBot  );
      }


}


game();