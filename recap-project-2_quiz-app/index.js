const bookmarkButton = document.querySelector('[data-js="question-card__icon"]');
const answerButton = document.querySelector ('[data-js="question-card_button"]');
const answerText = document.querySelector('[data-js="question-card__answer"]');



bookmarkButton && bookmarkButton.addEventListener("click", () => {
    if (bookmarkButton.getAttribute("src")==="./assets/bookmark.png") {
        bookmarkButton.setAttribute("src", "./assets/bookmark_filled.png");
    }else{
        bookmarkButton.setAttribute("src", "./assets/bookmark.png");
    }
})


answerButton && answerButton.addEventListener("click", () => {
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

form && form.addEventListener("submit", (event) => {
event.preventDefault();
event.target.reset();
// const formElements = event.target.elements;
const formData = new FormData(event.target);
const data = Object.fromEntries(formData);
// console.log(data);
})

// const newCard = document.createElement(".section question-card");

// document.body.append(newCard);
// console.log(newCard);

const questionField = document.querySelector('[data-js="question-text"]');
const answerField = document.querySelector('[data-js="answer-text"]');
const questionCharacters = document.querySelector('[data-js="question-characters"]');
const answerCharacters = document.querySelector('[data-js="answer-characters"]');

questionField && questionField.addEventListener("input", (event)=>{
charactersLeft(event);
})

answerField && answerField.addEventListener("input", (event)=>{
charactersLeft(event);

})

function charactersLeft (event) {
    const maxLength = event.target.maxLength;
    const amountLeft = (maxLength - event.target.value.length);

    
    if (event.target.name === "question") {
        questionCharacters.textContent = amountLeft + " characters left"
}else{
    answerCharacters.textContent = amountLeft + " characters left"
}    
}



// const lengthLeft = questionField.value;

//     console.log(lengthLeft);

// })
