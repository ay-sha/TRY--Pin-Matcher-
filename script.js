let notifyArea = document.getElementById("notify-section");
let Match = document.getElementById("match"); 
let notMatch = document.getElementById("notmatch");
let generatePinBox = document.getElementsByClassName("generatedPin-Box");
let buttons = document.querySelectorAll('.button');
let backspace = document.getElementById("button-backspace"); 
let clear = document.getElementById("button-clear"); 
let givenPinInput = document.getElementById("generate-Box"); 
let pinInput = document.getElementById("Pin-Box"); 
let pinStr = " "; 
let newStr = " ";

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
        notMatch.style.display = "none"; 
    }
    else
    {
        console.log("Don't match");
        notifyArea.style.display = "block";
        Match.style.display = "none";
        document.getElementById("Pin-Box").value = " ";
    }
    pin = 0; 
   
}

function getRndInteger(min, max) {
    console.log("Clicked");
    notifyArea.style.display = "none";
    document.getElementById("Pin-Box").value = " ";
    pinStr = " ";
    newStr = " ";
return Math.floor(Math.random() * (max - min)) + min;
}

buttons.forEach(function(button){
    button.addEventListener('click', function () {
        pinStr += this.innerText; 
        document.getElementById("Pin-Box").value = pinStr;
        console.log(pinStr);
    });
});

clear.addEventListener('click', function ()
{
    console.log("clared");
    document.getElementById("Pin-Box").value = " "; 
    notifyArea.style.display = "none";
    pinStr = " "; 
});
backspace.addEventListener('click', function () {

    newStr = pinStr.slice(0, -1)
    console.log(newStr);
    pinStr = newStr; 
    document.getElementById("Pin-Box").value = pinStr;
    console.log(pinStr);
});
