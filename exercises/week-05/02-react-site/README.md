1. Install app with `create-react-app .`
2. Remove git connection(must be in project directory, if not you will delete your assignments repo!!!)
              `rm -rf .git`
3. Delete all contents in the `src` folder
4. Create `index.js` file in the `src` folder, give it needed imports and render method
5. Create `App.js` file, the component code, and use it in the `index.js` file's `ReactDOM.render()` method

Styling:
    // You must use 'className' instead of 'class' to assign a CSS class
        // `id`'s can still be used, but if you are re-using a component, it should be styled with a 
        // `className` so that the `id` is not repeated
    // `import './style.css'` on any file, and it will work for css on ANY component
        // Typically you will import your main style sheet on your `App.js` as convention


Other Commands:
    `npm start`      = starts up your dev server (live-preview)
    `ctrl c`         = Stops dev server
    `import`         = Imports a file or module under a name you assign
    `export default` = Used to export components as the default export for a given file.