import Vue from 'vue'
import { Flor } from './flor';

//[WILHAS] Comentei essas duas linhas:

//require('style!css!bootstrap/dist/css/bootstrap.min.css');
//require('bootstrap');

new Vue({
    el: '#app',
    data: {
        flores: [
            new Flor("Flor 1", require('./assets/Flor1.png')),
            new Flor("Flor 2", require('./assets/Flor2.png')),
            new Flor("Flor 3", require('./assets/Flor3.png')),
            new Flor("Flor 4", require('./assets/Flor4.png')),
            new Flor("Flor 5", require('./assets/Flor5.png')),
            new Flor("Flor 6", require('./assets/Flor6.png')),
            new Flor("Flor 7", require('./assets/Flor7.png')),
            new Flor("Flor 8", require('./assets/Flor8.png')),
            new Flor("Flor 9", require('./assets/Flor9.png')),
            new Flor("Flor 10", require('./assets/Flor10.png')),
            new Flor("Flor 11", require('./assets/Flor11.png')),
            new Flor("Flor 12", require('./assets/Flor12.jpg')),
            new Flor("Flor 13", require('./assets/Flor13.png')),
        ]
    },
});