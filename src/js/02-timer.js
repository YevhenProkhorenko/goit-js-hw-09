import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let chosenDate = null;
let timerId = null;

const currentDate = Date.now();

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  dataDay: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
  flatPicktInit: document.querySelector('input[type="text"]'),
}
refs.btnStart.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < currentDate) {
        Notiflix.Notify.failure("Please choose a date in the future");                       
      }      
      chosenDate = selectedDates[0];
      refs.btnStart.removeAttribute('disabled');
      refs.btnStart.addEventListener('click', Countdown);
      // console.log(chosenDate)
  },
};

flatpickr(refs.flatPicktInit, options);

addLeadingZero(Countdown)

function Countdown() {
  
  timerId = setInterval(() => {       
    const timeDifference = chosenDate.getTime() - Date.now();
    const resultTime = convertMs(timeDifference);
    refs.dataDay.textContent = resultTime.days;
    refs.dataHours.textContent = resultTime.hours;
    refs.dataMinutes.textContent = resultTime.minutes;
    refs.dataSeconds.textContent = resultTime.seconds;
    refs.btnStart.setAttribute('disabled', 'disabled');
    refs.flatPicktInit.setAttribute('disabled', 'disabled');
    if (timeDifference < 1000) {
      clearInterval(timerId);
      refs.flatPicktInit.removeAttribute('disabled');
    }
  }, 1000);
 
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}