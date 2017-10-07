'use strict';

/* global variables */
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

// The jsbin for the billing address thing wasn't working so I just left it out


// I made a ie7 compatible addEventListener function
function addEventListenerCross(elem, event, func, bool) {
    if (elem.addEventListener) {
        elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
        elem.attachEvent("on" + event, func);
    }
}

function placeholderPollyFill() {
    if (!Modernizr.input.placeholder) {
        var messageBox = document.getElementById("customText");
        messageBox.value = messageBox.placeholder;
        messageBox.style.color = "rgb(178,184,183)";
        addEventListenerCross(messageBox, "focus", zeroPlaceholder, false);
        addEventListenerCross(messageBox, "blur", checkPlaceholder, false);
    } //end if Modernizer
}

function autoCheckCustom() {
    var messageBox = document.getElementById("customText");
    if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) {
        // if user entry in textarea, check Custom check box
        document.getElementById("custom").checked = "checked";
    }
}


//for IE8 on focus call zeroPlaceHolder
function zeroPlaceholder() {
    var messageBox = document.getElementById("customText");
    messageBox.style.color = "black";
    if (messageBox.value === messageBox.placeholder)
        messageBox.value = "";
}

//for IE8 on blur of messageBox  call checkPlaceholder
function checkPlaceholder() {
    var messageBox = document.getElementById("customText");
    if (messageBox.value === "") {
        messageBox.style.color = "rgb(178,184,183)";
        messageBox.value = messageBox.placeholder;
    }
}

function removeSelectDefaults() {
    var selects = document.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = "-1";
    }
}

// set up node building blocks for selection list of days
function setupDays() {

    var dates = document.getElementById("delivDy").getElementsByTagName("option");

    //default is 1..28, index 0..27
    twentyNine.appendChild(dates[28].cloneNode(true)); // add 29th

    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true)); // add 29th & 30th

    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true)); // add 29th, 30th
}

function updateDays() {
    var deliveryDay = document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;

    while (dates[28]) {
        // remove child with index of 28 until this index is empty
        deliveryDay.removeChild(dates[28]);
    }

    if (deliveryYear.selectedIndex === -1) {
        //if no year is selected, choose the first year
        deliveryYear.selectedIndex = 0;
    }

    if (selectedMonth === "2" &&
        deliveryYear.options[deliveryYear.selectedIndex].value === "2020") {
        // if leap year, Feb has 29 days
        deliveryDay.appendChild(twentyNine.cloneNode(true));

    }  //Thirty days have November, April, June, and September
    // 4 6, 9 and 11
    else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11") {
        // these months have 30 days
        deliveryDay.appendChild(thirty.cloneNode(true));
    } else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") {
        // these months have 31 days
        deliveryDay.appendChild(thirtyOne.cloneNode(true));
    }  //switch looks good here

}

// create event listeners 
function addEventListeners() {
    var deliveryMonth = document.getElementById("delivMo");
    addEventListenerCross(deliveryMonth, "change", updateDays, false);
    //we are doing same task more than once it should be a fucntion

    var deliveryYear = document.getElementById("delivYr");
    addEventListenerCross(deliveryYear, "change", updateDays, false);

    var messageBox = document.getElementById("customText"); 
    addEventListenerCross(messageBox, "blur", autoCheckCustom, false);
}

/* run initial form configuration functions */
function setupPage() {
    removeSelectDefaults();
    setupDays();
    addEventListeners();
    placeholderPollyFill();
}

addEventListenerCross(window, "load", setupPage, false);