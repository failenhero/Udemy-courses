//alert("Hello, world!");

/*var answer = confirm("Are you phueli tam?");

console.log(answer);*/

//var answer = +prompt("Are you 18 years old?", "yes");

//console.log(typeof(answer));
//
//console.log("arr" + "- is an object");
//console.log(4 + + "- is an object");

//var incr = 10,
//    decr = 10;
//incr++;
//decr--;
//
//console.log(incr++);
//console.log(--decr);
//
//var isChecked = true,
//    isClose = false;
//console.log(isChecked && isClose);

//let btn = document.querySelectorAll('button'),
//    wrap = document.querySelector('.wrapper'),
//    link = document.querySelector('a');

//btn[0].onclick = function(){
//    alert('Вы нажали на кнопку');
//};

//btn[0].addEventListener('click', function(event){
    //console.log(event);
    //let target = event.target;
    //target.style.display = 'none';
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
//});
//
//wrap.addEventListener('click', function(){
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
//});
//
//link.addEventListener('click', function(event){
//    event.preventDefault();
//    console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
//});
//
//btn.forEach(function(item){
//    item.addEventListener('mouseleave', function(){
//        console.log('Вы покинули зону элемента');
//    });
//});
//btn[0].addEventListener('mouseenter', function(){
//    alert('вы навели курсор на первую кнопку');
//});

//Cобытия на мобильных устройствах:
// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

//window.addEventListener('DOMContentLoaded', function(){
//    let box = document.querySelector('.box');
//
//    box.addEventListener('touchstart', function(event){
//        event.preventDefault();
//        console.log('red box: touchstart');
//        console.log(event.target)
//        console.log(event.touches[0].target);
//        console.log(event.changedTouches);
//        console.log(event.targetTouches);
//    });
//    box.addEventListener('touchmove', function(event){
//        event.preventDefault();
//        console.log('red box:' + event.touches[0].pageX);
//    });
//    box.addEventListener('touchend', function(event){
//        event.preventDefault();
//        console.log('red box: touchend');
//    });
//});
//
//    //new RegExp('pattern', 'flags');
//    // /pattern/flags
//
//let ans = prompt('Введите Ваше имя');
//
//    let reg = /n/ig;
//    console.log(reg.test(ans));
//    //console.log(ans.search(reg)); //тут мы ищем букву n в строке ответа от пользователя ans, т.к. регулярным выражением у нас задана буква n
//    console.log(ans.match(reg)); // match лучше чем search, т.к. ищет все совпадение, а search останавливается на первом
//    /* флаги:
//        i - флаг, указывающий на то, что всё равно в каком регистре будем искать выражение
//        g - флаг, указывающий на то, что может быть несколько регулярных вырежений в строке и надо найти все
//        m - флаг многострочного поиска
//    */
//      \d -digits  \D -NOT digits
//      \w -words   \W -NOT words
//      \s -spaces  \S -NOT spaces
//let ans = prompt('Введите ряд чисел');
//let reg = /\d/g;
//
//console.log(ans.match(reg));

//let ans ='My name is R2D2';
//console.log(ans.match(/\w\d\w\d/i));


//let pass = prompt('Enter your password');
//console.log(pass.replace(/./g, '*'));
//alert('09-11-13'.replace(/-/g, ':'));

//let timerId = setTimeout(sayHello, 3000);
//clearTimeout(timerId);

//let timerId = setInterval(sayHello, 3000);
//clearTimeout(timerId);
//
//function sayHello() {
//    console.log('hello, world');
//}

//НИЖЕ РЕКУРСИВНАЯ ФУНКЦИЯ:
//let timer = setTimeout(function log() {
//    console.log('hello');
//    setTimeout(log, 2000);
//});


//let btn = document.querySelector('.btn'),
//    elem = document.querySelector('.box');
//
//function myAnimation(){
//    let pos = 0;
//
//    let id = setInterval(frame, 10);
//    function frame(){;
//        if(pos == 300){
//            clearInterval();
//        } else {
//            pos++;
//            elem.style.top = pos + 'px';
//            elem.style.left = pos + 'px';
//        }
//    }
//}
//btn.addEventListener('click', myAnimation);

//Делегирование:
let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event){
    if(event.target && event.target.tagName == 'BUTTON'){
        console.log('hello');
    }
});