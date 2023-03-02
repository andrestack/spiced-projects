const bookmarkButton = document.querySelector('[data-js="question-card__icon"]');
const answerButton = document.querySelector ('[data-js="question-card_button"]');
const answerText = document.querySelector('[data-js="question-card__answer"]');

bookmarkButton.addEventListener("click", () => {
    if (bookmarkButton.getAttribute("src")==="./assets/bookmark.png") {
        bookmarkButton.setAttribute("src", "./assets/bookmark_filled.png");
    }else{
        bookmarkButton.setAttribute("src", "./assets/bookmark.png");
    }
})


answerButton.addEventListener("click", () => {
answerText.classList.toggle("question-card__answer_hidden");
textDisplay();

})

function textDisplay () {
    if(answerButton.textContent === "show answer") {
        answerButton.textContent = "hide answer";
    } else {
        answerButton.textContent = "show answer";
        
    }
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
event.preventDefault();
// const formElements = event.target.elements;
const formData = new FormData(event.target);
const data = Object.fromEntries(formData);
// console.log(data);
})

const newCard = document.createElement(".section question-card");

document.body.append(newCard);
console.log(newCard);
