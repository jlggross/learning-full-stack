# npm

- npm stands for node package manager, which is a package manager for JavaScript.
  - All sorts of packages can be found here: <https://www.npmjs.com/>
- It is often used in JavaScript projects to get easy access of packages and to manage dependencies in a project.
- The workshop 'How-to-NPM' is an excellent starting point to get your hands dirty on npm and see its options and functionality, and, as its creator says, this workshop is "A module to teach you how to module.".
- How-to-npm link: <https://github.com/workshopper/how-to-npm>

## Useful npm commands

- Create project: A file package.json will be created.

```bash
npm init
npm init --scope=<username>
```

- Check username

```bash
npm whoami
```

- Install a package

```bash
npm install <packagename>
```

- Remove a module

```bash
npm rm <packagename>
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

This specifies a script that will run every time you run the command `$ npm test` in the terminal. Make sure to have node.js installed and a file test.js in your directory.

- Publish package: You can share your recently created package with the developer community.

```bash
npm publish
```

- View package details

```bash
npm view <project-name>
npm view @jlggross/npm
```

## Version control and tags

npm version format:

1.2.3
^ ^ ^
| | `-- Patch version. Update for every change. \\ |`---- Minor version. Update for API additions.\\
`------ Major version. Update for breaking API changes.

- Update npm packages version:

```bash
npm version <version>
npm version 1.0.1
```

- Add a tag to a package version

```bash
npm dist-tag add @jlggross/npm@1.0.0 latest
npm dist-tag add @jlggross/npm@1.0.1 alpha
```

- List dist-tags

```bash
npm dist-tag

output:
  alpha: 1.0.1
  latest: 1.0.0
```

- Remove a tag from a package

```bash
npm dist-tag rm <pkg> <tag>
npm dist-tag rm @jlggross/npm alpha
```

## Find and update outdated packages

- Find outdated packages

```bash
npm outdated
```

- Update/install specific package

```bash
npm install <pkg>
```

- Update all outdated packages

```bash
npm update
```
