const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
    let text = input.value;

    if (text === '') {
        text = 'Anonymous';
    }

    output.textContent = text;
});