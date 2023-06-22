/* calculate():

It begins by retrieving the values of two HTML input elements with the IDs "electricityCost" and "dailyUsage". These elements are most likely text inputs where users can enter numerical values.
The retrieved values are stored in the variables electricityCost and dailyUsage, respectively.
The next step calculates the dailySavings by multiplying dailyUsage with electricityCost.
The yearlySavings are calculated by multiplying dailySavings with 365, assuming a year consists of 365 days.
The result variable is constructed by concatenating a string message with the calculated yearlySavings, formatted to two decimal places using toFixed(2).
The result is then displayed in an HTML element with the ID "result" by setting the innerHTML property of that element.
Additionally, some CSS styling is applied to the "result" element, aligning the text to the center and setting the font size to 20 pixels. */

function calculate() {
  var electricityCost = document.getElementById("electricityCost").value;
  var dailyUsage = document.getElementById("dailyUsage").value;

  var dailySavings = dailyUsage * electricityCost;
  var yearlySavings = dailySavings * 365;

  var result = "By converting to solar panels, you can save approximately £" + yearlySavings.toFixed(2) + " per year.";

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = result;
  resultElement.style.textAlign = "center";
  resultElement.style.fontSize = "20px";
}
