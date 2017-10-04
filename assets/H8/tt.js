/* JavaScript 6th Edition
 * Chapter 3
 * Chapter case
 * Tipton Turbines
 * Variables and functions
 * 
 * Author: Eamon "Boogie" Mikulec
 * Date:   10 / 3 / 17
 * 
 * Filename: tt.js
*/

var daysOfWeek = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"].map(function (day) {
    return day + "day";
});

var opponents = [
    "Lightning",
    "Combines",
    "Combines",
    "Combines",
    "Lightning",
    "Lightning",
    "Lightning",
    "Lightning",
    "Barn Raisers",
    "Barn Raisers",
    "Barn Raisers",
    "Sodbusters",
    "Sodbusters",
    "Sodbusters",
    "Sodbusters",
    "(off)",
    "River Riders",
    "River Riders",
    "River Riders",
    "Big Dippers",
    "Big Dippers",
    "Big Dippers",
    "(off)",
    "Sodbusters",
    "Sodbusters",
    "Sodbusters",
    "Combines",
    "Combines",
    "Combines",
    "(off)",
    "(off)"
];

var gameLocation = [
    "away",
    "away",
    "away",
    "away",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "away",
    "away",
    "away",
    "away",
    "",
    "away",
    "away",
    "away",
    "away",
    "away",
    "away",
    "",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "",
    ""
];

function addColumnHeaders() {
    for (var i = 0; i < 7; i++) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    }
}

function addCalendarDates() {
    for (var i = 1; i <= 31; i++) {
        document.getElementById("08-" + i).getElementsByTagName("p")[0].innerHTML = i;
    }
}

function addGameInfo() {
    for (var i = 0; i < 31; i++) {
        var data = i + 1;
        var tableCell = document.getElementById("08-" + data);
        var paragraphs = tableCell.getElementsByTagName("p");
        switch (gameLocation[i]) {
            case "away":
                paragraphs[1].innerHTML = "@ ";
                break;
            case "home":
                paragraphs[1].innerHTML = "vs ";
                break;

        }
        paragraphs[1].innerHTML += opponents[i];
        // document.getElementById("08-" + (i + 1)).getElementsByTagName("p")[1].innerHTML = opponents[i];
    }
}

function setUpPage() {
    addColumnHeaders();
    addCalendarDates();
    addGameInfo();
}


if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}