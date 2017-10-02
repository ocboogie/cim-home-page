Most jQuery functions return it self, allowing you to chain functions together.

So instead of doing:
```js
$("#p1").css("color", "red")
$("#p1").slideUp(2000)
$("#p1").slideDown(2000); 
```
Or
```js
var p1 = $("#p1");
p1.css("color", "red")
p1.slideUp(2000)
p1.slideDown(2000); 
```
You can just chain them together
```js
$("#p1").css("color", "red")
        .slideUp(2000)
        .slideDown(2000); 
```
Because the function `css` and most other jQuery functions return what it was called on, allowing you to chain them.