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

const buttonsContainer = document.createElement("div");
page.appendChild(buttonsContainer);
buttonsContainer.style.height = "5vh";

let numberOfColors = 5;;

const lessButton = document.createElement("button");
lessButton.textContent = "-";
buttonsContainer.appendChild(lessButton);
lessButton.addEventListener("click", function (event) {
if (numberOfColors > 1) {
lessColors();
}
});

const generateButton = document.createElement("button");
generateButton.textContent = "Generate";
buttonsContainer.appendChild(generateButton);
generateButton.addEventListener("click", function (event) {
generateColors();
});

const moreButton = document.createElement("button");
moreButton.textContent = "+";
buttonsContainer.appendChild(moreButton);
moreButton.addEventListener("click", function (event) {
moreColors();
});

const colorContainer = document.createElement("div");
colorContainer.id = "colorContainer";
colorContainer.style.display = "flex";
page.appendChild(colorContainer);

function moreColors(){
  if (numberOfColors < 16){
    numberOfColors++
    generateColors();
    reportWindowSize();
  }
}
function lessColors(){
  if (numberOfColors > 1){
    numberOfColors--
    generateColors();
    reportWindowSize();
  }
}


function generateColors() {
  while (colorContainer.firstChild) {
    colorContainer.removeChild(colorContainer.firstChild);
  }
  
let colorHeight = "85vh";
let colorWidth = ((window.innerWidth) / numberOfColors) + "px";
  for (let i = numberOfColors; i > 0; i--) {
    let colorSegment = `element${i}`;
    colorSegment = document.createElement("div");
    colorSegment.style.height = `${colorHeight}`;
    colorSegment.style.width = `${colorWidth}`;
    colorSegment.id = "colorSegment"
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    let randomRGBColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    colorSegment.style.backgroundColor = randomRGBColor;
    colorContainer.appendChild(colorSegment);
    let colorParagraph = document.createElement("p");
    colorSegment.appendChild(colorParagraph);
    colorSegment.style.display = "flex";
    colorSegment.style.justifyContent = "center";
    colorSegment.style.alignItems = "center";
    colorSegment.style.flexDirection = "column";
    let randomHEXColor = rgbToHex(randomR, randomG, randomB);
    randomHEXColor = randomHEXColor.toUpperCase();
    let colorHexParagraph = document.createElement("p");


    
    
    colorHexParagraph.id = "hex"
    colorHexParagraph.textContent = randomHEXColor;

    colorSegment.appendChild(colorHexParagraph);
    let span = document.createElement("span");
    span.style.zIndex = 5000;
    span.style.position = "absolute";
    
    colorHexParagraph.style.fontSize = "40px";
    reportWindowSize();
if (numberOfColors > 8 || window.innerWidth < 1200) {
  colorHexParagraph.style.transform = "rotate(270deg)";
}

    span.style.borderBottom = "30px";
    colorSegment.appendChild(span);
    colorSegment.id = "colorSegment"
    colorSegment.addEventListener("click", function () {
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
generateColors();
reportWindowSize();

body.style.height = "100vh";
page.style.display = "flex";
page.style.alignItems = "center";
page.style.flexDirection = "column";

header.style.color = "white";
paragraph.style.color = "white";

document.addEventListener("keydown", function (event) {
  // Lukter etter tastepress og oppdaterer siden når space trykkes
  if (event.key === " ") {
    generateColors();
    reportWindowSize();
  } else if (event.key === "-") {
    if (numberOfColors > 1) {
    lessColors();
    }
  } else if (event.key === "+") {
    moreColors();
  }
  
});

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function reportWindowSize() {
  colorSegment = document.getElementById("colorSegment");
  colorSegment.style.width = window.innerWidth / numberOfColors + "px";
  console.log(numberOfColors)
  let colorWidth = window.innerWidth / numberOfColors + "px";
}
window.addEventListener("resize", reportWindowSize);