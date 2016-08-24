var userGuess = document.querySelector('#user-guess');
var guessButton = document.querySelector('#guess');
var clearButton = document.querySelector('#clear');
var displayGuess = document.querySelector('#display-guess');
var randomNumber = randomNumberGenerator();
var displayMessage = document.querySelector('#display-message');
var resetButton = document.querySelector('#reset');

function randomNumberGenerator(){
  return parseInt(Math.random() * (10 - 1) + 1);
}

function guessMessage () {
  var num = parseInt(userGuess.value);
  if (isNaN(num)) {
    return displayMessage.innerText = "No."
  }
  if (randomNumber === num)  {
    displayMessage.innerText = "You got it!"
  }

  else if (num < 0 || num > 10) {
    displayMessage.innerText = "Sorry, that number is not in the available range."
  }

  else if (randomNumber < num) {
    displayMessage.innerText = "Sorry, that guess is too high. Try a lower number."
  }

  else {
    displayMessage.innerText = "Sorry, that guess is too low. Try a higher number."

  }
};
//we need an event listener for clicking on the guess button


// the "guess" button that will trigger displayUserGuess function to change userInput p tag to the userGuess
guessButton.addEventListener('click', function (e) {
    e.preventDefault();

    var userGuessValue = getUserGuessValue();
    changeGuess(userGuessValue);
    guessMessage();

    resetButton.disabled = false;

  });


function changeGuess(text) {
  displayGuess.innerText = text;
}

function getUserGuessValue () {
  return userGuess.value;
}

function clearField (){
  document.getElementById('user-guess').reset();
}

clearButton.addEventListener('click',
  function () {
    clearField();
  });

resetButton.addEventListener('click',function () {
  if (randomNumber === parseInt(displayGuess.innerText))  {
    debugger;

  }


  clearField();
  randomNumber = randomNumberGenerator();


});



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
