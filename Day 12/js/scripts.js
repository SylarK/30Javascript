const secStick   = document.querySelector('.sec-stick');
const minStick   = document.querySelector('.min-stick');
const hourStick  = document.querySelector('.hour-stick');

function setDate(){

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secStick.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60) * 6) + 90;
    minStick.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + (( mins / 60) * 30) + 90;
    hourStick.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
setDate();
