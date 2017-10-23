Minification is the process of changing code(text) to a minified version. Like
```js
function unnecessarilyLongFunc(name) {
    if (name === "dave") {
        console.log("Hello dave")
    } else if (name === "bobby") {
        console.log("Hello bobby")
    }
}
// With minification would turn into something like this
function unnecessarilyLongFunc(name){if(name === "dave"){console.log("Hello dave")} else if(name === "bobby"){console.log("Hello bobby")}}
```

gzip is a more conventional way of compression. It compresses the bites themselves.