/* eslint-disable no-console */
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
      submitted: false,
      answeredCorrect: false,
    },
    {
      question: 'What is the current year?',
      answers: ['1970', '2015', '2019', '2005'],
      correctAnswer: '2019',
      submitted: false,
      answeredCorrect: false,
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
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
  let questionPage = `<section class="question">
<header>
  <h1 class="heading">Question ${questionNum + 1} / 5 </h1>
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
            required
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
        <input type="submit" 
        value = "Submit Answer">
      </div>
    </form>
    <div class="score">
      <p>Current Score: ${getScore()}/ 5</p>
    </div>
  </div>
</main>
</section>`;
  //question page html
  console.log('questionTemplate ran: returned questionPage');
  return questionPage;
  //return questionPage;
}

function answerTemplate(questionNum, answerResult, currentScore) {
  //question answer html
  let answerPage = `<section class="question-submitted">
  <header>
    <h1>Question Number ${questionNum + 1} / 5</h1>
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
        <p>Current Score: ${currentScore} / 5</p>
      </div>
    </div>
  </main>
</section>`;
  console.log('submittedQuestionTemplate ran, returned answerPage');
  return answerPage;
}

function resultsTemplate(finalScore, finalMessage) {
  //results html
  let resultsPage = `<section class="results">
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
</section>`
  console.log('resultsTemplate ran, returned resultsPage');
  return resultsPage;
}
/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render(){
  let questionNum = checkQuestion();
  let score = getScore();
  let questionAnswers = getQuestionAnswers(questionNum);
  let answeredCorrect = correctOrNot(questionNum);

  //check if quiz has been started
  if(!store.quizStarted){
    $('body').html(introTemplate);
    console.log('rendered Intro Page');
  }else{
    if(questionNum === store.questions.length - 1){
      if(store.questions[questionNum].submitted){
        $('body').html(resultsTemplate(score, 'This is the final message'));
      }else{
        $('body').html(questionTemplate(questionNum));
      }
    }else{
      if(store.questions[questionNum].submitted){
        $('body').html(answerTemplate(questionNum,answeredCorrect,score));
      }else{
        $('body').html(questionTemplate(questionNum));
      }
    }
  }
  //render start page if not
  //check what question
  //check if question submitted
  //render question or answer page
  //check if quiz is finished 
  //render results page


  console.log('render function ran');
}

/**********LOGIC FUNCTIONS ************/
function changeScore() {
  store.score += 1;
  //access score property in store
  //add 1 if correct
  console.log('renderIntroPage ran');
}

function checkAnswer(questionNum, answer) {
  if(answer === store.questions[questionNum].correctAnswer){
    changeScore();
    store.questions[questionNum].answeredCorrect = true;
    console.log('changeScore ran');
    return true;
  }else{
    return false;
  }
  //compare userAnswer to correctAnswer
  //return true or false
    
}
function recordResult(questionNum, isCorrect){
  store.questions[questionNum].answerResult = isCorrect;
}

function getAnswer(){
  return $('input[name = "answer"]:checked').val();
}

function getScore(){
  return store.score;
}

function getQuestion(questionNum){
  return store.questions[questionNum].question;
}

function getCorrectAnswer(questionNum){
  return store.questions[questionNum].correctAnswer;
}

function getQuestionAnswers(questionNum){
  return store.questions[questionNum].answers;
}

function correctOrNot(questionNum){
  if(store.questions[questionNum].answeredCorrect){
    return 'correct';
  }else{
    return `incorrect; the correct answer was  ${getCorrectAnswer(questionNum)}`;
  }
}

function checkQuestion() {
  //check question number
  console.log('checkQuestion ran');
  return store.questionNumber;
  //return question number
  //if final question return final
  
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartQuizClick() {
  //listening for the startQuiz button
  $('#js-start-form').on('click',  '#js-start-button',event =>{
    event.preventDefault();
    store.quizStarted = true;
    render();
    console.log(store.quizStarted);
  });
  //when clicked render next page
  //console.log('handleStartQuizClick ran');
  //when clicked render next page
  console.log('handleStartQuizClick ran');
}

function handleAnswerSubmit() {
  //listens for submit button
  $('body').on('submit', '#js-question-form',  event =>{
    event.preventDefault();
    let questionNum = checkQuestion();
    let answer = getAnswer(questionNum);
    recordResult(questionNum, checkAnswer(questionNum, answer));
    store.questions[questionNum].submitted = true;
    render();
    store.questionNumber += 1;
    
    console.log('handleAnswerSubmit ran');
  });
  //it has to locate which radio button was clicked (create function)
  //add info to store
  //check if answer is correct
  //render appropriate html (function)
  //change score at bottom (function)
  //deliver answer message (function)
  //console.log('handleAnswerSubmit ran');
}

function handleNextQuestionClick() {
  $('body').on('click', '#js-next-button', event =>{
    event.preventDefault();
    render();
  })
  console.log('handleNextQuestionClick ran');
}
//listens for button click
//check if final question(function)
//find next question (function) or render last page
//renders next question page


function handleRestartQuizClick() {}
//listen for button click
$('body').on('click', '#js-try-again-button', event =>{
  event.preventDefault();
  store.quizStarted = false;
  store.score = 0;
  store.questionNumber = 0;
  store.questions.forEach(question =>{
    question.submitted = false;
    question.answeredCorrect = false;
  });
  render();
})
//take to intro page
console.log('handleRestartQuizClick');

function main() {
  render();
  handleStartQuizClick();
  handleAnswerSubmit();
  handleNextQuestionClick();
  handleRestartQuizClick(); 
}

//the callback function for the entire page
$(main);
