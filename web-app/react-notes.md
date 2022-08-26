# react notes

## directory struction

- node_modules: contains all the installed JavaScript libraries for this project
    - React: The javascript framework we will use to build our web apps
    - Babel: compiles jsx (javascript with html) into javascript
    - Webpack: takes all the files inside src and puts them into one file.
- public
    - files that are static (not transformed by wedpack)
    - index.html: your html page (that loads react)
- src: Files that are bundled using wedpack
    - index.js: the main javascript file, which loads react
    - App.js: the entry point of your react app
    - app.css: style loaded by App.js
    - App.test.js: Contain tests such as asserting whether an element is shown
- package.json: describes which libraries to include and the run scripts
    - 