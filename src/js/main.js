import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import customSelects from './customSelects';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    customSelects();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300)
})
