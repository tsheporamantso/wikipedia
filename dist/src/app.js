import { required } from "../utils/assertElements.js";
import fetchPages from "./fetchPages.js";
import "./voiceAgent.js";
const formDOM = required(".form");
const inputDOM = required(".form-input");
const resultsDOM = required(".results");
formDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = inputDOM.value;
    if (!value) {
        resultsDOM.innerHTML =
            '<div class="error">please enter valid search term</div>';
        return;
    }
    resultsDOM.innerHTML = "";
    fetchPages(value);
});
