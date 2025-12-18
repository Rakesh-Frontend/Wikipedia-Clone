const searchInput = document.getElementById("searchInput");
const resultsEl = document.getElementById("results");
const spinnerEl = document.getElementById("spinner");

function createAndAppendResult(result) {
    const {
        title,
        link,
        description
    } = result;

    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    const titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title");

    const urlEl = document.createElement("p");
    urlEl.textContent = link;
    urlEl.classList.add("result-url");

    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("result-description");

    resultItem.appendChild(titleEl);
    resultItem.appendChild(urlEl);
    resultItem.appendChild(descriptionEl);

    resultsEl.appendChild(resultItem);
}

function displayResults(results) {
    spinnerEl.classList.add("d-none");

    results.forEach(result => {
        createAndAppendResult(result);
    });
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        const searchText = searchInput.value.trim();
        if (searchText === "") return;

        resultsEl.textContent = "";
        spinnerEl.classList.remove("d-none");

        const url = `https://apis.ccbp.in/wiki-search?search=${searchText}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayResults(data.search_results);
            });
    }
}

searchInput.addEventListener("keydown", searchWikipedia);
searchInputEl.addEventListener("keydown",wikiSearch);
