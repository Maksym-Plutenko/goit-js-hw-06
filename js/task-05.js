const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', elem => {
    let text = input.value;

    if (text === '') {
        text = 'Anonymous';
    }

    output.textContent = text;
});