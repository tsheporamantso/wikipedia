import { required } from "../utils/assertElements.js";
import { page_url } from "../utils/wiki-urls.js";

type ResultsType = {
  ns: number;
  pageid: number;
  size: number;
  snippet: string;
  timestamp: string;
  title: string;
  wordcount: number;
};

const resultsDOM = required<HTMLDivElement>(".results");

function renderResults(list: ResultsType[]) {
  const cardList = list
    .map(({ title, snippet, pageid }) => {
      return ` 
        <a href=${page_url}${pageid} target="_blank">
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
