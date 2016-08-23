var userGuess = document.querySelector('#user-guess');
var guessButton = document.querySelector('#guess');
var clearButton = document.querySelector('#clear');
var displayGuess = document.querySelector('#display-guess');
var randomNumber = randomNumberGenerator();
var displayMessage = document.querySelector('#display-message');
var resetButton = document.querySelector('#reset');

// the "guess" button that will trigger displayUserGuess function to change userInput p tag to the userGuess
guessButton.addEventListener('click',
  function () {
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
  else if (randomNumber < num) {
    displayMessage.innerText = "Sorry, that guess is too high. Try a lower number."
  }
  else {
    displayMessage.innerText = "Sorry, that guess is too low. Try a higher number."
  }
};
//we need an event listener for clicking on the guess button


// the "guess" button that will trigger displayUserGuess function to change userInput p tag to the userGuess
guessButton.addEventListener('click', function(e) {
    e.preventDefault();

    var userGuessValue = getUserGuessValue();
    changeGuess(userGuessValue);
    guessMessage();
  });

//.innerText = userGuess

function changeGuess(text) {
  displayGuess.innerText = text;
}
//this function will get the value of the user input
function getUserGuessValue () {
  return userGuess.value;
}

// clear button notes:
//use querySelector to select input box and refresh/clear it
function clearField (){
  document.getElementById('user-guess').reset();
}

clearButton.addEventListener('click',
  function () {
    clearField();
  });

resetButton.addEventListener('click',function () {
  clearField();
  randomNumber = randomNumberGenerator();
});
