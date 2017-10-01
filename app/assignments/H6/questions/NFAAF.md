The main difference is you can reference a named function before its been made.

Named function:
```js
print('This will work');

function print(string) {
    console.log(string);
}
```
Anonymous function:
```js
print('This will throw a error');

var print = function(string) {
    console.log(print);
}
```
Anonymous functions are normally passed as arguments to other functions, like so:
```js
$("button").click(function() {
    alert("Button pressed");
});
```
And in ES6 you can use arrow functions, which is pretty much shorthand:
```js
$("button").click(() => {
    alert("Button pressed");
});
```