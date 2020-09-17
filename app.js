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
  userAnswers:[
    {
      question: 1,
      answer: '',
      correct: false,

    },
    {
      question: 2,
      answer: '',
      correct: false,
    }
  ]
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
function introTemplate(){
  //html for intro page
  console.log('introTemplate ran')
}

function questionTemplate(question){
//switch case of question
//question page html
console.log('questionTemplate ran')
}

function submittedQuestionTemplate(question, answerGiven, currentScore){
  //question answer html
  console.log('renderIntroPage ran')
}

function results(finalScore, finalMessage){
  //results html
  console.log('submittedQuestionTemplate ran')
}
/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderIntroPage(){
  //insert correct HTML
  console.log('renderIntroPage ran')
}
function renderQuestionPage(question){
  //render correct question page
  console.log('renderQuestionPage ran')
}
function renderAnswerPage(question, answer){
  //render correct answer page
  console.log('renderAnswerPage ran')
}
function renderResultsPage(score){
  //render page with corect score
  console.log('renderResultsPage ran')
}

/**********LOGIC FUNCTIONS ************/
function changeScore(){
  //access score property in store
  //add 1 if correct
  console.log('renderIntroPage ran')
}

function checkAnswer(){
  //compare userAnswer to correctAnswer
  //return true or false
  console.log('changeScore ran')
}

function checkQuestion(){
  //check question number
  //return question number
  //if final question return final
  console.log('checkQuestion ran')
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartQuizClick() {
  //listening for the startQuiz button
  //when clicked render next page
  console.log('handleStartQuizClick ran')
}

function handleAnswerSubmit() {
  //listens for submit button
  //it has to locate which radio button was clicked (create function)
  //add info to store
  //check if answer is correct
  //render appropriate html (function)
  //change score at bottom (function)
  //deliver answer message (function)
  console.log('handleAnswerSubmit ran')
}

function handleNextQuestionClick() {}
//listens for button click
//check if final question(function)
//find next question (function) or render last page
//renders next question page
console.log('handleNextQuestionClick ran')

function handleRestartQuizClick() {}
//listen for button click
//take to intro page
console.log('handleRestartQuizClick')

function main(){
  introTemplate();
  questionTemplate();
  renderAnswerPage();
  renderResultsPage();
  changeScore();
  checkAnswer();
  checkQuestion();
  handleStartQuizClick();
  handleAnswerSubmit();
  handleNextQuestionClick();
  handleRestartQuizClick();
}

//the callback function for the entire page
$(main);
