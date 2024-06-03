const suggestionsData = {
    "github": ["github"],
    "youtube": ["youtube"],
    "pinterest": ["pinterest"],
    "ceviri": ["ceviri"],
    "pixiv": ["pixiv"],
    "animecix": ["animecix"]
};

function showSuggestions() {
    const inputText = document.getElementById("searchText").value.trim().toLowerCase();
    const firstWord = inputText.split(" ")[0];

    const suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";

    if (inputText === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    let suggestions = [];

    for (let key in suggestionsData) {
        if (key.startsWith(firstWord)) {
            suggestions = suggestions.concat(suggestionsData[key]);
        }
    }

    if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";
            suggestionItem.textContent = suggestion;
            suggestionItem.onclick = () => completeSuggestion(suggestion);
            suggestionsBox.appendChild(suggestionItem);
        });
        suggestionsBox.style.display = "block";
    } else {
        suggestionsBox.style.display = "none";
    }
}

function completeSuggestion(suggestion) {
    document.getElementById("searchText").value = suggestion;
    document.getElementById("suggestions").style.display = "none";
}

function handleKeyDown(event) {
    const suggestionsBox = document.getElementById("suggestions");
    const suggestions = suggestionsBox.querySelectorAll(".suggestion-item");
    const active = suggestionsBox.querySelector(".suggestion-item.active");

    if (event.key === "ArrowDown" && suggestions.length > 0) {
        if (active) {
            let next = active.nextElementSibling;
            active.classList.remove("active");
            if (next) next.classList.add("active");
            else suggestions[0].classList.add("active");
        } else {
            suggestions[0].classList.add("active");
        }
    } else if (event.key === "ArrowUp" && suggestions.length > 0) {
        if (active) {
            let prev = active.previousElementSibling;
            active.classList.remove("active");
            if (prev) prev.classList.add("active");
            else suggestions[suggestions.length - 1].classList.add("active");
        } else {
            suggestions[suggestions.length - 1].classList.add("active");
        }
    } else if (event.key === "Enter" && active) {
        completeSuggestion(active.textContent);
        WebSearch();
    }
}

function WebSearch() {
    let inputText = document.getElementById("searchText").value.trim().toLowerCase();

    if (inputText === "") {
        window.alert("Lütfen bir şey yazın.");
        return;
    }

    let searchURL = "";

    switch (inputText) {
        case "youtube":
            searchURL = "https://www.youtube.com/";
            break;
        case "pinterest":
            searchURL = "https://www.pinterest.com/";
            break;
        case "github":
            searchURL = "https://www.github.com/";
            break;
        case "pixiv":
            searchURL = "https://www.pixiv.net/";
            break;
        case "animecix":
            searchURL = "https://www.animecix.net/";
            break;
        case "ceviri":
            searchURL = "https://translate.google.com/";
            break;
        default:
            searchURL = "https://www.google.com/search?q=" + encodeURIComponent(inputText);
            break;
    }

    window.location.href = searchURL;
}
