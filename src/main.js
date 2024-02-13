// Vue
const { createApp } = Vue

createApp({
    data() {
        return{
            general: {
                ChatGPT:     "https://chat.openai.com/",
                Discord:     "https://discord.com/channels/1154598232651997214/1198258098297643008",
                Gmail:       "https://gmail.com/",
                Pinterest:   "https://tr.pinterest.com/",
                Youtube:     "https://www.youtube.com/",
            },
            desktop: {
                AnimeciX:    "https://animecix.net/",
                Spotify:     "https://open.spotify.com/",
                MyAnimeList: "https://myanimelist.net/profile/Kosero",
                Wallhaven:   "https://wallhaven.cc/",
            },
            documents: {
                Github:      "https://github.com/kosero",
                ArchWiki:    "https://wiki.archlinux.org/",
            },
            other: {
                AUR:         "https://aur.archlinux.org/",
                Flathub:     "https://flathub.org/"
            }
        }
    }
}).mount('#app')


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
	).innerHTML = `${today}, ${hour}:${minute}:${second} - ${day}/${month}/${year}`;
	setTimeout(showTime, 1000); 
}

showTime();


// web search
function WebSearch() {
    let inputText = document.getElementById("display").value.trim();

    if (inputText === "") {
        alert("It won't be empty.");
        return;
    }

    let words = inputText.split(" ");
    let firstWord = words[0];
    let searchURL = "";

    switch (firstWord) {
        case "!yt":
            {
                let ytRemainingText = words.slice(1).join(" ");
                searchURL = "https://www.youtube.com/results?search_query=" + encodeURIComponent(ytRemainingText);
                break;
            }

        case "!wk":
            {
                let wkRemainingText = words.slice(1).join(" ");
                searchURL = "https://tr.wikipedia.org/wiki/" + encodeURIComponent(wkRemainingText);
                break;
            }

        case "!pin":
            {
                let pinRemainingText = words.slice(1).join(" ");
                searchURL = "https://tr.pinterest.com/search/pins/?q=" + encodeURIComponent(pinRemainingText);
                break;
            }

        case "!git":
            {
                let gitRemainingText = words.slice(1).join(" ");
                searchURL = "https://github.com/search?q=" + encodeURIComponent(gitRemainingText);
                break;
            }

        case "!pixiv":
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

        case "!wa":
                {
                    let waRemainingText = words.slice(1).join(" ");
                    searchURL = "https://wiki.archlinux.org/index.php?search=" + encodeURIComponent(waRemainingText);
                    break;
                }
        case "!trans":
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
    document.getElementById("display").focus();

};
