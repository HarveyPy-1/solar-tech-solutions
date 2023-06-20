function showWorkType(workType) {
	// Store the selected work type in sessionStorage
	sessionStorage.setItem("workType", workType);

	// Redirect to the next page
	window.location.href = "work-type.html";
}
