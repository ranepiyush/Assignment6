var coinFlip;
coinFlip=Math.floor(Math.random()*10);
var choice = window.prompt(" Choose Heads or Tails ");
var coinFlipResult;

//window.document.write(coinFlip);
//Heads(true) if random number is less than 5 else Tails(false)
(coinFlip < 5) ? coinFlipResult = true : coinFlipResult = false;

if(coinFlipResult && (choice == "Heads")) {
    window.document.write("The flip was heads and you chose heads...you win!");
}

else if(coinFlipResult && (choice == "Tails")) {
    window.document.write("The flip was heads but you chose tails...you lose!");
}

else if(!coinFlipResult && (choice == "Heads")) {
    window.document.write("The flip was tails but you chose heads...you lose!");
}

else if(!coinFlipResult && (choice == "Tails")) {
    window.document.write("The flip was tails and you chose tails...you win!");
}
