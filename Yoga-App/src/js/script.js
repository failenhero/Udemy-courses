//jshint esversion: 6
window.addEventListener('DOMContentLoaded', function(){

    'use strickt';
    let calculator = require('./parts/calculator'),
        form = require('./parts/form'),
        modalWindow = require('./parts/modalWindow'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer');
    
    calculator();
    form();
    modalWindow();
    slider();
    tabs();
    timer();

});