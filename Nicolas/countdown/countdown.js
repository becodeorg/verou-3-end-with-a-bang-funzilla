
const daysEl = document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newYears = '1 January 2023';

function countdown() {
   const  newYearsDate = new Date(newYears);
   const currentDate = new Date();
    const secondsLeft = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(secondsLeft / 3600 / 24);
    const hours = Math.floor(secondsLeft / 3600) % 24;
    const mins = Math.floor(secondsLeft / 60) % 60;
    const seconds = Math.floor(secondsLeft) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);


    // console.log(newYearsDate - currentDate);
}

formatTime = (time) => {
    return time < 10 ? `0${time}`: time;
}

//initial call
countdown();
setInterval(countdown, 1000);
