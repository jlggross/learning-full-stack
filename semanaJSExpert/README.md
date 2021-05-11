# JavaScript Expert Week

This was an event taught by Erick Wendel on Youtube from May 10th to 21st. You can check his Youtube channel [here](https://www.youtube.com/channel/UCh84012dEUE076wM2CVFN9A).

# Technologies of this Workshop

- JavaScript: ESModules and CommonJS, ...
- Node.js
- VSCode

## Packages

- http-server: Used to create a local HTTP Server in order to use ESModules in JavaScript.

# Class Summary

- [Class 01: ECMAScript Modules](https://github.com/jlggross/full-stack/tree/main/semanaJSExpert#class-01-ecmascript-modules)

# Class Details

## Class 01: ECMAScript Modules

CommonJS - folder 01-commonJS

- First, let's talk about CommonJS. Before ESModules developers created a way to import modules through HTML tags.
- Basically the <script></script> tags are used to reference a .js file, which produces the same result as 'importing' the whole .js to another file.
- When dealing with classes it was common to use global variables, so we could reach the contents of a class anywhere in the application

- One of the problems of this approach is that before the application starts all the script tag references must be completely loaded.
  - This can be a major performance issue, because if we have too many modules to import and if some are too big, our application will take a while until it start doing some work.

ESModules - folder 02-esmodules

- Introduces the concept of modules
- We can use just pieces of a package/module, using just the resources we need
- It's not necessary to load the entire .js file in order for our application to execute. That is a major performance improvement.
- Now we don't need to use the script tag to import all the .js files in the .html main page.
- Scripts that work with modules must use the 'type' attribute in the script tag set to value 'modules'. An Example:

```html
<script type="module" src="./index.js"></script>
```

- In file currencyManager.js we use export default and in file index.js we import the currencyManager class

- To use import and export we have to run our files in a HTTP server:

1. Install HTTP Server package:

```bash
npm i -g http-server
```

2. Go to folder 02-esmodules and run:

```bash
http-server .
```

3. See where your server is available and go to that address. In my case it was <http://172.17.240.1:8080/>. Select the web folder.

ESModules and Node - folder 03-esmodules-node

- Now are modules have extension .mjs instead of .js, indicating that it is a ESModule.

1. Enter node folder
2. Run: `node index.mjs`
3. In the bash terminal you will be able to enter a number and see it formatted to currency

Conditional Exports - folder 04-conditional-exports

- Here we created a new folder node_modules. In it we moved the shared folder.
- Also, we kept in node_modules/shared/ two files of currencyManager, one currencyManager.cjs.js and one currencyManager.mjs.
- The intent of both files is to allow our project to work with both module structures. But to make this possible we have to create a package.json file and configure it.

1. Enter node_modules/shared/ and run `npm init -y`. A package.json file is created.
2. File currencyManager.cjs.js uses modele.exports, which is used in commonJS projects. This does not work in the browser
3. File currencyManager.mjs uses export default, which is used in EcmaScript module projects.

- In package.json we have to add the following:

```json
"exports": {
  "./currencyManager": {
    "import": "./currencyManager.mjs",
    "require": "./currencyManager.cjs.js",
  }
},
```

- The node folder will have two index files as well, one index.js and one index.mjs
- File index.js uses require() to grab a module, i.e., CommonJS syntax
- File index.mjs uses import, i.e., ESModules syntax

```javascript
// index.js - CommonJS
const CurrencyManager = require('shared/currencyManager')

// index.mjs - ESModules
import CurrencyManager from 'shared/currencyManager'
```

- Finally, we go to node/ and run `npm init -y`, which creates a package.json file in this folder.
- In package.json from node/ we add:

```json
"scripts": {
  "start:esm": "node index.mjs",
  "start:cjs": "node index.js",
},
```

- To run the ESModules version enter node/ and run `npm run start:esm`
- To run the CommonJS version enter node/ and run `npm run start:cjs`
