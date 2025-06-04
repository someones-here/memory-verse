import { search } from "./search.js";
import { renderSearchResults } from "./render-memory-verse.js";

document.getElementById("Filter").addEventListener("click", () => {
    document.getElementById("filter-panel").classList.toggle("hidden");
});

const query = document.getElementById("query");
const resultsDiv = document.getElementById("results-div");

query.addEventListener("input", async () => {
    if (!query.checkValidity()) {
        renderSearchResults(await search(""), resultsDiv);
        return;
    }
    
    renderSearchResults(await search(query), resultsDiv);
});

renderSearchResults(await search(""), resultsDiv);