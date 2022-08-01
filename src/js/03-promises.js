const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');


const firstDelay = Number(form.elements.delay.value);
const delayStep = Number(form.elements.step.value);
const amountProm = Number(form.elements.amount.value);


let promtCounter = 0;

let timerID = 0;



submitBtn.addEventListener('click', pushSubmit);

function pushSubmit() {  

  for (let i = 0; i <= amountProm; i += 1){
    createPromise(i, firstDelay).then().catch();
  }

  // setInterval(() => {  
   
  // }, delayStep);
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {     
    reject(`❌ Rejected promise ${position} in ${delay}ms`); 
  }
  }, firstDelay);
  })  
}