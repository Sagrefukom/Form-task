const form = document.querySelectorAll('.form');
const inputName = document.getElementById('input-name');
const inputNameLogin = document.getElementById('input-name-login');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const inputPasswordLogin = document.getElementById('input-password-login');

for (i = 0; i < form.length; i++) {
    this.addEventListener('submit', e => {
        e.preventDefault();

        check();
    });
}

function check() {
    const inputNameValue = inputName.value.trim();
    const inputNameLoginValue = inputNameLogin.value.trim();
    const inputEmailValue = inputEmail.value.trim();
    const inputPasswordValue = inputPassword.value.trim();
    const inputPasswordLoginValue = inputPasswordLogin.value.trim();

    if(inputNameValue === '') {
		setErrorFor(inputName, 'User Name cannot be blank');
	} else {
		setSuccessFor(inputName);
	}
    if(inputNameLoginValue === '') {
		setErrorFor(inputNameLogin, 'User Name cannot be blank');
	} else {
		setSuccessFor(inputNameLogin);
	}

    if(inputEmailValue === '') {
		setErrorFor(inputEmail, 'Email cannot be blank');
	} else if (!isEmail(inputEmailValue)) {
		setErrorFor(inputEmail, 'Not a valid email');
	} else {
		setSuccessFor(inputEmail);
	}

    if(inputPasswordValue === '') {
		setErrorFor(inputPassword, 'Password cannot be blank');
	} else {
		setSuccessFor(inputPassword);
	}
    if(inputPasswordLoginValue === '') {
		setErrorFor(inputPasswordLogin, 'Password cannot be blank');
	} else {
		setSuccessFor(inputPasswordLogin);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isEmail(inputEmail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail);
}