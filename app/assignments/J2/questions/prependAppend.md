* `prepend`: inserts content at the *top* of the children
* `append`: inserts content at the *bottom* of the children

HTML:
```html
<div id="main">
    <p>middle<p>
<div>
```
JS:
```js
$('#main').append("<p>after</p>");
```
This will insert `<p>after</p>` after `<p>middle<p>`.
```js
$('#main').prepend("<p>before</p>");
```
This will insert `<p>before</p>` before `<p>middle<p>`.
