let counterValue = 0;

const span = document.querySelector('#value');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');

buttonDecr.addEventListener("click", elem => {
    counterValue -= 1;
    span.textContent = counterValue;
})

buttonIncr.addEventListener("click", elem => {
    counterValue += 1;
    span.textContent = counterValue;
})
