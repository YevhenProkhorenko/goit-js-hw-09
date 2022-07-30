const btnStart = document.querySelector('button[data-start]');
const btnClose = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
btnClose.setAttribute('disabled', 'disabled');

btnStart.addEventListener('click', changeColor);
btnClose.addEventListener('click', stopColorChanges);


function changeColor() {
   timerId = setInterval(() => {
       const newColor = getRandomHexColor();
       bodyEl.style.backgroundColor = newColor;
   }, 1000);
    
    btnStart.setAttribute('disabled', 'disabled');
    btnClose.removeAttribute('disabled')    
}

function stopColorChanges() {    
    btnStart.removeAttribute('disabled');
    btnClose.setAttribute('disabled', 'disabled');
    clearInterval(timerId);  
} 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}