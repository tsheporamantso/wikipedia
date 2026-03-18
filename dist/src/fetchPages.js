var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { url } from "../utils/wiki-urls.js";
import { required } from "../utils/assertElements.js";
import renderResults from "./renderResults.js";
const resultsDOM = required(".results");
function fetchPages(searchValue) {
    return __awaiter(this, void 0, void 0, function* () {
        resultsDOM.innerHTML = `<div class="loading"></div>`;
        try {
            const resp = yield fetch(`${url}${searchValue}`);
            const data = yield resp.json();
            const results = data.query.search;
            if (results.length === 0) {
                resultsDOM.innerHTML =
                    '<div class="error">no matching results please try again</div>';
                return;
            }
            resultsDOM.innerHTML = "";
            renderResults(results);
        }
        catch (error) {
            resultsDOM.innerHTML = '<div class="error">there was an error...</div>';
        }
    });
}
export default fetchPages;
