function getTime() {

    let date = new Date();
    let day = date.getDay();
    let weekDay = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = 'AM';

    let bodyBg = document.body;

    if( (hours >=6 ) && (hours < 12) ) {
        bodyBg.style.background = "url('img/bg-1.jpg') center/cover no-repeat";
    }

    else if( (hours >=12 ) && (hours < 18) ) {
        bodyBg.style.background = "url('img/bg-2.jpg') center/cover no-repeat";
    }

    else if( (hours >=18 ) && (hours <= 24) ) {
        bodyBg.style.background = "url('img/bg-3.jpg') center/cover no-repeat";
    }

    else if( (hours >=0 ) && (hours < 6) ) {
        bodyBg.style.background = "url('img/bg-3.jpg') center/cover no-repeat";
    }

    if(hours === 0) {
        hours = 12;
        period = 'AM';
    }
    else if(hours > 12) {
        hours = hours-12;
        period = 'PM';
    }
    // else if(hours===12) {
    //     document.body.style.background = "url('../img/bg-3.jpg')";
    // }

    if(hours<10) {
        hours = '0' + hours; 
    }
    if(minutes<10) {
        minutes = '0' + minutes; 
    }
    if(seconds<10) {
        seconds = '0' + seconds; 
    }

    // let clock = document.getElementById('clock');
    let displayTime = document.querySelector('.getTime');
    let displayWeekday = document.querySelector('.weekDay');
    let displayDate = document.querySelector('.getDate');

    let time = hours + ":" + minutes + ":" + seconds;

    // clock.innerHTML = time + ":"+ period;

    const options = {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    }

    displayDate.innerHTML = date.toLocaleString('en-US', options);
    displayTime.innerHTML = time + ":"+ period;
    displayWeekday.innerHTML = date.toLocaleString('en-US',{weekday:'long'});
}

setInterval(getTime, 1000);
