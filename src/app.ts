import { required } from "../utils/assertElements.js";
import { url, page_url } from "../utils/wiki-urls.js";
import fetchPages from "./fetchPages.js";

const formDOM = required<HTMLFormElement>(".form");
const inputDOM = required<HTMLFormElement>(".form-input");
const resultsDOM = required<HTMLDivElement>(".results");

formDOM.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = inputDOM.value;
  if (!value) {
    resultsDOM.innerHTML =
      '<div class="error">please enter valid search term</div>';
    return;
  }
  // clear previous error
  resultsDOM.innerHTML = "";
  fetchPages(value);
});
