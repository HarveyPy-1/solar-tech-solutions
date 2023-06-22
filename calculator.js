function calculate() {
    var electricityCost = document.getElementById("electricityCost").value;
    var dailyUsage = document.getElementById("dailyUsage").value;

    var dailySavings = dailyUsage * electricityCost;
    var yearlySavings = dailySavings * 365;

    var result = "By converting to solar panels, you can save approximately £" + yearlySavings.toFixed(2) + " per year.";

    document.getElementById("result").innerHTML = result;
  }