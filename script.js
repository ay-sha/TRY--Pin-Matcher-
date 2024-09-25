let notifyArea = document.getElementById("notify-section");
let Match = document.getElementById("match"); 
let notMatch = document.getElementById("notmatch");
let generatePinBox = document.getElementsByClassName("generatedPin-Box");
let buttons = document.querySelectorAll('.button');
let backspace = document.getElementById("button-backspace"); 
let clear = document.getElementById("button-clear"); 
let givenPinInput = document.getElementById("generate-Box"); 
let pinInput = document.getElementById("Pin-Box"); 

window.onload = function ()
{
    notifyArea.style.display = "none";
    generatePinBox.value = " "; 
}

function submitfunc()
{
    let givenPin = parseInt(givenPinInput.value);
    let pin = parseInt(pinInput.value); 
    if (givenPin == pin)
    {
        console.log("Matched");
        notifyArea.style.display = "block";
        Match.style.display = "block";
        notMatch.style.display = "none"; 
    }
    else
    {
        console.log("Don't match");
        notifyArea.style.display = "block";
        Match.style.display = "none";
        notMatch.style.display = "block";
    }
    pinInput.value = " ";
    pin = 0; 
   
}

function getRndInteger(min, max) {
    console.log("Clicked");
    notifyArea.style.display = "none";
    pinInput.value = " ";
return Math.floor(Math.random() * (max - min)) + min;
}

buttons.forEach(function(button){
    button.addEventListener('click', function () { 
        pinInput.value += this.innerText;
        console.log(pinInput.value);
    });
});

clear.addEventListener('click', function ()
{
    console.log("clared");
    pinInput.value = " "; 
    notifyArea.style.display = "none";
    notMatch.style.display = "none"
    Match.style.display = "none";
    pinStr = " "; 
});
backspace.addEventListener('click', function () {

    let newStr = pinInput.value.slice(0, -1)
    pinInput.value = newStr;
    console.log(pinStr);
});
