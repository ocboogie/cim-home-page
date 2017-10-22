To get the element at index `n` (and `n` must be a number,) do:
```js
var foo = ["a", "b", "c"];

foo[n];

foo[2];
// "c"
```
Always remember that arrays start counting at 0. So, `foo[1]` won't return `"a"`, it will return `"b"`:
```js
var foo = ["a", "b", "c"];

foo[1];
// "b"
```
To get the first element, do:
```js
var foo = ["a", "b", "c"];

foo[0];
// "a"
```