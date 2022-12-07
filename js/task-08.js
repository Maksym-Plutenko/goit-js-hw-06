const form = document.querySelector('form.login-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (inputEmail.value && inputPassword.value) {
        const obj = {
            [inputEmail.name] : inputEmail.value,
            [inputPassword.name] : inputPassword.value,
        }
        console.log(obj);
    } else {
        alert('Заповніть усі поля!');
    }
});
