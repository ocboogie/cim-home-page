There is many alternatives.
Without jQuery:
```js
// Sets the inner HTML. Removes anything that was there before
document.getElementById("parentID").innerHTML = "some html";
// Appends the element(add on to what's there);
document.getElementById("parentID").appendChild("some html");
// or
document.getElementById("parentID").innerHTML += "some html";
```
With jQuery:
```js
// Sets the HTML. Removes anything that was there before
$("css selector").html("some html");
// Appends the element(add on to what's there);
$("css selector").append("some html");
// Or prepends the element(insert the element before what's there);
$("css selector").prepend("some html");
```