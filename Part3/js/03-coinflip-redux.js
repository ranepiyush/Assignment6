var coinFlip;
 for(i=0; i<10; i++){
     coinFlip = Math.round(Math.random());
     //window.document.write(coinFlip);
     if(coinFlip ==0)  
     window.document.write("Heads " + "<br>") 
     else
      window.document.write("Tails" + "<br>");
 }