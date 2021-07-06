const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function check () {
    if (inputName.value !== "") {
        inputName.classList.add('form__input-validate');
        inputName.classList.remove('form__input-unvalidate');
    } else {
        inputName.classList.remove('form__input-validate');
        inputName.classList.add('form__input-unvalidate');
    }
    if (inputEmail.value !== "" && regExp.test(inputEmail.value)) {
        inputEmail.classList.add('form__input-validate');
        inputEmail.classList.remove('form__input-unvalidate');
    } else {
        inputEmail.classList.remove('form__input-validate');
        inputEmail.classList.add('form__input-unvalidate');
    }
}
