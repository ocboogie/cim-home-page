/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Eamon "Boogie" Mikulec
 *    Date:   10/1/17

 *    Filename: ft.js
 */

// I did some simple modifications
var photographerCost = 0;
var totalCost = 0;

// I get all the elements here so I don't have to run "$(selector)" each time I want to use them.
// Which increases performance
var photognum;
var photoghrs;
var membook;
var reprodrights;
var distance;
var estimate;
var resetButton;

function calcStaff() {
    var numValue = photognum.val();
    console.log(distance.val());
    totalCost -= photographerCost;
    photographerCost = numValue * 100 * photoghrs.val() + distance.val() * numValue;
    totalCost += photographerCost;

    displayTotalCost();
}

function displayTotalCost() {
    estimate.html("$" + totalCost);
}

function resetForm() {
    photognum.val(1);
    photoghrs.val(2);
    membook.prop("checked", false);
    reprodrights.prop("checked", false);
    distance.val(0);
    calcStaff();
}

function createEventListeners() {
    photognum.change(calcStaff);
    photoghrs.change(calcStaff);
    distance.change(calcStaff);
    membook.change(function() {
        totalCost += (membook.is(":checked")) ? 125 : -125;
        displayTotalCost();
    });
    reprodrights.change(function() {
        totalCost += (reprodrights.is(":checked")) ? 1250 : -1250;
        displayTotalCost();
    });
    resetButton.click(resetForm);

}

$(document).ready(function() {
    photognum = $("#photognum");
    photoghrs = $("#photoghrs");
    membook = $("#membook");
    reprodrights = $("#reprodrights");
    distance = $("#distance");
    estimate = $("#estimate");
    resetButton = $("reset-button");
    resetForm();
    createEventListeners();
});