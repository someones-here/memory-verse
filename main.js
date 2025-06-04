import { search } from "./search.js";
import { renderSearchResults } from "./render-memory-verse.js";

// document.getElementById("Search").addEventListener("click", () => {
//     document.getElementById("search-panel").classList.toggle("hidden");
// });

document.getElementById("Filter").addEventListener("click", () => {
    document.getElementById("filter-panel").classList.toggle("hidden");
});

const query = document.getElementById("query");
const submitBtn = document.getElementById("submit-query");
const clearBtn = document.getElementById("clear-query");
const resultsDiv = document.getElementById("results-div");

query.addEventListener("input", () => {
    submitBtn.disabled = !query.checkValidity();
});

submitBtn.addEventListener("click", async () => {
    const results = await search(query);
    renderSearchResults(results, resultsDiv);
});

// clearBtn.addEventListener("click", () => {
//     query.value = "";
// });

query.value = " ";
renderSearchResults(await search(query), resultsDiv);
query.value = "";