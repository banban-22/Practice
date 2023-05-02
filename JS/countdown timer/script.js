'use strict';
let timer = null;
let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minsEl = document.getElementById('mins');
let secondsEl = document.getElementById('seconds');
let end;
let toZero;
let startTime = document.getElementById('start-count');
let endTime = document.getElementById('endtime');

startTime.onclick = function(){
    end = endTime.value;
    if(!end){
        alert('Please set the time!');
        return false;
    };
    countDown();
    timer = setInterval(countDown, 1000);
}

// const newYears = "1 Jan 2022";

function countDown (){
    const timedate = new Date(Date.parse(end.replace(/-/g, "/")));
    const currentDate = new Date();

    const totalSeconds = Math.floor((timedate.getTime() - currentDate.getTime()) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const minutes = Math.floor(totalSeconds /  60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    // const date = (timedate.getTime() - currentDate.getTime()) / 1000;
    // const days = Math.floor(date / (3600 * 24));
    // // console.log(days);
    // const _hours = date - days * 3600 * 24;
    // const hours = Math.floor(_hours / 3600);
    // const _mins = _hours - hours * 3600;
    // const mins = Math.floor(_mins / 60);
    // const _seconds = _mins - mins * 60;
    // const seconds = Math.floor(_seconds);
    // console.log(countDown);

    // console.log(totalSeconds, seconds, minutes, hours, days);

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }


endTime.value = '';
clearInterval(timer);
toZero;

}


//initial calcountDown
// setInterval(countdown, 1000);

