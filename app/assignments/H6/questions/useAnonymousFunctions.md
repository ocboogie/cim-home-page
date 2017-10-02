We use anonymous functions to make things more simple and easy to read:
```js
function handleClick() {
    // something
}
$("button").click(handleClick);
// vs
$("button").click(function() {
    // something
});
```
And it's pretty much necessary for functional programming:
```js
// I'm going to use ES6 arrow functions to increase readability.
// But this would work with normal anonymous functions
var numbers = [1,2,3,4,5,6,7,8,9,10,11];
var multiplyEven = numbers.filter(n => n % 2 === 0)
                      .map(n => n * 2);
console.log(multiplyEven);
// [4, 8, 12, 16, 20]
```