import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let chosenDate = null;
const currentDate = new Date();

const ref = {
    btnStart: document.querySelector('button[data-start]'),
    dataDay: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinures: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
}



console.log(ref);



const flatPicktInit = document.querySelector('input[type="text"]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < currentDate) {
            window.alert("Please choose a date in the future");
            console.log(selectedDates[0]);
        }       
        chosenDate = selectedDates[0];
        console.log(chosenDate);
        
    
  },
};
flatpickr(flatPicktInit, options);





// function pad(value) {
//     return String(value).padStart(2, 0);
// }
// function getTime(time) {
//     const hours = pad(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
// }