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

let colorHeight = "90vh";
let colorWidth = "20vw";




function generateColors(){
  while (colorContainer.firstChild) {
    colorContainer.removeChild(colorContainer.firstChild);
}
  for (let i = 5; i > 0; i--) {

    let colorSegment = `element${i}`;
    colorSegment = document.createElement("div");
    colorSegment.style.height = `${colorHeight}`;
    colorSegment.style.width = `${colorWidth}`;
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    let randomRGBColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    colorSegment.style.backgroundColor = randomRGBColor;  
    colorContainer.appendChild(colorSegment);
    let colorParagraph = document.createElement("p");
    colorParagraph.textContent = randomRGBColor;
    colorSegment.appendChild(colorParagraph);
    colorSegment.style.display = "flex";
    colorSegment.style.justifyContent = "center";
    colorSegment.style.alignItems = "center";
    colorSegment.style.flexDirection = "column";
    let randomHEXColor = rgbToHex(randomR, randomG, randomB);
    randomHEXColor = randomHEXColor.toUpperCase();
    let colorHexParagraph = document.createElement("p");
    colorHexParagraph.style.fontSize = "60px";
    colorParagraph.style.fontSize = "40px";
    colorHexParagraph.textContent = randomHEXColor;
    colorSegment.appendChild(colorHexParagraph);
    let span = document.createElement("span");
    colorSegment.appendChild(span);
    colorSegment.addEventListener("click", function () {
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
}
generateColors()

body.style.height = "100vh";

page.style.display = "flex";
page.style.alignItems = "center";
page.style.flexDirection = "column";

header.style.color = "white";
paragraph.style.color = "white";

document.addEventListener("keydown", function (event) {     // Lukter etter tastepress og oppdaterer siden når space trykkes
  if (event.key === " ") {
    generateColors(); 
  }
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }