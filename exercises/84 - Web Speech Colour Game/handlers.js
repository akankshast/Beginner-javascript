import { isValidColor } from "./colors";

function logWords(results) {
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  
  let color = words.toLowerCase();

  color = color.replace(/\s/g, "");

  if (!isValidColor(color)) return; t
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add("got");
  console.log(colorSpan);
  console.log("This is a valid color!");
  console.log(color);r
  document.body.style.backgroundColor = color;
}
