//jshint esversion: 6

require('es6-promise').polyfill();

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

if ('NodeList' in window && !NodeList.prototype.forEach) {

    console.info('polyfill for IE11');

    NodeList.prototype.forEach = function (callback, thisArg) {

      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {

        callback.call(thisArg, this[i], i, this);

      }

    };

  }