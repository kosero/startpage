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
	setTimeout(showTime, 1000); 
}

showTime();

function aramaYap() {
    let inputMetni = document.getElementById("display").value.trim();

    if (inputMetni === "") {
        alert("Boş olmaz.");
        return;
    }

    let kelimeler = inputMetni.split(" ");
    let ilkKelime = kelimeler[0];
    let aramaURL = "";

    switch (ilkKelime) {
        case "!yt":
            {
                let ytGeriKalanMetin = kelimeler.slice(1).join(" ");
                aramaURL = "https://www.youtube.com/results?search_query=" + encodeURIComponent(ytGeriKalanMetin);
                break;
            }

        case "!wk":
            {
                let wkGeriKalanMetin = kelimeler.slice(1).join(" ");
                aramaURL = "https://tr.wikipedia.org/wiki/" + encodeURIComponent(wkGeriKalanMetin);
                break;
            }

        case "!pin":
            {
                let pinGeriKalanMetin = kelimeler.slice(1).join(" ");
                aramaURL = "https://tr.pinterest.com/search/pins/?q=" + encodeURIComponent(pinGeriKalanMetin);
                break;
            }

        case "!git":
            {
                let gitGeriKalanMetin = kelimeler.slice(1).join(" ");
                aramaURL = "https://github.com/search?q=" + encodeURIComponent(gitGeriKalanMetin);
                break;
            }

        case "!pixiv":
            {
                let pixivGeriKalanMetin = kelimeler.slice(1).join(" ");
                aramaURL = "https://www.pixiv.net/en/tags/" + encodeURIComponent(pixivGeriKalanMetin);
                break;
            }

        case "!anx":
            {
                let anxGeriKalanMetin = kelimeler.slice(1).join(" ");
                aramaURL = "https://animecix.net/search?query=" + encodeURIComponent(anxGeriKalanMetin);
                break;
            }

	case "!wa":
            {
                let waGeriKalanMetin = kelimeler.slice(1).join(" ");
                aramaURL = "https://wiki.archlinux.org/index.php?search=" + encodeURIComponent(waGeriKalanMetin);
                break;
            }

        default:
            aramaURL = "https://www.google.com/search?q=" + encodeURIComponent(inputMetni);
            break;
    }

    window.location.href = aramaURL;
}

window.onload = function() {
    document.getElementById("display").focus();

};

