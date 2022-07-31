const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');


const firsDelay = Number(form.elements.delay.value);
const delayStep = Number(form.elements.step.value);
const amountProm = Number(form.elements.amount.value);


let promtCounter = 0;

let timerID = 0;



submitBtn.addEventListener('click', pushSubmit);

function pushSubmit() {

  setInterval(() => {  
   createPromise(amountProm, delayStep)
  }, delayStep);
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    return new Promise((resolve, reject) => {
  if (shouldResolve) {
    resolve(console.log(`✅ Fulfilled promise ${position} in ${delay}ms`));
  } else {     
    reject(console.log(`❌ Rejected promise ${position} in ${delay}ms`)); 
  }
  })
  }, firsDelay);
}







// ///////// НЕ правильний варіант
// function createPromise(position, delay) {  
//   const shouldResolve = Math.random() > 0.3;  
  
//   setTimeout(() => {
//     if (shouldResolve) {
//       timerID = setInterval(() => {
//       position = Number(amountProm);
//       delay = Number(delayStep);
//         console.log('position:', position)
//         console.log('delay:' , delay)
//       if (promtCounter === amountProm) {
//         return;
//       }        
//       return new Promise(({ position, delay }) => {
        
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
//       })
//     }, delay);
//     }
//     else {
//       clearInterval(timerID);
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`)
//   }
//   }, firsDelay)     
// }
