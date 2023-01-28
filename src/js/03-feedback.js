import { onInput } from "./functions-for-form.js"
import {onTextArea} from "./functions-for-form.js"

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea");


input.addEventListener("input", onInput)

textArea.addEventListener("input", onTextArea)

form.addEventListener("submit", ({target}) => {
  event.preventDefault();
  const { elements: { email, message } } = target;
  if (email.value === "" || message.value === "") {
      alert("Всі поля повинні бути заповнені!");
  } else {
      console.log({ "email": email.value, "message": message.value });
      form.reset();
  }
})


