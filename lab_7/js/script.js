function checkValue(fieldId) {
    const fieldValue = document.getElementById(fieldId).value;
    return fieldValue.trim() !== '';
}

function checkLength(fieldId, minLength) {
    const fieldValue = document.getElementById(fieldId).value;
    return fieldValue.length >= minLength;
}

function checkEmail(fieldId) {
    const fieldValue = document.getElementById(fieldId).value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue);
}

function checkPasswordStrength(fieldId, minLength) {
    const fieldValue = document.getElementById(fieldId).value;
    return fieldValue.length >= minLength;
}

function validateDateOfBirth(fieldId) {
    const dob = new Date(document.getElementById(fieldId).value);
    const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return dob <= eighteenYearsAgo;
}

function validatePasswordMatch() {
    const password = document.getElementById('haslo2').value;
    const repeatPassword = document.getElementById('powtorz-haslo2').value;
    const passwordMatchError = document.getElementById('passwordMatchError2');
    if (password !== repeatPassword) {
        passwordMatchError.textContent = "*passwords don't match";
        document.getElementById('powtorz-haslo2').setCustomValidity("*passwords don't match");
    } else {
        passwordMatchError.textContent = "";
        document.getElementById('powtorz-haslo2').setCustomValidity('');
    }
}

function validateForm(event) {
    event.preventDefault();

    const nameValid = checkValue('imie2');
    const surnameValid = checkValue('nazwisko2');
    const emailValid = checkEmail('email2');
    const passwordValid = checkLength('haslo2', 8);
    const dobValid = validateDateOfBirth('data-urodzenia2');
    const passwordMatch = document.getElementById('haslo2').value === document.getElementById('powtorz-haslo2').value;

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = ''); 

    if (!nameValid) {
        document.getElementById('nameError').textContent = '*please enter your name';
    }
    if (!surnameValid) {
        document.getElementById('surnameError').textContent = '*please enter your surname';
    }
    if (!emailValid) {
        document.getElementById('emailError').textContent = '*please enter a valid email address';
    }
    if (!passwordValid) {
        document.getElementById('passwordError').textContent = '*password must be at least 8 characters long';
    }
    if (!dobValid) {
        document.getElementById('dobError').textContent = '*you must be at least 18 years old';
    }
    if (!passwordMatch) {
        document.getElementById('passwordMatchError2').textContent = "*passwords don't match";
    }

    if (nameValid && surnameValid && emailValid && passwordValid && dobValid && passwordMatch) {
        event.target.form.submit();
    } else {
        return false;
    }
}


