var firstValue=document.getElementById('fvalue');//span1
var secondValue=document.getElementById('svalue');//span3
var plusOpr=document.getElementById('add');//span2 +
var eqlOpr=document.getElementById('eql');//span4 ==
var giveData=document.getElementById('output');//input box
var showMsg=document.getElementById('showoutput'); //empty
var answerCorrect="Congrats";
var answerWrong="Please Try Again";

function restartGame()
{
    let firstRandomNum=Math.random()*10;
    let secondRandomNum=Math.random()*100;
    firstValue.textContent=Math.ceil(firstRandomNum);
    secondValue.textContent=Math.ceil(secondRandomNum);
    giveData.value="";
    showMsg.textContent="";
}
restartGame();

function check()
{
    let firstRandomInt=parseInt(firstValue.textContent);
    let secondRandomInt=parseInt(secondValue.textContent);
    let sumValue=firstRandomInt+secondRandomInt;
    let userGiveData=parseInt(giveData.value);
    if(userGiveData === sumValue)
    {
        showMsg.textContent=answerCorrect;
    }
    else
    {
        showMsg.textContent=answerWrong;
    }
}