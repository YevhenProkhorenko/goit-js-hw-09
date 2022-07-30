import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let chosenDate = null;
let timerId = null;

// const currentDate = Date.now();

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
        if (selectedDates[0] < Date.now()) {
            window.alert("Please choose a date in the future");            
      }      
      chosenDate = selectedDates[0];
      refs.btnStart.removeAttribute('disabled');
      refs.btnStart.addEventListener('click', Countdown);
      // console.log(chosenDate)
  },
};

flatpickr(refs.flatPicktInit, options);



function Countdown() {
  
  timerId = setInterval(() => {       
    const timeDifference = chosenDate.getTime() - Date.now();
    const resultTime = convertMs(timeDifference);
    refs.dataDay.textContent = resultTime.days;
    refs.dataHours.textContent = resultTime.hours;
    refs.dataMinutes.textContent = resultTime.minutes;
    refs.dataSeconds.textContent = resultTime.seconds; 
  }, 1000);
 
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}