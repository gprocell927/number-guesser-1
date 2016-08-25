var userGuess = document.querySelector('#user-guess');
var guessButton = document.querySelector('#guess');
var clearButton = document.querySelector('#clear');
var displayGuess = document.querySelector('#display-guess');
var randomNumber = randomNumberGenerator();
var displayMessage = document.querySelector('#display-message');
var resetButton = document.querySelector('#reset');
var minButton = document.querySelector('#inputMin');
var maxButton = document.querySelector('#inputMax');

minButton.addEventListener('click', function (e) {

    var userMinValue = inputMin.value;
    userGuess.min = userMinValue;
    resetButton.disabled = false;
  });

  maxButton.addEventListener('click', function (e) {

      var userMaxValue = inputMax.value;
      userGuess.max = userMaxValue;
      resetButton.disabled = false;
    });



function randomNumberGenerator(){
  return parseInt(Math.random() * (userGuess.max - userGuess.min) + 1);
}

function guessMessage () {
  var num = parseInt(userGuess.value);
  if (isNaN(num)) {
    return displayMessage.innerText = "No. Try again."
  }
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
}

function getUserGuessValue () {
  return userGuess.value;
}

function clearField (){
  userGuess.value = ''
}

clearButton.addEventListener('click',
  function () {
    clearField();
  });

resetButton.addEventListener('click',function () {
  clearField();
  randomNumber = randomNumberGenerator();
  });


function nextLevel() {
    userGuess.max = parseInt(userGuess.max) + 10;
    userGuess.min = parseInt(userGuess.min) - 10;
};

if (userGuess.value === "") {
  clearButton.disabled = true;
}

if (userGuess.value === "" && displayMessage.innerText === "") {
  resetButton.disabled = true;
};

userGuess.addEventListener('keydown', function () {
    clearButton.disabled = false;
  });

userGuess.addEventListener('click', function () {
  clearButton.disabled = false;
});
