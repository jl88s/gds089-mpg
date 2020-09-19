//create placeholder variables to store the users info later
var milesDriven;
var gasUsage;
var mpgTotal;

// create a popup window greeting the user
window.alert("Greetings! I'm a Miles Per Gallon thing-a-ma-jiggy")

// prompt the user to input how many miles they've driven.
milesDriven = window.prompt("How many miles did you drive?");
// prompt the user to input thier gas usage.
gasUsage = window.prompt("How much gas did you use?");
// divide the miles and gas to eachother and store that into the total result.
mpgTotal = milesDriven / gasUsage;

var elMiles = document.getElementById('miles');
elMiles.value = milesDriven + " miles";

var elGas = document.getElementById('gas');
elGas.value = gasUsage + " gallons";

var elTotal = document.getElementById('results');
elTotal.value = mpgTotal + " mpg";