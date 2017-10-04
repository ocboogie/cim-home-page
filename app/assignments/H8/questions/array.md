An array is basically just a list of things.

The `Array` object is an object that is used in the construction of arrays, and has some utilities. (See below.)

There are two main ways to create arrays:
```js
var foo = ["element1", 2, false];
// this will create an array with three elements:
// at index 0 is `"element1"` as a string
// at index 1 is `2` as a number
// and at index 2 is `false` as a boolean
```
Or
```js
var foo = new Array(3);
// this will create an array with three elements, all of which have the value of `undefined`
```

Methods:

 * `isArray`: this is a static method, which means it must be called on the `Array` object itself. It will return `true` if the first argument is an array:
 ```js
 Array.isArray([]); // true
 Array.isArray([undefined, "a"]); // true
 Array.isArray(undefined); // false
 Array.isArray(true); // false
 ```
 * `push`: this method will add all the arguments to the end of the array:
 ```js
 var foo = ["a", "b"];
 foo.push("c");
 console.log(foo); // ["a", ""b", "c"]
 foo.push("d", "e");
 console.log(foo); // ["a", "b", "c", "d", "e"]
 ```
 * `pop`: this method will remove the last element of the array:
 ```js
 var foo = ["a", "b", "c"];
 foo.pop();
 console.log(foo); // ["a", "b"]
 ```
 * `map`: this method will remap each element to the result of a function (the first argument). Note that this method does not modify the array; it returns the result:
 ```js
    var numbers = [1, 2, 3, 4, 5];
    var multipliedNumbers = numbers.map(function(element) {
        return element * 2;
    });

    console.log(numbers); // this is still [1 , 2 , 3, 4, 5]
    console.log(multipliedNumbers); // [2 , 4 , 6, 8, 10]
 ```

Properties:
 * `length`: this property is the number of elements in the array:
 ```js
 var foo = ["a", "b", "c", "d"];

 foo.length;
 // 4
 ```
 * `[0]`: The elements themselves, since elements are stored as properties in arrays:
 ```js
 var foo = ["a", "b", "c"];
 foo[0] // `0` is a property that the value is `"a"`
 ```