The `length` property of an array will return the number of elements in the array:
```js
var foo = ["a", "b", "c", "d"];

foo.length;
// 4
```
Note that undefined elements on an array still count toward the length:
```js
var foo = ["a", undefined, undefined, undefined];

foo.length;
// 4
```