The `window.alert` is very useful for debugging in the following ways:
 * Displaying an unknown value in a variable:
 ```js
 var foo;
 // very complicated code, that changes "foo" in someway
 window.alert(foo);
 ```
 * Seeing if a part of the code gets executed or not:
 ```js
 if (1 == "1") {
    window.alert('1 does equal "1"');
 }
 ```