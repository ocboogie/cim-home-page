
You can kind of do this with base css-selectors. `p:first-of-type` and `p:last-of-type` will select the first and last `p` in a parent element respectively.

but keep in mind this is the first and last element of a *parent* element.

So:
```html
<style>
    p:last-of-type {
        color: red;
    }
</style>
<div>
    <p>last in div</p>
</div>
<p>last in page</p>
```
This will select both

But jQuery has a extension for doing stuff like this:
```js

$("p:first").text("this is the first paragraph");
$("p:last").text("this is the first paragraph");

// This also works
$("p").first().text("this is the first paragraph");
$("p").last().text("this is the first paragraph");
```