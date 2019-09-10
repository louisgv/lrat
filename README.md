# L's React App Template

What's included:

1. [![lrct](https://img.shields.io/badge/lrct-%E2%9A%99-brightgreen)](https://github.com/louisgv/lrct) - **Clone it to make your own component library, and replace it!**
2. [![https](https://img.shields.io/badge/https-%E2%9C%85-green)](https://github.com/FiloSottile/mkcert)
3. [![craco](https://img.shields.io/badge/craco-%F0%9F%9A%80-blue)](https://github.com/sharegate/craco)
4. [![typescript](https://img.shields.io/badge/typescript-%E2%9C%A8-blue)](https://www.typescriptlang.org/)
5. [![react-hot-loader](https://img.shields.io/badge/hot--loader-%F0%9F%94%A5-orange)](https://github.com/gaearon/react-hot-loader)
6. [![styled-system](https://img.shields.io/badge/styled--system-%F0%9F%97%B3-lightgrey)](https://github.com/styled-system/styled-system)
7. [![auto-changelog](https://img.shields.io/badge/auto--changelog-%F0%9F%93%9D-blue)](https://github.com/CookPete/auto-changelog)
8. [![styled-components](https://img.shields.io/badge/styled--components-%F0%9F%92%85%20-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Https instruction

In order to ensure dev environment is consistent with production environment, dev with SSL is recommended.
To generate your own local development cert, use [mkcert](https://github.com/FiloSottile/mkcert). Follow its readme to install the program, then after you have run `mkcert -install`, run the scripts below:

```
cd <path-to-here>
mkdir -p keys
cd keys
mkcert localhost
```

The lock should now be green ✅

## Available Scripts

In the project directory, you can run:

### `start`

Runs the app in the development mode.<br>
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Most eject stuff can be done via `craco`. But it's there if you need it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
