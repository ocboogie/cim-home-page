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
    $("th").each(function(index) {
        $(this).text(daysOfWeek[index]);
    });
}

function addCalendarDates() {
    for (var i = 1; i <= 31; i++) {
        $("#08-" + i + " p").eq(0).text(i);
    }
}

function addGameInfo() {
    for (var i = 0; i < 31; i++) {
        // I kinda got a bit carried away and did it on one line
        $("#08-" + (i + 1) + " p").eq(1).text(((gameLocation[i] === "away") ? "@ " : "") + ((gameLocation[i] === "home") ? "vs " : "") + opponents[i]);
        // Here's the extended version both work as expected
        
        // var data = i + 1;
        // var text = "";
        // switch (gameLocation[i]) {
        //     case "away":
        //         text = "@ ";
        //         break;
        //     case "home":
        //         text = "vs ";
        //         break;
        // }
        // text += opponents[i];
        // $("#08-" + data + " p").eq(1).text(text);
        
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