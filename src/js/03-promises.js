const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');

const firsDelay = form.elements.delay.value;
const delayStep = form.elements.step.value;
const amountProm = form.elements.amount.value;
let promtCounter = 0;

let timerID = 0;
// console.log(form.elements.delay.value);


submitBtn.addEventListener('click', createPromise);

function createPromise(position, delay) {  
  const shouldResolve = Math.random() > 0.3;  
  
  setTimeout(() => {
    if (shouldResolve) {
      timerID = setInterval(() => {
      position = Number(amountProm);
      delay = Number(delayStep);
        console.log('position:', position)
        console.log('delay:' , delay)
      if (promtCounter === amountProm) {
        return;
      }        
      return new Promise(({ position, delay }) => {
        
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
    }, delay);
    }
    else {
      clearInterval(timerID);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`)
  }
  }, firsDelay)     
}
