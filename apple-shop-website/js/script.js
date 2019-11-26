var newLi = document.createElement('li'),
    menu = document.querySelector('.menu'),
    li = document.getElementsByTagName('li'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    answer = document.getElementById('prompt'),
    title = document.getElementById('title');

newLi.classList.add('menu-item');
newLi.textContent = 'Пятый пункт';

menu.appendChild(newLi);
menu.insertBefore(li[2], li[1]);
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
column[1].removeChild(adv);

answer.innerHTML = prompt('Ваше отношение к технике Apple?', '');
title.textContent = 'Мы продаём только подлинную технику Apple';