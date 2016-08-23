var userGuess = document.getElementByID('userGuess').value;
var guessButton = document.querySelector('#guess');
var clearButton = document.querySelector('#clear');

//we need an event listener for clicking on the guess button


// the "guess" button that will trigger displayUserGuess function to change userInput p tag to the userGuess
guessButton.addEventListener('click',
  function () {
    changeGuess(displayGuess,userGuess);
  });

//.innerText = userGuess

function changeGuess(element, text) {
  displayGuess.innerText = text;
}


// clear button notes:
//use querySelector to select input box and refresh/clear it
function clearField (){
  document.getElementById('userGuess').reset();
}

clearButton.addEventListener('click',
  function () {
    clearField();
  };
