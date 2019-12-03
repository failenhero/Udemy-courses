//jshint esversion:6
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
//let btnBlock = document.querySelector('.btn-block'),
//    btns = document.getElementsByTagName('button');
//
//btnBlock.addEventListener('click', function(event){
//    if(event.target && event.target.tagName == 'BUTTON'){
//        console.log('hello');
//    }
//});

//elem.getBoundingClientRect(); - свойство, позволяющее получить все границы элемента по правилам js (left, right, bottom, top);
//document.documentElement.clientWidth - позволяет нам получить ширину самого документa
//document.documentElement.scrollTop = 0; - возвращает нас к началу страницы, к самому верху
//scrollBy(x, y); - перемещает нас по станице относительно нашего текущего местоположения на определённое кол-во координат (х и у соответсвтенно).
//scrollTo(x, y); - перемещает нас в определённое место, заданное координатами х и у, вне зависимости от нашего текущего местоположения.

//Конструкторы и классы:
/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log('Hello, ' + this.name);
    }
}

User.prototype.exit = function(name){
    console.log('User ' + this.name + ' has left');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 19);

    console.log(ivan);
    console.log(alex);

ivan.exit(); */

/*
function showThis(a, b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}

showThis(1, 3);
showThis(4, 5);
*/
/*
let obj = {
    a: 20,
    b: 5,
    cont: function(){
        console.log(this);
        function shout(){
            console.log(this);
        }
        shout();
    }
};

obj.cont();
*/
/*
let user = {
    name: 'John'
};

function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smith'));
console.log(sayName.apply(user, ['Snow']));

function count(number){
    return this * number;
}
let double = count.bind(2);
console.log(double(3));
console.log(double(10));
*/
//Способы определения контекста функции (и через тире рещультат):
//1) просто вызов функции - window/undefined
//2) метод объекта - this = объект
//3) конструктор (new) - this = новый созданный объёкт
//4) указание конкретного контекста - .call/.apply/.bind

//интерполяция:
/*let name = 'Ivan',
    age = 34,
    mail = '34@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почта: ${mail}.`);
*/

//ES6
/*
let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number: 6,
    sayNumber: function(){
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

function calrOrDouble (number, basis = 2) {
    //basis = basis || 2; ES5
    console.log(number * basis);
}
calrOrDouble(5, 3);
calrOrDouble(7);

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(4,4);
console.log(square.calcArea());

//spread

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['TJ', 'vdud', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

}

log(...video);
*/
/*
let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.parse(JSON.stringify(options)));
*/

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, password);
    request.open('GET', 'json-file.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
});