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


function toggleMembook() {
    totalCost += (document.getElementById("membook").checked) ? 125 : -125;
    displayTotalCost();
}

function toggleRights() {
    totalCost += (document.getElementById("reprodrights").checked) ? 1250 : -1250;
    displayTotalCost();
}

function calcStaff() {

    var num = document.getElementById("photognum");
    var hrs = document.getElementById("photoghrs");
    var distance = document.getElementById("distance");

    totalCost -= photographerCost;
    photographerCost = num.value * 100 * hrs.value + distance.value * num.value;
    totalCost += photographerCost;

    displayTotalCost();
}

function displayTotalCost() {
    document.getElementById("estimate").innerHTML = "$" + totalCost;
}

function resetForm() {
    document.getElementById("photognum").value = 1;
    document.getElementById("photoghrs").value = 2;
    document.getElementById("membook").checked = false;
    document.getElementById("reprodrights").checked = false;
    document.getElementById("distance").value = 0;
}

function createEventListeners() {
    document.getElementById("photognum").addEventListener("change", calcStaff, false);
    document.getElementById("photoghrs").addEventListener("change", calcStaff, false);
    document.getElementById("distance").addEventListener("change", calcStaff, false);
    document.getElementById("membook").addEventListener("change", toggleMembook, false);
    document.getElementById("reprodrights").addEventListener("change", toggleRights, false);
}

// document.addEventListener("load", resetForm, false);
// This wasn't working for me so I used the following
// An issue about it https://stackoverflow.com/q/16404380/4910911
window.addEventListener("load", function() {
    resetForm();
    createEventListeners();
    calcStaff();
});