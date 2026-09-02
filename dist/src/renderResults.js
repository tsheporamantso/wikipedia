import { required } from "../utils/assertElements.js";
import { page_url } from "../utils/wiki-urls.js";
const resultsDOM = required(".results");
function renderResults(list) {
    const cardList = list
        .map(({ title, snippet, pageid }, index) => {
        const rank = index + 1 < 10 ? "0" + (index + 1) : String(index + 1);
        return `
        <a href=${page_url}${pageid} target="_blank" class="plate">
          <span class="rank">${rank}</span>
          <h4>${title}</h4>
          <p>${snippet}</p>
        </a>
    `;
    })
        .join("");
    resultsDOM.innerHTML = `
     <div class="articles">${cardList}</div>
    `;
}
export default renderResults;
