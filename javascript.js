const body = document.querySelector("body");
const page = document.querySelector(".appContainer");
body.style.backgroundColor = "black";

const header = document.createElement("h1");
header.textContent = "Random Color Generator";
page.appendChild(header);
header.style.height = "5vh";

const paragraph = document.createElement("p");
paragraph.textContent = "Click to copy color to clipboard / space to refresh";
page.appendChild(paragraph);
paragraph.style.height = "5vh";

const colorContainer = document.createElement("div");
colorContainer.style.display = "flex";
page.appendChild(colorContainer);

let height = "90vh";
let width = "20vw";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

for (let i = 5; i > 0; i--) {
  let counter = `element${i}`;
  counter = document.createElement("div");
  counter.style.height = `${height}`;
  counter.style.width = `${width}`;
  let randomRed = Math.floor(Math.random() * 255);
  let randomGreen = Math.floor(Math.random() * 255);
  let randomBlue = Math.floor(Math.random() * 255);
  let randomRGBColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  counter.style.backgroundColor = randomRGBColor;
  colorContainer.appendChild(counter);
  let colorParagraph = document.createElement("p");
  colorParagraph.textContent = randomRGBColor;
  counter.appendChild(colorParagraph);
  counter.style.display = "flex";
  counter.style.justifyContent = "center";
  counter.style.alignItems = "center";
  counter.style.flexDirection = "column";
  let randomHEXColor = rgbToHex(randomRed, randomGreen, randomBlue);
  randomHEXColor = randomHEXColor.toUpperCase();
  let colorHexParagraph = document.createElement("p");
  colorHexParagraph.style.fontSize = "60px";
  colorParagraph.style.fontSize = "40px";
  colorHexParagraph.textContent = randomHEXColor;
  counter.appendChild(colorHexParagraph);
  let span = document.createElement("span");
  counter.appendChild(span);
  counter.addEventListener("click", function () {
    console.log(colorHexParagraph.textContent);
    navigator.clipboard.writeText(colorHexParagraph.textContent);
    span.style.backgroundColor = "white";
    span.style.fontSize = "30px";
    span.textContent = "Copied!";
    setTimeout(() => {
      span.textContent = "";
    }, 1500);
  });
}
body.style.height = "100vh";

page.style.display = "flex";
page.style.alignItems = "center";
page.style.flexDirection = "column";

header.style.color = "red";
paragraph.style.color = "blue";

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    location.reload();
  }
});
