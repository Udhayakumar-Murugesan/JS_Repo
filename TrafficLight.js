var button1=document.getElementById("btn1");
var button2=document.getElementById("btn2");
var button3=document.getElementById("btn3");
var button4=document.getElementById("btn4");
var button5=document.getElementById("btn5");
var button6=document.getElementById("btn6");
function red()
{
  button1.style.backgroundColor="red";
  button4.style.backgroundColor="red";
  button2.style.backgroundColor="black";
  button3.style.backgroundColor="black";
  button5.style.backgroundColor="black";
  button6.style.backgroundColor="black";
}
function yellow()
{
  button2.style.backgroundColor="yellow";
  button2.style.color="black";
  button5.style.backgroundColor="yellow";
  button1.style.backgroundColor="black";
  button3.style.backgroundColor="black";
  button4.style.backgroundColor="black";
  button6.style.backgroundColor="black";

}
function green()
{
  button3.style.backgroundColor="green";
  button6.style.backgroundColor="green";
  button1.style.backgroundColor="black"; 
  button2.style.backgroundColor="black";
  button4.style.backgroundColor="black";
  button5.style.backgroundColor="black";
}