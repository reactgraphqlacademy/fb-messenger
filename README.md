# ReactJS Facebook messenger

The goal of this exercise is to learn how to style a React app using styled-components.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout styling-in-react
 ```

## Exercise

### Part 1, install styled-components

styled-components is a npm package which we need to add to our project
```sh
 npm install --save styled-components
 ```

### Part 2, sharing variables

You can share variables(like colours) between CSS and JavaScript by using :export from CSS Modules.

- Copy the Sass variables from src/index.scss into src/styles/variables.scss
- Export the Sass variables as JavaScript by exporting them in src/styles/export/colours.scss. You have an example on how we export $white in colours.scss

src/App.js shows you how we use the Sass $white variable as a JavaScript variable.

### Part 3, refactoring

Once you installed styled-components and you have your Sass variables in JS, you can start refactoring your application.

Current styles, which are being mapped to our components via classes, can be found in the index.css file (Sass is being compiled to CSS) which is being imported to the src/index.js file. The goal of the refactoring is to migrate those src/index.js styles into styled-components.

- To get started, uncomment the AppWrapper component in src/App.js. Follow the comments in that file to get more tips.
- Take appropriate styles from the stylesheet for each of the component and create styled components within each of the components or as a separate component should you need it (if the styled-component is being used on multiple places).
- You can work your way through your application, starting with smaller components in the Layout folder to the bigger ones in Messenger.

## Links

- [https://www.styled-components.com/](https://www.styled-components.com/)
- [https://github.com/css-modules/webpack-demo](https://github.com/css-modules/webpack-demo)
- [https://github.com/css-modules/css-modules/](https://github.com/css-modules/css-modules/)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
