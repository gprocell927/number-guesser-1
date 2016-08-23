var userGuess = document.querySelector('#user-guess');
var guessButton = document.querySelector('#guess');
var clearButton = document.querySelector('#clear');
var displayGuess = document.querySelector('#display-guess')

//we need an event listener for clicking on the guess button


// the "guess" button that will trigger displayUserGuess function to change userInput p tag to the userGuess
guessButton.addEventListener('click',
  function () {
    debugger;
    var userGuessValue = getUserGuessValue();
    changeGuess(userGuessValue);
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
