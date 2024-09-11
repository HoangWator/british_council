const searchBtn = document.querySelector('.js-search-glass');
const inputBox = document.querySelector('.js-input-box');
let isOpen = false;

searchBtn.addEventListener('click', function () {
    if (isOpen) {
        inputBox.classList.remove('open');
        isOpen = false;
    }
    else {
        inputBox.classList.add('open');
        isOpen = true;
    }
})
