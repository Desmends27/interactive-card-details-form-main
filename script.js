let button = document.querySelector('button');
let complete = document.querySelector('.done');
let form = document.querySelector('form');
let cardNumber = document.querySelector('#cardNumber');
let cardHolder = document.querySelector('#cardHolder');
let inputs = document.getElementsByTagName('input');
let inline_input = document.querySelector('.input_error');

button.addEventListener('click', () => {
    checkInput(inputs, cardNumber);
    let error_messages = document.querySelectorAll('.error-message');
    if (error_messages.length === 0){
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
    else if (input.id === 'cardHolder' && !containsOnlyLetters(cardHolder.value.trim())){
        errorMessage.innerHTML = 'Incorrect format, enter only letters';
        input.parentNode.appendChild(errorMessage);
    }
    else if (input.id !== 'cardHolder' && !containsNumbers(input.value.trim())){
        errorMessage.innerHTML = 'Incorrect format, enter only numbers';
        input.parentNode.appendChild(errorMessage);
    }
}

function containsOnlyLetters(str) {
    // Remove spaces from the string
    const stringWithoutSpaces = str.replace(/\s/g, '');

    // Check if the modified string contains only letters
    return /^[a-zA-Z]+$/.test(stringWithoutSpaces);
}

function containsNumbers(str){
    const stringWithoutSpaces = str.replace(/\s/g, '');
    return /^[0-9]+$/.test(stringWithoutSpaces);
}