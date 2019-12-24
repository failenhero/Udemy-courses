function modalWindow() {
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

}

module.exports = modalWindow;