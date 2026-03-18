import { required } from "../utils/assertElements.js";
const resultsDOM = required(".results");
function renderResults(list) {
    const cardList = list
        .map(({ title, snippet, pageid }) => {
        return ` 
        <a "href=http://en.wikipedia.org/?curid=${pageid}" target="_blank">
          <h4>${title}</h4>
          <p>
          ${snippet} 
          </p>
        </a>
    `;
    })
        .join("");
    resultsDOM.innerHTML = `
     <div class="articles">${cardList}</div>
    `;
}
export default renderResults;
