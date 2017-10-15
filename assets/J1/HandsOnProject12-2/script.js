/*
    JavaScript 6th Edition
    Chapter 12
    Hands - on Project 12- 2

    Author: Eamon "Boogie" Mikulec
    Date:   10/14/17

    Filename: script.js
*/

const pounds = $('#pValue');
const Kilograms = $('#kValue');

$('#convertButton').click(function() {
    Kilograms.text((pounds.val() * 0.45359237).toFixed(3));
});