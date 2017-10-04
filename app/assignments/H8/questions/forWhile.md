There are three looping methods:
 * `for`: a for loop does something `n` amount of times:

 ```js
 // so instead of doing
 console.log("logging stuff");
 console.log("logging stuff");
 console.log("logging stuff");
 console.log("logging stuff");
 console.log("logging stuff");
 // you could just use a for loop
 for (var i = 0; i < 5; i++) {
    console.log("logging stuff");
 }
 ```
A for loop is structured as follows `for ( ''initializer''; ''conditional expression''; ''loop expression'' )`
  * initializer: The initializer typically declares a counter variable, something like `var i = 0`. To start the counter at 5 use `var i = 5`. The variable name `i` is just a standard naming convention for a for loop counter. The initializer is only run once at the beginning of the for loop.

  * conditional expression: The conditional expression is run on every iteration of the for loop. If it evaluates to false, it stops the loop. The conditional expression is typically something like `i < 5`.

  * loop expression: The loop expression is run on every iteration of the for loop. This is normally used to increment the counter with something like `i++`. This will increment the variable `i` once.

 * `while`: a while loop does something until a condition is false:
 ```js
 var i = 0;
 var text = "";
 while (i < 10) {
   text += "The number is " + i;
   i++;
 }
 ```
 * `do while`: a do while loop is the same as a while loop, but it checks the condition after running the code:
 ```js
 var i = 0;
 var text = "";
 do {
    text += "The number is " + i;
    i++;
 }
 while (i < 10); 
 ```