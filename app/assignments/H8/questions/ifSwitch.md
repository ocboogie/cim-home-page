 * `if`: a if statement will run the code in the body if the condition evaluates to true:
 ```js
 if (false) {
    console.log("This will never run");
 }
 if (true) {
    console.log("This will always run");
 }
 if (1 === 1) {
    console.log("This will always run");
 }
 ```
 * `switch/case`: a switch statement will run the code in the body of a case if the case is the same as the expression. If not, then it will run the `default`:
 ```js
 switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
 }

 console.log("Is there anything else you'd like?");
 ```
 This example is from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)