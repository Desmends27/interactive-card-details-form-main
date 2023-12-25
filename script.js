let button = document.querySelector('button');
let complete = document.querySelector('.done');
let form = document.querySelector('form');
let cardNumber = document.querySelector('#cardNumber');
let inputs = document.getElementsByTagName('input');
let inline_input = document.querySelector('.input_error');

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
    errorMessage.classList.add('error-message');
  
    // Check if the input is blank
    if (input.value.trim().length === 0) {
      errorMessage.innerHTML = 'No Blanks allowed';
      if (input.id === 'year'  || input.id === 'month'){
        // Clear existing content before appending
        inline_input.innerHTML = '';
        inline_input.appendChild(errorMessage);
        console.log(inline_input)
      }
      else {
        input.parentNode.appendChild(errorMessage);
      }
    }
    else if (input.id === 'cardNumber' && containsLetter(cardNumber.value)){
      errorMessage.innerHTML = 'Incorrect format, enter only numbers';
      input.parentNode.appendChild(errorMessage);
    }
  }
  
  function containsLetter(str){
    return /[a-zA-Z]/.test(str);
  }
  