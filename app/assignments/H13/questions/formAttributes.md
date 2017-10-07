 * `action`: When this form gets submitted, the value of `action` will be the file that the form-data gets sent to:
 * `method`: When this form gets submitted, the value of `method` specifies how to send the form-data:

This example shows both attributes
```html
<form action="/user_page.php" method="get">
    Username: <input type="text" name="uname"><br />
    <input type="submit" value="Submit">
</form>
```