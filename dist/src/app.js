import { required } from "../utils/assertElements.js";
import fetchPages from "./fetchPages.js";
import "./themeToggle.js";
import "./voiceAgent.js";
const formDOM = required(".form");
const inputDOM = required(".form-input");
const resultsDOM = required(".results");
formDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = inputDOM.value;
    if (!value) {
        resultsDOM.innerHTML =
            '<div class="error">Enter a search term to consult the stacks.</div>';
        return;
    }
    resultsDOM.innerHTML = "";
    fetchPages(value);
});
