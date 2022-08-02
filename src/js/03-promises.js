import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', pushSubmit);

function pushSubmit(e) {
  e.preventDefault();
  
  const delayStep = Number(form.elements.step.value);
  const amountProm = Number(form.elements.amount.value);
  let firstDelay = Number(form.elements.delay.value);

  for (let i = 1; i <= amountProm; i += 1){

    setTimeout(() => {
      createPromise(i, delayStep).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);      
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);      
    });
    }, firstDelay)

    
   firstDelay = firstDelay + delayStep;
  }
  form.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  // const firstDelay = Number(form.elements.delay.value);

  return new Promise((resolve, reject) => {
  if (shouldResolve) {
    resolve({ position, delay });
  } else {     
    reject({ position, delay }); 
  }
  })  
}