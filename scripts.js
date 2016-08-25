var userGuess = document.querySelector('#user-guess');
var guessButton = document.querySelector('#guess');
var displayMessage = document.querySelector('#display-message');
var displayGuess = document.querySelector('#display-guess');

var clearButton = document.querySelector('#clear');
var randomNumber = randomNumberGenerator();
var resetButton = document.querySelector('#reset');

var minButton = document.querySelector('#minButton');
var maxButton = document.querySelector('#maxButton');
var minSet = document.querySelector('#inputMin');
var maxSet = document.querySelector('#inputMax');


function randomNumberGenerator(){
  return parseInt(Math.random() * (parseInt(userGuess.max) - parseInt(userGuess.min)) + 1);
};

function guessMessage () {
  var num = parseInt(userGuess.value);
  if (isNaN(num)) {
    return displayMessage.innerText = "No. Try again."
  };
  if (randomNumber === num)  {
    displayMessage.innerText = "You got it!"
  }
  else if (num <= 0 || num > 100) {
    displayMessage.innerText = "Sorry, that number is not in the available range."
  }
  else if (randomNumber < num) {
    displayMessage.innerText = "Sorry, that guess is too high. Try a lower number."
  }
  else {
    displayMessage.innerText = "Sorry, that guess is too low. Try a higher number."
  }
};

guessButton.addEventListener('click', function (e) {
    e.preventDefault();

    var userGuessValue = getUserGuessValue();
    changeGuess(userGuessValue);
    guessMessage();
    var num = parseInt(userGuess.value);

    if (parseInt(displayGuess.innerText) === num){
      nextLevel();
    };

    resetButton.disabled = false;
  });

  function changeGuess(text) {
    displayGuess.innerText = text;
  };

  function getUserGuessValue () {
    return userGuess.value;
  };

  function nextLevel() {
      userGuess.max = parseInt(userGuess.max) + 10;
      userGuess.min = parseInt(userGuess.min) - 10;
  };

  if (userGuess.value === "") {
    clearButton.disabled = true;
  };

minButton.addEventListener('click', function (e){
    e.preventDefault();
    userGuess.min = parseInt(minSet.value);
    resetButton.disabled = false;
  });

maxButton.addEventListener('click', function (e){
    e.preventDefault();
    userGuess.max = parseInt(maxSet.value);
    resetButton.disabled = false;
  });

  function userSetRange(){
    userGuess.max = parseInt(maxSet.value);
    userGuess.min = parseInt(minSet.value);
  };

clearButton.addEventListener('click',
  function (e) {
    e.preventDefault();
    clearField();
  });

  function clearField (){
    userGuess.value = ''
  };

resetButton.addEventListener('click',function () {
  clearField();
  randomNumber = randomNumberGenerator();
  });

if (userGuess.value === "" && displayMessage.innerText === "") {
  resetButton.disabled = true;
};

userGuess.addEventListener('keydown', function () {
    clearButton.disabled = false;
  });

userGuess.addEventListener('click', function () {
  clearButton.disabled = false;
});
