function timer() {
    let deadline = '2019-12-31';

    function getTimeRemaining(endtime){
        let remainedTime = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((remainedTime/1000) % 60),
            minutes = Math.floor((remainedTime/1000/60) % 60),
            hours = Math.floor(remainedTime/1000/60/60);
            //hours = Math.floor((remainedTime/1000/60/60) % 24), -если у нас ещё есть дни, часы отображаются так
            //days =  Math.floor(remainedTime/1000/60/60/24);
        return {
            'total' : remainedTime,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        };
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function addZero(num){
            if(num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        }

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);
}

module.exports = timer;