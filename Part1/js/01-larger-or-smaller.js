var number1;
var number2;
number1 = parseInt(window.prompt("enter first number"));
number2 = parseInt(window.prompt("enter second number"));
if(number1>number2)
{
    window.document.write("Largest number is: <br>" + number1);
}
else if(number2>number1)
{
    window.document.write("Largest number is: <br>" + number2);
}
else{
    window.document.write("Both numbers are equal");
}