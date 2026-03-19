import { required } from "../utils/assertElements.js";
import fetchPages from "./fetchPages.js";

const formDOM = required<HTMLFormElement>(".form");
const inputDOM = required<HTMLFormElement>(".form-input");
const resultsDOM = required<HTMLDivElement>(".results");

const voiceBtn = document.createElement("button");
voiceBtn.textContent = "🎤";
voiceBtn.type = "button";
voiceBtn.classList.add("voice__btn");
voiceBtn.classList.add("listening");
formDOM.appendChild(voiceBtn);

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.continuous = false;

recognition.onend = () => {
  voiceBtn.classList.remove("listening");
};

voiceBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = function (event: any) {
  const transcript = event.results[0][0].transcript;

  // put spoken text into input
  inputDOM.value = transcript;

  // 🔥 reuse your existing flow
  fetchPages(transcript);
};

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
