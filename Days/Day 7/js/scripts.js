const start         = document.querySelector('.start');
const pause         = document.querySelector('.pause');
const reset         = document.querySelector('.reset');
const timer         = document.querySelector('#timer');

let clockWorking    = false;
let rest            = 300;  // 5  minutes
let time            = 1500; // 25 minutes
let currentTimeLeft = 1500;
let type            = 'Work';

start.addEventListener('click', () => {
    countDown();
})
pause.addEventListener('click', () => {
    countDown();
})
reset.addEventListener('click', () => {
    countDown(true);
})

const countDown = (reset) => {
    if(reset) {
        stopClock();
    } 
    else {

        if (clockWorking == true) {


            clockWorking = false;
            clearInterval(clockTimer)
        } else {


            clockWorking = true;
            clockTimer = setInterval(() => {
                stepDown();
                displayTime();
            }, 1000);
        }

    } 
}

const displayTime = () => {
    const secondsLeft = currentTimeLeft;
    let result = '';
    const seconds   = secondsLeft % 60;
    const minutes   = parseInt(secondsLeft / 60) % 60;
    let hours       = parseInt(secondsLeft / 3600);

    function addLeadingZeroes(time){
        return time < 10 ? `0${time}` : time
    }

    if (hours > 0) result += `${hours}:`
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`
    timer.innerHTML = result.toString();

}

const stopClock = () => {
    clearInterval(clockTimer);
    clockWorking = false;
    currentTimeLeft = time;
    displayTime();
}

const stepDown = () => {
    if (currentTimeLeft > 0){
        currentTimeLeft--;
    } else if (currentTimeLeft === 0){
        if (type == 'Work'){
            currentTimeLeft = rest;
            displaySessionLog('Work');
            type='Break';
        } else {
            currentTimeLeft = time;
            type = 'Work';
            displaySessionLog('Break');
        }
    }

    displayTime();  

}