function showTime() {
	const date = new Date();

	let today = date.toLocaleString("tr", { weekday: "long" });
	let hour = date.getHours().toString().padStart(2, "0");
	let minute = date.getMinutes().toString().padStart(2, "0");
	let second = date.getSeconds().toString().padStart(2, "0");
	let day = date.getDate().toString().padStart(2, "0");
	let month = (date.getMonth() + 1).toString().padStart(2, "0");
	let year = date.getFullYear();

	document.getElementById(
		"tarih"
	).innerHTML = `${today}, ${hour}:${minute}:${second} - ${day}/${month}/${year}`;
	setTimeout(showTime, 1000); // Her saniyede güncellemek için 1000 ms (1 saniye) bekletiyoruz.
}

showTime();
