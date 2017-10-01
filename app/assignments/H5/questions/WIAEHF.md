An event handler is an action of some sort that executes when an event happens. All of the following are event handlers:

```html
<button onclick="alert('A button was pressed')">This is a button</button>
```
```js
$("button").click(function eventHandler(e) {
    alert(e + " was pressed");
});
```