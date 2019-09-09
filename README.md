# L's React App Template

What's included:

1. https (mkcert)
2. craco
3. typescript (non-strict)
4. changelog generator
5. styled-components
6. hot-loader

## Https instruction

In order to ensure dev environment is consistent with production environment, dev with SSL is recommended.
To generate your own local development cert, use [mkcert](https://github.com/FiloSottile/mkcert). Follow its readme to install the program, then after you have run `mkcert -install`, run the scripts below:

```
cd <path-to-here>
mkdir -p build
cd build
mkcert localhost
```

The lock should now be green ✅

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Most of eject can be done via `craco`. But it's there if you need it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
