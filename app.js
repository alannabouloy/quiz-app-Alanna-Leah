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
      number: 1,
      question: 'What is the answer?',
      answers: ['A', 'B', 'C', 'D'],
      correctAnswer: 'A',
    },
    {
      number: 2,
      question: 'What is the answer?',
      answers: ['A', 'B', 'C', 'D'],
      correctAnswer: 'B',
    },
    {
      number: 3,
      question: 'What is the answer?',
      answers: ['A', 'B', 'C', 'D'],
      correctAnswer: 'C',
    },
    { 
      number: 4,
      question: 'What is the answer?',
      answers: ['A', 'B', 'C', 'D'],
      correctAnswer: 'D',
    },
    {
      number: 5,
      question: 'What is the answer?',
      answers: ['A', 'B', 'C', 'D'],
      correctAnswer: 'A',},
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
}

function questionTemplate(question){
//switch case of question
//question page html
}

function submittedQuestionTemplate(question, answerGiven, currentScore){
  //question answer html
}

function results(finalScore, finalMessage){
  //results html
}
/********** RENDER FUNCTION(S) **********/
// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderIntroPage(){
  //insert correct HTML
}
function renderQuestionPage(question){
  //render correct question page
}
function renderAnswerPage(question, answer){
  //render correct answer page
}
function renderResultsPage(score){
  //render page with corect score
}

/**********LOGIC FUNCTIONS ************/
function changeScore(){
  //access score property in store
  //add 1 if correct
}

function checkAnswer(){
  //compare userAnswer to correctAnswer
  //return true or false
}

function checkQuestion(){
  //check question number
  //return question number
  //if final question return final
}
/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartQuizClick() {
  //listening for the startQuiz button
  //when clicked render next page
}

function handleAnswerSubmit() {
  //listens for submit button
  //it has to locate which radio button was clicked (create function)
  //add info to store
  //check if answer is correct
  //render appropriate html (function)
  //change score at bottom (function)
  //deliver answer message (function)
}

function handleNextQuestionClick() {}
//listens for button click
//check if final question(function)
//find next question (function) or render last page
//renders next question page

function handleRestartQuizClick() {}
//listen for button click
//take to intro page

function main(){}

//the callback function for the entire page
$(main);
