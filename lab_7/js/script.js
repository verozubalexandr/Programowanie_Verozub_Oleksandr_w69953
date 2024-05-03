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

function toggleCorrespondenceAddress() {
    const checkbox = document.getElementById('korespondencyjny');
    const correspondenceAddress = document.getElementById('adresKorespondencyjny');
    const correspondenceAddressBlock = document.getElementById('input_mailing_address');
    if (checkbox.checked) {
        correspondenceAddress.disabled = true;
        correspondenceAddress.value = "";
        correspondenceAddressBlock.style = "display: none;"
    } else {
        correspondenceAddressBlock.style = "display: flex;"
        if (document.getElementById('wojewodztwo').value || document.getElementById('wojewodztwo-input').value) {
            correspondenceAddress.disabled = false;
        }
    }
}

function updateVoivodeshipField() {
    const country = document.getElementById('kraj2').value.toLowerCase();
    const voivodeshipField = document.getElementById('wojewodztwo');
    const voivodeshipInput = document.getElementById('wojewodztwo-input');
    if (country === "poland") {
        voivodeshipField.style = "display: block;"
        voivodeshipField.disabled = false;
        voivodeshipField.innerHTML = `
        <option value="Zachodniopomorskie">Zachodniopomorskie</option>
        <option value="Pomorskie">Pomorskie</option>
        <option value="Warmińsko-Mazurskie">Warmińsko-Mazurskie</option>
        <option value="Lubuskie">Lubuskie</option>
        <option value="Wielkopolskie">Wielkopolskie</option>
        <option value="Kujawsko-Pomorskie">Kujawsko-Pomorskie</option>
        <option value="Mazowieckie">Mazowieckie</option>
        <option value="Podlaskie">Podlaskie</option>
        <option value="Dolnośląskie">Dolnośląskie</option>
        <option value="Łódzkie">Łódzkie</option>
        <option value="Lubelskie">Lubelskie</option>
        <option value="Opolskie">Opolskie</option>
        <option value="Śląskie">Śląskie</option>
        <option value="Świętokrzyskie">Świętokrzyskie</option>
        <option value="Małopolskie">Małopolskie</option>
        <option value="Podkarpackie">Podkarpackie</option>
        `;
        voivodeshipInput.disabled = true;
        voivodeshipInput.style = "display: none;"
    } else if (country != "-") {
        voivodeshipField.disabled = true;
        voivodeshipField.style = "display: none;"
        voivodeshipField.innerHTML = "";
        voivodeshipInput.disabled = false;
        voivodeshipInput.style = "display: flex;"
    } else {
        voivodeshipField.disabled = true;
        voivodeshipField.style = "display: none;"
        voivodeshipField.innerHTML = "";
        voivodeshipInput.disabled = true;
        voivodeshipInput.style = "display: flex;"
    }

    toggleAddressInput();
}

updateVoivodeshipField()

function toggleAddressInput() {
    const country = document.getElementById('kraj2').value.toLowerCase();
    const voivodeshipField = document.getElementById('wojewodztwo');
    const voivodeshipInput = document.getElementById('wojewodztwo-input');
    if ((voivodeshipField.value && country == 'poland') || (voivodeshipInput.value && country == 'other')) {
        document.getElementById('adresKorespondencyjny').disabled = false;
        document.getElementById('adres').disabled = false;
    } else {
        document.getElementById('adresKorespondencyjny').disabled = true;
        document.getElementById('adres').disabled = true;
    }
}


// Function to limit phone field to digits only
function limitPhoneToDigits(event) {
    const phoneField = document.getElementById('telefon2');
    phoneField.value = phoneField.value.replace(/\D/g, '');
}

// Event listeners
document.getElementById('korespondencyjny').addEventListener('change', toggleCorrespondenceAddress);
document.getElementById('kraj2').addEventListener('change', updateVoivodeshipField);
document.getElementById('telefon2').addEventListener('input', limitPhoneToDigits);

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




