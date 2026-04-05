import { characters } from "./characters.js";

const generatePasswordBtn = document.getElementById("generate-btn");
const passwordLengthInput = document.getElementById("password-length");
const lengthValue = document.getElementById("length-value");
const passwordOutputOne = document.getElementById("password-output-one");
const passwordOutputTwo = document.getElementById("password-output-two");

function getRandomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter();
  }
  return password;
}

function showCopied(element) {
  const original = element.textContent;
  if (!original.length) return;

  element.textContent = "Copied!";
  setTimeout(() => {
    element.textContent = original;
  }, 1200);
}

lengthValue.textContent = passwordLengthInput.value;

passwordLengthInput.addEventListener("input", () => {
  lengthValue.textContent = passwordLengthInput.value;
});

generatePasswordBtn.addEventListener("click", () => {
  const passwordLength = Number(passwordLengthInput.value);
  passwordOutputOne.textContent = generatePassword(passwordLength);
  passwordOutputTwo.textContent = generatePassword(passwordLength);
});

passwordOutputOne.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordOutputOne.textContent);
  showCopied(passwordOutputOne);
});

passwordOutputTwo.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordOutputTwo.textContent);
  showCopied(passwordOutputTwo);
});
