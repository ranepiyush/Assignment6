var coinFlip;
var FlipResult;
do{
    coinFlip = Math.round(Math.random());
     if(coinFlip==0)
        {
        FlipResult="Heads";
        window.document.write("Heads"+"<br>");
        }
     else
     {
        FlipResult="Tails";
        window.document.write("Tails"+"<br>");
        }
}while(FlipResult=="Heads")