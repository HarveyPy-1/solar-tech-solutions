function showWorkType(workType) {
	// Store the selected work type in sessionStorage
	sessionStorage.setItem("workType", workType);

	// Redirect to the next page
	window.location.href = "work-type.html";
}


function findAddress() {
	var addressDiv = document.createElement("div");
	addressDiv.textContent =
		"Bathspa University \n Newton St Loe, Bath BA2 9BN";
	document.getElementById("addressForm").appendChild(addressDiv);
}



const quotationForm = document.getElementById("addressForm");
const quotationResult = document.getElementById("quotationResult");

quotationForm.addEventListener("submit", function (event) {
	event.preventDefault();

	// Simulating form submission with a delay
	setTimeout(function () {
		// Hide the form
		addressForm.style.display = "none";
		// Show the quotation result
		quotationResult.style.display = "block";
	}, 2000);
});