//jshint esversion:6
window.addEventListener('DOMContentLoaded', function(){

    'use strickt';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        
    function hideTabContent(a){
        for(let i=a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;

        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

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

    //Модальное окно

    let btnMore = document.querySelector('.more'),
        btnDescription = document.querySelectorAll('.description-btn'),
        close = document.querySelector('.popup-close'),
        overlay = document.querySelector('.overlay');

    let modalWindow = function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; //запрещает прокрутку страницы
    };

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = 'visible'; //разрешает прокрутку страницы
    });

    btnMore.addEventListener('click', modalWindow);
    for(let i= 0; i < btnDescription.length; i++){
        btnDescription[i].addEventListener('click', modalWindow);
    }

});