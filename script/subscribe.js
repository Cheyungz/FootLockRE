document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value.trim();
    if (name === '') {
        alert('Please enter your full name.');
        nameInput.focus();
        return;
    }

    var emailInput = document.getElementById('email');
    var email = emailInput.value.trim();
    if (email === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return;
    }
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    var phoneInput = document.getElementById('phone');
    var phoneNumber = phoneInput.value.trim();
    if (phoneNumber === '') {
        alert('Please enter your phone number.');
        phoneInput.focus();
        return;
    }
    if (!isNumeric(phoneNumber)) {
        alert('Please enter a valid phone number.');
        phoneInput.focus();
        return;
    }
    
    var countryInput = document.getElementById('country');
    var country = countryInput.value;
    if (country === '') {
        alert('Please select your country.');
        countryInput.focus();
        return;
    }
    
    var checkboxInput = document.getElementById('checkbox');
    if (!checkboxInput.checked) {
        alert('Please agree to the Terms and Conditions.');
        checkboxInput.focus();
        return;
    }
    
    alert('Form submitted successfully!');

    console.log("Subscriber data")
    console.log("========================")
    console.log(name)
    console.log(email)
    console.log(phoneNumber)
    console.log(country)
    
});

function isValidEmail(email) {
    var atIndex = email.indexOf('@');
    var dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}

function isNumeric(str) {
    if (str.charAt(0) === '+') {
        for (var i = 1; i < str.length; i++) {
            if (!isDigit(str.charAt(i))) {
                return false;
            }
        }
        return true;
    }
    else if (isDigit(str)) {
        return true;
    }
    else {
        return false;
    }
}

function isDigit(char) {
    return /^\d$/.test(char);
}