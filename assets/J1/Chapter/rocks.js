/*  JavaScript 6th Edition
    Chapter 12
    Chapter case
    Life on Rocks Wildlife Cruises
    Author: Eamon "Boogie" Mikulec
    Date: 10/14/17
    Filename: rocks.js
*/

$("ul.mainmenu li").hover(
    function (event) { $(event.currentTarget).children("ul").slideDown(); },
    function (event) { $(event.currentTarget).children("ul").slideUp(); }
);