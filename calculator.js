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
