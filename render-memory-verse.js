function makeVerseContainer(verse) {
    return `
        <div>
            <h3 class="whole">${verse.whole}</h3>
            <p class="text">${verse.text}</p>

            <p class="hidden">${verse.tags}</p>
        </div>
    `;
}

export function renderSearchResults(results, _resultsDiv) {
    if (!Array.isArray(results)) throw new Error("Error: results parameter is not an array.");
    if (!_resultsDiv) throw new Error("Error: _resultsDiv doesn't have a div or results-div id may not exist.");

    _resultsDiv.innerHTML = "";

    if (results.length === 0) {
        _resultsDiv.innerHTML = `<p>No results found.</p>`;
        return;
    }

    results.forEach(verse => {
        _resultsDiv.innerHTML += makeVerseContainer(verse);
        _resultsDiv.innerHTML += "<br>";
    });
}