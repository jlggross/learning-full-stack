# About the JavaScript Full Course

The JavaScript Full Course mentioned here has been produced and made available for free by freeCodeCamp.org. You can check it here: https://www.youtube.com/watch?v=PkZNo7MFNFg.

This is a 200 minutes introductory course for JavaScript. The full course contents is available in the video's description. 

# About this repository 

Here you'll have access to all my notes in the refered course. I divided the contents of the course in diffent class.js files, each one refering to a specific contet of the course. In brief, the files include JavaScript working examples on the following topics: data types, variable types, global and local scope, logital operators, ways is manipulating arrays, strings and objects, conditional statemos, flow control, functions, arrow functions, classes, rest operators, spread operator, destructuring and import/export statements.

## Files description

The files are divided into 30 classes. The contents of each class are described below:

* class01.js: Comment, Data Types, Variable Types
* class02.js: Multiplciation, Division, Incremente, Decrement
* class03.js: Operators - Remainder, Plus-Equals, Minus-Equals, Times-Equals, Divide-Equals
* class04.js: Strings, Escape Characters
* class05.js: Strings Operations
* class06.js: Functions
* class07.js: Arrays
* class08.js: Manipulating Arrays
* class09.js: Scope
* class10.js: Stand in Line
* class11.js: If Statements, Booleans and Logical Operators
* class12.js: Switch-Case
* class13.js: Objects
* class14.js: Complex Objects
* class15.js: Nested Objects and Nested Arrays
* class16.js: Challenge - Record Collection
* class17.js: Loops - While, Do-While, For
* class18.js: Challenge - Profile Lookup
* class19.js: Random
* class20.js: parseInt
* class21.js: Conditional Ternary operator
* class22.js: Variable types - var and 'use strict'
* class23.js: Scope
* class24.js: Variable Type - const
* class25.js: Arrow Functions
* class26.js: Arrow Functions with Higher Functions
* class27.js: Rest Operator, Spread Operator
* class28.js: Destructuring Assignment
* class29.js: Concise Code, Classes, Getters and Setetrs
* class30.js: Import, Export, Require

# How to run the class examples

For all examples, except for class30.js, you just have to download the repository, open index.html in your browser and to to the console tab (F12 in Google Chrome) to see the outputs.

For class30.js we use import/export. There is an issue when we use import/export in JavaScript and try to run our index.html file in the browser. The issue has been detailed here: https://stackoverflow.com/questions/50197495/javascript-modules-and-cors. I'll copy below an answer to the reported error, which solves the problem:

> "Many browsers do not allow you to access files on the local filesystem with JavaScript (even if the HTML document is also on the local filesystem). This extends to loading JavaScript modules. Install a webserver and use that (with a URL like http://localhost/) for testing."
 
As you can see, in order to avoid the error of running the file, we have to create a local webserver for testing. In my machine I have **python3** installed, so to create a simple local webserver we just type at the command line:

```
python3 -m http.server 8000
```

Than, in the browser we access the project through the path: http://localhost:8000/javascript-full-couse-beginner/.

If you are using VSCode there are some extensions you could install in order to ruin a local server. One of this tools is called Watch in Chrome and can be found here: https://marketplace.visualstudio.com/items?itemName=sneezry.watch-in-chrome.

# Final Taughts

I hope this call notes can help you undesrtand the courses contents and make your learning journey easier.
