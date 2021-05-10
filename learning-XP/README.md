# Learning XP

This part of the repository is dedicated to learning experiences from workshops and tutorials and experiments I have done with pieces of code and small projects.

# Summary

- [Learning XP]()
- [JavaScript]()
  - [Async/Await]()
- [npm]()

# JavaScript

## Async/Await

# npm

- npm stands for node package manager, which is a package manager for JavaScript.
- It is often used in JavaScript projects to get easy access of packages and to manage dependencies in a project.
- The workshop 'How-to-NPM' is an excellent starting point to get your hands dirty on npm and see its options and functionality, and, as its creator says, this workshop is "A module to teach you how to module.".
- How-to-npm link: <https://github.com/workshopper/how-to-npm>

Useful npm commands:

- Create project: A file package.json will be created.

```bash
npm init
npm init --scope=<username>
```

- Check username

```bash
npm whoami
```

- Install a module

```bash
npm install <modulename>
```

- List dependencies

```bash
npm ls
```

- Creating a script: In the package.json file we have to add the script below.

```json
"scripts": {
  "test": "node test.js"
},
```

This specifies a script that will run every time we run the command `$ npm test` in the terminal. Make sure to have node.js installed and a file test.js in your directory.
