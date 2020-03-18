

// event listeners

function eventListeners() {

    const showBtn = document.getElementById("show-btn");
    const questionCard = document.querySelector(".question-card");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("question-form");
    const feedback = document.querySelector(".feedback");
    const questionInput = document.getElementById("question-input");
    const answerInput = document.getElementById("answer-input");
    const questionList = document.getElementById("questions-list");
    let data = [];
    let id = 1;

    // new ui instance

    const ui = new UI();

    // show question form
    showBtn.addEventListener('click', function () {
        ui.showQuestion(questionCard);
    })

    // hide question form
    closeBtn.addEventListener('click', function () {
        ui.hideQuestion(questionCard);
    })

    // add question

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const questionValue = questionInput.value;
        const answerValue = answerInput.value;

        if (questionValue === '' || answerValue === '') {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.textContent = `cannot add empty values`;


            setTimeout(function () {
                feedback.classList.remove('showItem', 'alert-danger');
            }, 4000)
        } else {
            const question = new Question(id, questionValue, answerValue);

            data.push(question);
            id++;
            ui.addQuestion(questionList, question);
            ui.clearFields(questionInput, answerInput);
            
        }

    })

}

// UI constructor

function UI() {

}

// show qusetion card
UI.prototype.showQuestion = function (element) {

    element.classList.add('showItem');
}

// hide question card

UI.prototype.hideQuestion = function (element) {

    element.classList.remove('showItem');
};

// add question
UI.prototype.addQuestion = function(element, question) {

    const div = document.createElement('div');
    div.classList.add('col-md-4');
    div.innerHTML = `
    <div class="card card-body flashcard my-3">
    <h4 class="text-capitalize">${question.title}</h4>
    <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
    <h5 class="answer mb-3">${question.answer}</h5>
    <div class="flashcard-btn d-flex justify-content-between">

     <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${question.id}">edit</a>
     <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
    </div>
   </div>
    `
    element.appendChild(div);
}

// clear fields
UI.prototype.clearFields = function (question, answer) {

    question.value = '';
    answer.value = '';
}

// question constructor
function Question(id, title, answer) {

    this.id = id;
    this.title = title;
    this.answer = answer;
}

// dom event listener

document.addEventListener('DOMContentLoaded', function () {
    eventListeners();
})


























































/*
showBtn.addEventListener('click', function() {

    questionCard.classList.add('showItem');
})

closeBtn.addEventListener('click', function() {
    questionCard.classList.remove('showItem');
})

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const question = document.getElementById('question-input');
    const answer = document.getElementById('answer-input');


    const information = new Information(question.value, answer.value);
    console.log(information);
    const flashcard =  new Flashcard();

    flashcard.validateField(information);


})

document.getElementById('delete-flashcard').addEventListener('click', function(event) {

    const cards = document.querySelectorAll('.flashcard');

    console.log(cards);

    cards.forEach(card => {

        card.style.display = 'none';
    })

})

function Flashcard() {

    this.question = document.getElementById('question-input');
    this.answer = document.getElementById('answer-input');
    this.questionList = document.getElementById("questions-list");
}

Flashcard.prototype.validateField = function(information) {

    const feedback = document.querySelector(".feedback");

    if(this.question.value === '' && this.answer.value === '') {
        feedback.classList.add('showItem', 'alert', 'alert-danger');
        feedback.innerHTML = `<p>Cannot Add Empty Values</p>`
    } else {
        this.addFlashCard(information);
    }

    setTimeout(function() {
        feedback.classList.remove('showItem', 'alert', 'alert-danger');
    }, 4000)

}

Flashcard.prototype.addFlashCard = function(information) {

    const div = document.createElement('div');
    div.classList.add('col-md-4');
    div.innerHTML = `
    <div class="card card-body flashcard my-3">
    <h4 class="text-capitalize">${information.question}</h4>
    <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
    <h5 class="answer mb-3">${information.answer}</h5>
    <div class="flashcard-btn d-flex justify-content-between">

     <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
     <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
    </div>
   </div>
    `

    this.questionList.appendChild(div);
}

function Information(question, answer) {

    this.question = question;
    this.answer = answer;
}
*/