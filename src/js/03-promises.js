const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', pushSubmit);

function pushSubmit(e) {
  e.preventDefault();
  
  const delayStep = Number(form.elements.step.value);
  const amountProm = Number(form.elements.amount.value);

  for (let i = 1; i <= amountProm; i += 1){
    createPromise(i, delayStep).then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const firstDelay = Number(form.elements.delay.value);

  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
    resolve({ position, delay });
  } else {     
    reject({ position, delay }); 
  }
  }, firstDelay);
  })  
}