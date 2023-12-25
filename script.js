let button = document.querySelector('button');
let complete = document.querySelector('.done');
let form = document.querySelector('form');
let cardNumber = document.querySelector('#cardNumber');
let inputs = document.getElementsByTagName('input');

button.addEventListener('click', () => {
  checkInput(inputs, cardNumber);
  let error_message = document.querySelector('.error-message');
  if (error_message === null){
      complete.classList.remove('hide');
      form.classList.add('hide');
  }
});


function checkInput(inputs) {
  Array.from(inputs).forEach((input) => displayError(input));
}

  function displayError(input){
    let existingErrorMessage = input.parentNode.querySelector('.error-message');
    if (existingErrorMessage) {
      existingErrorMessage.remove();
    }

    let errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.className = 'error-message';
    
    // Check if the input is blank
    if (input.value.trim().length === 0) {
      errorMessage.innerHTML = 'No Blanks allowed';
      input.parentNode.appendChild(errorMessage);
    }
    else  if (input.id === 'cardNumber' && containsLetter(cardNumber.value)){
      errorMessage.innerHTML = 'Incorrect format, enter only numbers';
      input.parentNode.appendChild(errorMessage);
    }
  };
  function containsLetter(str){
  return /[a-zA-Z]/.test(str);
}