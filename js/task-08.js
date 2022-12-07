const form = document.querySelector('form.login-form');
const inputEmail = document.querySelectorAll('input[name="email"]');
const inputPassword = document.querySelectorAll('input[name="password"]');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (inputEmail.value && inputPassword.value) {
        const obj = {
            [inputEmail.dataset.name] : inputEmail.value,
            [inputPassword.dataset.name] : inputPassword.value,
        }

        console.log(obj);
    } else {
        alert('Заповніть усі поля!');
    }
});


