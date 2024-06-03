// src/main.js

// Date and Time
function showTime() {
	const date = new Date();

	let today = date.toLocaleString("eng", { weekday: "long" });
	let hour = date.getHours().toString().padStart(2, "0");
	let minute = date.getMinutes().toString().padStart(2, "0");
	//let second = date.getSeconds().toString().padStart(2, "0");
	let day = date.getDate().toString().padStart(2, "0");
	let month = (date.getMonth() + 1).toString().padStart(2, "0");
	let year = date.getFullYear();

	document.getElementById(
		"date"
	).innerHTML = `${today}, ${hour}:${minute} - ${day}/${month}/${year}`;
	setTimeout(showTime, 1000); 
}
showTime();

// display focus
window.onload = function() {
  document.getElementById("searchText").focus();

};