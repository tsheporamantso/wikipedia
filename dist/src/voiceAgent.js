import { required } from "../utils/assertElements.js";
import fetchPages from "./fetchPages.js";
const formDOM = required(".form");
const inputDOM = required(".form-input");
const voiceBtn = document.createElement("button");
voiceBtn.textContent = "🎤";
voiceBtn.type = "button";
voiceBtn.classList.add("voice__btn");
voiceBtn.classList.add("listening");
formDOM.appendChild(voiceBtn);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false;
recognition.onend = () => {
    voiceBtn.classList.remove("listening");
};
voiceBtn.addEventListener("click", () => {
    recognition.start();
});
recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    inputDOM.value = transcript;
    fetchPages(transcript);
};
