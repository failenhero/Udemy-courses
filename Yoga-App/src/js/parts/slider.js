function slider() {
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

}

module.exports = slider;