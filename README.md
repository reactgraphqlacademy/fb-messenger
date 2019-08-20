# ReactJS Facebook messenger

The goal of this exercise is to learn how to start testing in JavaScript.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md

### Step 2

```sh
 git checkout testing-e2e
```

### Step 3

```sh
 npm i
```

## Part 0

- Install cypess with `npm i cypress`
- Create a script to run cypress in your package.json that will open and run cypress with `"cypress": "./node_modules/.bin/cypress open"`
- Configure cypess base url to test against. Create a cypress.json to set your base url: `{ "baseUrl": "http://localhost:3000/", "chromeWebSecurity": false }` [further config options](https://docs.cypress.io/guides/references/configuration.html#Options)

TIP: You can see in your editor the reference types using `/// <reference types="Cypress" />` at the top of any test file as long as it uses IntelliSense. If you use VS Code you can add a tsconfig.json and include the following so you don't need to add it at the top of test files:

````{
    "compilerOptions": {
        "allowJs": true,
        "baseUrl": "../node_modules",
        "types": [
            "cypress"
        ]
    },
    "include": [
        "**/*.*"
    ]
}```



## Part 1

Setup Cypess in the application and write and inital test which navigates to the root path and checks that the text "Please sign in" is present. Run your test and check everything is working.

You'll need to use the [`cy.visit()`](https://docs.cypress.io/api/commands/visit.html#Usage) and the [`cy.test()`](https://docs.cypress.io/api/commands/get.html#Syntax) and use a should() to [assert](https://docs.cypress.io/api/commands/should.html#Syntax)

## Part 2

Create a new test file called login login.spec.js and write a test which:

1. Navigates to the login page
2. Fills the inputs with text (use the cypress selector playground to help)
3. Click the login button. Try adding a `data-cy={`submit-button`}` attr to the button in order to make it easier to target.
4. Write an assertion that shows your login was successful, what would be a good thing to assert against?

## Part 3

Create a new test file called sendMessage.spec and write some tests which:

1. Use a `beforeEach()` to login and get to the right starting point
2. Create a test that checks our initial values are present
3. Create a test that clicking "Messages" nagivates to the correct url `/messages`
4. Create a test that selects the input box and types a text message before asserting that the message has appeared in the UI

HINT: you may want to implement the following data-cy selectors in the code to help you with the test:

- `data-cy=thread`
- `data-cy=messageBox`
- `data-cy="message [INDEX]"`

## Bonus

- Create a custom cypress command which handles the login for you in `support/commands.js` and refactor your tests to make use of the command.

- Write some more tests! What other things constitute important functionality that we have not yet tested?

## Links

- [Cypess Docs](https://docs.cypress.io/guides/overview/why-cypress.html)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
````
