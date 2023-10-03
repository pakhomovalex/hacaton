const ukLanguageButt = document.getElementById('uk-button');
const enLanguageButt = document.getElementById('en-button');

let ukElem = document.getElementsByClassName('uk');
let enElem = document.getElementsByClassName('en');
let ukTitle = document.getElementById('uk-title');

ukLanguageButt.addEventListener("click",
function(){
    for (let i = 0; i < enElem.length; i++) {
        enElem[i].classList.add('del');
        ukElem[i].classList.remove('del');
        ukElem[i].style.fontFamily = 'var(--uk-regular-font)';
    }
    ukTitle.style.fontFamily = 'var(--uk-title-font)';
    ukTitle.style.fontSize = '14rem';
    ukTitle.style.letterSpacing = '50px';
});

enLanguageButt.addEventListener("click",
function(){
    for (let i = 0; i < ukElem.length; i++) {
        ukElem[i].classList.add('del');
        enElem[i].classList.remove('del');
    }
});