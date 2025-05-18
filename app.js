const containerEl = document.querySelector(".container");

const advices = ["it's necessary to always be learning", "it's necessary to write clean, readable code", "it's necessary to test your code rigorously", "it's necessary to become a strong problem-solver"];

let adviceIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
    <h1>To be a web developer, ${advices[adviceIndex].slice(0, characterIndex)}</h1>
    `;
    if (characterIndex === advices[adviceIndex].length) {
        adviceIndex++;
        characterIndex = 0;
    }
    if(adviceIndex === advices.length){
        adviceIndex = 0;
    }

    setTimeout(updateText, 400);
}