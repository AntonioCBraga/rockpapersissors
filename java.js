console.log("Hello World");


function computerPlay(){
    var choice = ['rock','paper','sissors'];

    return choice[  Math.floor(Math.random()*3)];
}

console.log(computerPlay())