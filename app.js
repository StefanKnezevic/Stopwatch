/* 
GAME FUNCTION:
 - User can to start timer,
 - User can to stop timer,
 - User can to reset timer,
 */

// UI Elements
const timer = document.querySelector('#timer');
const numbers = document.querySelector('.number');
const startBtn = document.querySelector('#start-stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;

let status = 'stopped';
let interval = null;
let displaySec = 0;
let displayMin = 0;
let displayHour = 0;

// Event listen
startBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', resetWatch);

function start(){

    seconds++;

    if(seconds < 10){
        displaySec = '0'+ seconds.toString();
    } else {
        displaySec = seconds;
    };
    if(minutes < 10){
        displayMin = '0'+ minutes.toString();
    } else {
        displayMin = minutes;
    };
    if(hours < 10){
        displayHour = '0'+ hours.toString();
    } else {
        displayHour = hours;
    };

    if (seconds / 60 === 1){
        seconds = 0;
        minutes++;
    };
    if (minutes / 60 === 1){
        minutes = 0;
        hours++;
    };
    numbers.innerHTML = `${displayHour}:${displayMin}:${displaySec}`;
};
function startStop(){
    if (status === 'stopped'){
        status = 'started';
        interval = setInterval(start, 1000);
        document.getElementById('start-stop').value = 'Stop';
    } else {
        status = 'stopped';
        clearInterval(interval);
        document.getElementById('start-stop').value = 'Start';
    }
}

function resetWatch(){
    location.reload();
}






