export const emailValidation = (email) => {
    let emailError = "";

    let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let isEmail = pattern.test(email);

    if (!isEmail) {
        emailError = "Please enter a valid email address";
    }

    if (emailError) {
        return emailError;
    }
    return false;
};

export const passwordValidation = (password) => {
    let passwordError = "";

    if (password.length < 8) {
        passwordError = "Password should be 8 characters or more";
    }
    if (password === "") {
        passwordError = "Cannot be blank";
    }

    if (passwordError) {
        return passwordError;
    }
    return false;
};

export const firstNameValidation = (firstName) => {
    let firstNameError = "";

    if (firstName === "") {
        firstNameError = "Cannot be blank";
    }

    if (firstNameError) {
        return firstNameError;
    }
    return false;
};

export const lastNameValidation = (lastName) => {
    let lastNameError = "";

    if (lastName === "") {
        lastNameError = "Cannot be blank";
    }

    if (lastNameError) {
        return lastNameError;
    }
    return false;
};
