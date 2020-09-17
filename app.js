/* eslint-disable strict */
/**
 * Example store structure
 */
/*global $*/
'user strict';

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: ['red', 'orange', 'pink', 'green'],
      correctAnswer: 'green',
    },
    {
      question: 'What is the current year?',
      answers: ['1970', '2015', '2019', '2005'],
      correctAnswer: '2019',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  userAnswers: [
    {
      question: 1,
      answer: '',
      correct: false,
    },
    {
      question: 2,
      answer: '',
      correct: false,
    },
  ],
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function introTemplate() {
  let introPage = `<section class="intro">
  <header>
    <h1 class="heading">Welcome to This Quiz</h1>
  </header>
  <main>
    <div class="text-box">
      <p>Welcome message to quiz and basic instructions</p>
    </div>
    <div class="start-button">
      <form id="js-start-form">
        <div>
          <button id="js-start-button">Start Quiz!</button>
        </div>
      </form>
    </div>
  </main>
</section>`;
  //html for intro page
  console.log('introTemplate ran: returned introPage');
  return introPage;
}

function questionTemplate(questionNum) {
  /*let questionPage = `<section class="question">
<header>
  <h1 class="heading">Question Number Goes Here</h1>
</header>
<main>
  <div>
    <form id="js-question-form">
      <div class="text-box">
        <p>${store.questions[questionNum].question}</p>
        <div>
          <input
            type="radio"
            id="answer-1"
            name="answer"
            value="${store.questions[questionNum].answers[0]}"
          />
          <label for="answer-1">${store.questions[questionNum].answers[0]}</label>
        </div>
        <div>
          <input
            type="radio"
            id="answer-2"
            name="answer"
            value="${store.questions[questionNum].answers[1]}"
          />
          <label for="answer-2">${store.questions[questionNum].answers[1]}</label>
        </div>
        <div>
          <input
            type="radio"
            id="answer-3"
            name="answer"
            value="${store.questions[questionNum].answers[2]}"
          />
          <label for="answer-3">${store.questions[questionNum].answers[2]}</label>
        </div>
        <div>
          <input
            type="radio"
            id="answer-4"
            name="answer"
            value="${store.questions[questionNum].answers[3]}"
          />
          <label for="answer-4">${store.questions[questionNum].answers[3]}</label>
        </div>
      </div>
      <div class="button">
        <input
          id="js-submit-answer-button"
          type="submit"
          value="Submit Answer"
        />
      </div>
    </form>
    <div class="score">
      <p>Current Score: 0 incorrect 0 correct</p>
    </div>
  </div>
</main>
</section>`;
  //question page html*/
  console.log('questionTemplate ran: returned questionPage');
  //return questionPage;
}

function answerTemplate(questionNum, answerResult, currentScore) {
  //question answer html
  /*let answerPage = `<section class="question-submitted">
  <header>
    <h1>Question Number ${questionNum + 1}</h1>
    <h2>You got that question ${answerResult}!</h2>
  </header>
  <main>
    <div class="text-box">
      <p>${store.questions[questionNum].question}</p>
      <div class="list">
        <ul>
          <li>${store.questions[questionNum].answers[0]}</li>
          <li>${store.questions[questionNum].answers[1]}</li>
          <li>${store.questions[questionNum].answers[2]}</li>
          <li>${store.questions[questionNum].answers[3]}</li>
        </ul>
      </div>
    </div>
    <div>
      <form id="js-next-question">
        <div class="button">
          <button id="js-next-button">Next Question</button>
        </div>
      </form>
      <div class="score">
        <p>Current Score: ${currentScore}</p>
      </div>
    </div>
  </main>
</section>`;*/
  console.log('submittedQuestionTemplate ran, returned answerPage');
  //return answerPage;
}

function resultsTemplate(finalScore, finalMessage) {
  //results html
  /*let resultsPage = `<section class="results">
  <header>
    <h1>Your Results!</h1>
  </header>
  <div class="text-box">
    <div class="score">
      <h2>${finalScore}/5 Correct</h2>
    </div>
    <div>
      <p>${finalMessage}</p>
    </div>
    <div class="try-again">
      <form id="js-try-again">
        <button id="js-try-again-button">Try Again!</button>
      </form>
    </div>
  </div>
</section>`;*/
  console.log('resultsTemplate ran, returned resultsPage');
  //return resultsPage;
}
/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderIntroPage() {
  //insert correct HTML
  let introPage = introTemplate();
  $('body').html(introPage);
  console.log('renderIntroPage ran')  //const introPageHtml = introTemplate();
}
function renderQuestionPage(questionNum) {
  //render correct question page
  questionTemplate();
  console.log('renderQuestionPage ran')
 // const questionPageHtml = quesitonTemplate(0);
}
function renderAnswerPage(question, answer) {
  //render correct answer page
  answerTemplate();
  console.log('renderAnswerPage ran')
  //const submittedQuestionPageHtml = submittedQuesitonTemplate(question, 'correct', store.score);
}
function renderResultsPage(score) {
  //render page with corect score
  resultsTemplate();
  console.log('renderResultsPage ran')
  //const resultsPageHtml = resultsTemplate(score);

}

/**********LOGIC FUNCTIONS ************/
function changeScore() {
  //access score property in store
  //add 1 if correct
  console.log('renderIntroPage ran');
}

function checkAnswer() {
  //compare userAnswer to correctAnswer
  //return true or false
  console.log('changeScore ran');
}

function checkQuestion() {
  //check question number
  //return question number
  //if final question return final
  console.log('checkQuestion ran');
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartQuizClick() {
  //listening for the startQuiz button
  $('#js-start-form').on('click',  '#js-start-button',event =>{
    event.preventDefault();
    renderQuestionPage();
  })
  //when clicked render next page
  //console.log('handleStartQuizClick ran');
}

function handleAnswerSubmit() {
  //listens for submit button
  //it has to locate which radio button was clicked (create function)
  //add info to store
  //check if answer is correct
  //render appropriate html (function)
  //change score at bottom (function)
  //deliver answer message (function)
  renderAnswerPage();
  console.log('handleAnswerSubmit ran');
}

function handleNextQuestionClick() {}
//listens for button click
//check if final question(function)
//find next question (function) or render last page
//renders next question page
renderResultsPage();
console.log('handleNextQuestionClick ran');

function handleRestartQuizClick() {}
//listen for button click
//take to intro page
console.log('handleRestartQuizClick');

function main() {
  renderIntroPage();
  handleStartQuizClick();
  handleAnswerSubmit();
  handleNextQuestionClick();
  handleRestartQuizClick();
  changeScore();
  checkAnswer();
  checkQuestion(); 
}

//the callback function for the entire page
$(main);
