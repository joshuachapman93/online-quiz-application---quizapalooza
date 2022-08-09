// ********** GLOBAL VARIABLES DECLERATIONS **********

// light theme color global variables
const lightBase = '#bdbdbd';
const lightBackground = '#FFFFFF';
const lightShadow = 'rgba(18, 18, 18, .3)';
const lightPrimary = '#6200EE';
const lightPrimaryDark = '#3700B3';
const lightSecondary = '#03DAC6';
const lightSecondaryDark = '#018786';
const lightErrorColor = '#B00020';

// dark theme color global variables
const darkBase = '#1d1d1d';
const darkBackground = '#121212';
const darkShadow = 'rgba(255, 255, 255, .1)'
const darkPrimary = '#BB86FC';
const darkPrimaryDark = '#3700B3';
const darkSecondary = '#03DAC6';
const darkErrorColor = '#CF6679';

// html elements global variables
const headerHTML = document.querySelector('header');
const footerHTML = document.querySelector('footer');
const shadowPanel = document.getElementsByClassName('shadow-panel');

// menu global variables
const startMenu = document.querySelector('#Start-Menu');
const failedMenus = document.querySelectorAll('.fail-notice');
const failedMenuAnswer = document.querySelector('#Failed-Menu-Answer');
const failedMenuTime = document.querySelector('#Failed-Menu-Time');
const nothingSelectedNotice = document.querySelector('#Nothing-Selected-Notice');
const winnerPanel = document.querySelector('#You-Won');
const quittingPugPanel = document.getElementsByClassName('quitting-pug');

// button global variables
const startButton = document.querySelector('#Start-Button');
const nextButton = document.querySelector('#Next-Button');
const closeButton = document.querySelector('#Close-Button');
const retryButton = document.querySelector('#Retry-Button');
const quitButton = document.querySelector('#Quit-Button');
const currentButtonColor = lightSecondaryDark;
let quizIterationCount = 0;

// question collections global variables
const questions = document.getElementsByClassName('question');
const questionOne = document.querySelector('#Question-One');
const questionTwo = document.querySelector('#Question-Two');
const questionThree = document.querySelector('#Question-Three');
const questionOneForm = document.querySelector('#Question-One > form');
const questionTwoForm = document.querySelector('#Question-Two > form');
const questionThreeForm = document.querySelector('#Question-Three > form');

// answer collections global variables
const allAnswers = document.querySelectorAll('.answer');
const correctAnswers = document.getElementsByClassName('correct-answer');
const wrongAnswers = document.getElementsByClassName('wrong-answer');
const questionOneWrongAnswers = questionOneForm.querySelectorAll('.wrong-answer');
const questionTwoWrongAnswers = questionTwoForm.querySelectorAll('.wrong-answer');
const questionThreeWrongAnswers = questionThreeForm.querySelectorAll('.wrong-answer');

// footer panels global variables
const quizFooterElements = document.querySelector('#Quiz-Button-Wrap');
const startFooterElements = document.querySelector('#Start-Button-Wrap');
const menuFooterElements = document.querySelector('#Retry-Button-Wrap');

// timer global variables
const minutesCounter = document.getElementById("timer-mins");
const secondsCounter = document.getElementById("timer-secs");

// test completion and puppy images global variables
const puppiesSmall = document.getElementsByClassName('puppies-small-img');
const puppiesMedium = document.getElementsByClassName('puppies-medium-img');
const quittingPugSmall = document.getElementsByClassName('quitting-puppy-small');
const quittingPugMedium = document.getElementsByClassName('quitting-puppy-medium');
let testCompleted = false;
let testCompletedCounter = 0;
