// date and time
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
		"date"
	).innerHTML = `${today}, ${hour}:${minute} - ${day}/${month}/${year}`;
	setTimeout(showTime, 1000); 
}
showTime();

// web search
function WebSearch() {
    let inputText = document.getElementById("searchText").value.trim();

    if (inputText === "") {
        window.alert("Anime kizlari.");
        return;
    }

    let words = inputText.split(" ");
    let firstWord = words[0];
    let searchURL = "";

    switch (firstWord) {
        case "youtube":
            {
                searchURL = "https://www.youtube.com/";
                break;
            }

        case "!yt":
            {
                let ytRemainingText = words.slice(1).join(" ");
                searchURL = "https://www.youtube.com/results?search_query=" + encodeURIComponent(ytRemainingText);
                break;
            }

        case "!pin":
            {
                let pinRemainingText = words.slice(1).join(" ");
                searchURL = "https://tr.pinterest.com/search/pins/?q=" + encodeURIComponent(pinRemainingText);
                break;
            }

        case "github":
            {
                searchURL = "https://github.com";
                break;
            }

        case "!git":
            {
                let gitRemainingText = words.slice(1).join(" ");
                searchURL = "https://github.com/search?q=" + encodeURIComponent(gitRemainingText);
                break;
            }

        case "pixiv":
            {
                let pixivRemainingText = words.slice(1).join(" ");
                searchURL = "https://www.pixiv.net/en/tags/" + encodeURIComponent(pixivRemainingText);
                break;
            }

        case "!anx":
            {
                let anxRemainingText = words.slice(1).join(" ");
                searchURL = "https://animecix.net/search?query=" + encodeURIComponent(anxRemainingText);
                break;
            }

        case "ceviri":
            {
                searchURL = "https://translate.google.com/";
                break;
            }
        case "!cvr":
            {
                let translateRemainingText = words.slice(1).join(" ");
                searchURL = "https://translate.google.com/?sl=auto&tl=tr&text=" + encodeURIComponent(translateRemainingText);
                break;
            }

            default:
                searchURL = "https://www.google.com/search?q=" + encodeURIComponent(inputText);
                break;
        }

    window.location.href = searchURL;
}

// display focus
window.onload = function() {
    document.getElementById("searchText").focus();

};
