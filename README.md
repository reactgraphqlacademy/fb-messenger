## ReactJS Facebook messenger

The goal of this exercise is to learn how to think in React.

## Requirements
You need to be comfortable writing JavaScript (ES6: Module system, class syntax, destructuring assignment).
You need to have `node`and `npm`installed in your computer.

## Clone the repo

```sh
git clone https://github.com/leanjscom/fb-messenger.git
```
Then `cd` into fb-messenger
```sh
cd fb-messenger
```

## Branches

You will need to head to the correct branch for the exercise.

How? run:

```sh
git pull --all

git branch --all

git checkout <branch_name>
```
## Getting started:
```sh
npm install && npm start
```

### We recommend you to start from top to bottom, and refactor, refactor, refactor

1. Refactor the “footer” section by creating a stateless component (just like Modal). Make sure everything works.

2. Refactor the topbar section  by creating a stateless component and pass the dependencies via props. Make sure everything works Hint: this will be similar to Modal.js

3. Create a component for “messenger” and pass down the dependencies from App via props. Make sure everything works. You can start by making a Messenger folder with an index.js.

4. Is there any state in app that should be in the Messenger component?  Refactor this logic out of App.js and into Messenger. Then, create further stateless components from the contents of Messenger and pass them down dependencies via props. Hint: maybe you could have a Threads component, and maybe Conversation?

5. Question: Is it possible to move showModal from app.js down the tree? why/why not?

6. What do you think it would make sense to componentize next? Are there any parts on that view that you can reuse? Try to explain to a mentor what you want to refactor before you code :)

## Links

* [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)
* [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)
* [babel repl example](https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAEgUwDZJAYRAWwA7gWWAXhgAoBKGQgPlICgYYAeAEwEsA3K-hpgCwEYqiFCACEjAPQCuPJtioB1ZKEwIYUEDABSAZRgAZAIYAjA-GbhJ87pLadaZANy1aLDjGBJDECADlDqoQARKAEhqxgCABOQTJMdh5ePv6BQVEgAO6x3AwA3sKoGDh4BAC-NhJ2XLYcVEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=)


## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
