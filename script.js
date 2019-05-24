const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

let numberOfDays = 2

let nowDateMillis = Date.now();
let nowDate = new Date(nowDateMillis);
let aheadTimeMillis = (numberOfDays * day) + nowDateMillis;
let range = aheadTimeMillis - nowDateMillis;

function toTwoPositions( valueNumber){
    return ('0' + valueNumber).slice(-2);
}

function setValues(days, hours, minutes, seconds){
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}


setInterval(() => {
    range -= second;
    let currentDay = Math.floor( range / day );
    let currentHour = Math.floor ( (range % day) / hour );
    let currentMinute = Math.floor ( (range % hour) / minute );
    let currentSecond = Math.floor ( (range % minute) / second );    
    setValues(currentDay, currentHour, currentMinute, currentSecond);
    if(range <= 0){
        clearInterval()
    }

}, 1000);


