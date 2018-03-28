# ReactJS Facebook messenger

The goal of this exercise is to learn how to style your components using styled-components.

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
 yarn add styled-components
 npm install styled-components
 ```

### Part 2, refactoring

- Once you installed styled-components you can start refactoring your application
- Current styles, which are being mapped to our components via classes, can be found in the index.css file (SASS is being compiled to CSS) which is being imported to the index.js file
- Take appropriate styles from the stylesheet for each of the component and create styled components within each of the components or as a separate component should you need it (if the styled-component is being used on multiple places)
- You can find an example of how styled-components can be implemented in App.js
- You can work your way through your application, starting with smaller components in the Layout folder to the bigger ones in Messenger
- If you feel that there is a valid reason to keep some styles in the stylesheet be it


### Part 3, sharing variables

In case we need to share variables (like colours or sizes) between CSS and JS we can borrow :export from CSS Modules for this occasion
Create an uncontrolled component called Input that replaces the &lt;input&gt; in Login.js. You can create your Input component in src/components/form/Input.js, there are some tips in that file.

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
