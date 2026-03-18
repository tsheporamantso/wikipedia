import { url } from "../utils/wiki-urls.js";
import { required } from "../utils/assertElements.js";
import renderResults from "./renderResults.js";

const resultsDOM = required<HTMLDivElement>(".results");

async function fetchPages(searchValue: string) {
  resultsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const resp = await fetch(`${url}${searchValue}`);
    const data = await resp.json();
    const results = data.query.search;
    if (results.length === 0) {
      resultsDOM.innerHTML =
        '<div class="error">no matching results please try again</div>';
      return;
    }
    resultsDOM.innerHTML = "";
    renderResults(results);
  } catch (error) {
    resultsDOM.innerHTML = '<div class="error">there was an error...</div>';
  }
}

export default fetchPages;
