const radioFriday = document.getElementById('radioFriday');
const radioEvent = document.getElementById('radioEvent');
const bookingFormEvent = document.getElementById('bookingFormEvent');
const bookingFormFriday = document.getElementById('bookingFormFriday');
const formLeft = document.getElementsByClassName('form-left')[0];

function removeRadioErrors() {
    radioFriday.classList.remove('has-error');
    radioEvent.classList.remove('has-error');
}

radioEvent.addEventListener('click', function () {
    let radioError = document.getElementsByClassName('radio-error')[0];
    if (radioEvent.checked) {
        hideFormFriday();
        radioError.classList.add('fade-out');
        removeRadioErrors();
        formLeft.classList.add('translate-zero')
    } else {
        hideFormEvent()
    }
})

// get elem by class .form-left > add .translate-zero to classlist

radioFriday.addEventListener('click', function () {
    let radioError = document.getElementsByClassName('radio-error')[0];
    if (radioFriday.checked) {
        hideFormEvent()
        radioError.classList.add('fade-out');
        removeRadioErrors();
        formLeft.classList.add('translate-zero')
    } else {
        hideFormFriday()
    }
})


function hideFormFriday () {
    bookingFormFriday.classList.add('fade-out');
    setTimeout(function () {
        bookingFormEvent.classList.remove('fade-out');
    }, 300)
}

function hideFormEvent () {
    bookingFormEvent.classList.add('fade-out');
    setTimeout(function () {
        bookingFormFriday.classList.remove('fade-out');
    }, 300)
}