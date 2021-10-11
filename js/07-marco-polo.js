var i;
for(i=1;i<=100;i++)
{
    if((i%3==0)&&(i%5==0))
        window.document.write(i+" "+"Marco!Polo!"+"<br>");
    else if(i%3==0)
        window.document.write(i+" "+"Marco!"+"<br>");
    else if(i%5==0)
        window.document.write(i+" "+"Polo!"+"<br>");

}