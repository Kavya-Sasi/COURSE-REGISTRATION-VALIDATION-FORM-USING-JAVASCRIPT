const form = document.querySelector('#form')
const userName = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password1')
const confirmPassword = document.querySelector('#password2')
const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const phoneNum = document.querySelector('#phonenum')
const aGe = document.querySelector('#age')
const errorMsg = document.querySelector('.form-control small')
const submitBtn = document.querySelector('#btn')
const resetBtn = document.querySelector('#btn2')
const msgplace = document.querySelector('.form-control #msgplace')


const checkUsername = () => {
    let valid = false;
    const min = 8,
        max = 25;
    const username = userName.value.trim();
    if (!isRequired(username))
    {
        showError(userName, 'Username cannot be blank.');
    }
    else if (!isBetween(username.length, min, max))
    {
        showError(userName, `Username must be between ${min} and ${max} characters.`)
    }
    else
    {
        showSuccess(userName);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const emailValue = email.value.trim();
    if (!isRequired(emailValue))
    {
        showError(email, 'Email cannot be blank.');
    }
    else if (!isEmailValid(emailValue))
    {
        showError(email, 'Email is not valid.')
    }
    else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const passwordValue = password.value.trim();
    if (!isRequired(passwordValue))
    {
        showError(password, 'Password cannot be blank.');
    }
    else if (!isPasswordSecure(passwordValue))
    {
    showError(password, 'Invalid Password!');
    alert('Password should contain 8 characters, 1 lowercase and uppercase letter, 1 number and 1 special character(!@#$%^&*)');
    }
    else
    {
        showSuccess(password);
        valid = true;
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPasswordValue = confirmPassword.value.trim();
    const pass = password.value.trim();

    if (!isRequired(confirmPasswordValue))
    {
        showError(confirmPassword, 'Please re-enter the password');
    }
    else if (pass !== confirmPasswordValue)
    {
        showError(confirmPassword, 'The password does not match');
    }
    else {
        showSuccess(confirmPassword);
        valid = true;
    }
    return valid;
};
const checkFirstname = () => {
    let valid = false;
    const min = 3,
        max = 7;
    const firstname = firstName.value.trim();
    if (!isRequired(firstname))
    {
        showError(firstName, 'Firstname cannot be blank.');
    }
    else if (!isBetween(firstname.length, min, max))
    {
        showError(firstName, `Firstname must be between ${min} and ${max} characters.`)
    }
    else
    {
        showSuccess(firstName);
        valid = true;
    }
    return valid;
};
const checkLastname = () => {
    let valid = false;
    const min = 3,
        max = 10;
    const lastname = lastName.value.trim();
    if (!isRequired(lastname))
    {
        showError(lastName, 'Fill your lastname.');
    }
    else if (!isBetween(lastname.length, min, max))
    {
        showError(lastName, `Lastname must be between ${min} and ${max} characters.`)
    }
    else
    {
        showSuccess(lastName);
        valid = true;
    }
    return valid;
};
const checkPhonenumber = () => {
    let valid = false;
    const max = 10;
    const phonenum = phoneNum.value.trim();
    if (!isRequired(phonenum))
    {
        showError(phonenum, 'PhoneNumber cannot be blank.');
    }
    else if (!isBetween(phonenum.length, min, max))
    {
        showError(userName, `PhoneNumber must be ${max} characters.`)
    }
    else
    {
        showSuccess(phoneNum);
        valid = true;
    }
    return valid;
};
const checkAge = () => {
    let valid = false;
    const min = 18,
        max = 30;
    const age = aGe.value.trim();
    if (!isRequired(age))
    {
        showError(aGe, 'Fill your Age.');
    }
    else if (!isBetween(lastname.length, min, max))
    {
        showError(aGe, `Age must be between ${min} and ${max} characters.`)
    }
    else
    {
        showSuccess(aGe);
        valid = true;
    }
    return valid;
};


const isEmailValid = (emailValue) => {
    const em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return em.test(emailValue);
};

const isPasswordSecure = (passwordValue) => {
    const pw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return pw.test(passwordValue);
};

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.add('error');
    const errorMsg = formField.querySelector('small');
    errorMsg.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.add('success');
    const errorMsg = formField.querySelector('small');
    errorMsg.textContent = '';
}

form.addEventListener('submit', function (e)
{
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword(),
        isFirstnameValid=checkFirstname(),
        isLastnameValid=checkLastname(),
        isPhonenumberValid=checkPhonenumber(),
        isAgeValid=checkAge();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isFirstname &&
        isLastname &&
        isPhonenumber &&
        isAge;

   
    if (isFormValid) {

    }
});

resetBtn.addEventListener ('click', ()=> {
    window.location.reload()
});
Footer

