//jshint esversion: 6
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

    //Modal window

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

    //Form

    let message = {
        loading: 'Загрузка...',
        sucsess: 'Спасибо за заявку! Мы скоро с Вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event){
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(form);

            let obj = {};
            formData.forEach(function(value, key){
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            request.send(json);

            request.addEventListener('readystatechange', function(){
                if (request.readyState > 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.sucsess;
                } else {
                    statusMessage.innerHTML = message.failure;
                }
            });

            for (let i = 0; i < input.length; i++){
                input[i].value = '';
            }
        });

        //Slider

        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');
        
        showSlides(slideIndex);

        function showSlides(number){
            if(number > slides.length){
                slideIndex = 1;
            }
            if(number < 1){
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none'); // ниже то же самое, но по-другому:
            //for(let i = 0; i < slides.length; i++){
            //    slides[i].style.display = 'none';
            //}
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(number){
            showSlides(slideIndex += number); 
        }

        function currentSlide(number){
            showSlides(slideIndex = number);
        }

        prev.addEventListener('click', function(){
            plusSlides(-1);
        });

        next.addEventListener('click', function(){
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event){
            for(let i = 0; i < dots.length + 1; i++){
                if(event.target.classList.contains('dot') && event.target == dots[i - 1]){
                    currentSlide(i);
                }
            }
        });

        //Calculator

        let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personsSum = 0,
            daysSum = 0,
            total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('change', function(){
            personsSum = +this.value;
            total = (daysSum + personsSum)*4000;

            if(restDays.value == "" || persons.value == ""){
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        restDays.addEventListener('change', function(){
            daysSum = +this.value;
            total = (daysSum + personsSum)*4000;
           
            if(restDays.value == "" || persons.value == ""){
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function(){
            if(restDays.value == "" || persons.value == "") {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;            }
        });

});