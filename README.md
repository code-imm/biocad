# BIOCAD

## 📦 Available Scripts

| Script              | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| `npm run dev`       | Runs the development server with hot module replacement.    |
| `npm run build`     | Type-checks the project and builds it using Vite.           |
| `npm run preview`   | Serves the production build locally.                        |
| `npm run lint`      | Runs ESLint over the project.                               |
| `npm run deploy`    | Deploys the contents of the `build` folder to GitHub Pages. |
| `npm run predeploy` | Automatically runs `build` before deployment.               |

> 💡 To deploy, make sure the `gh-pages` branch is configured correctly and the repository is set up for GitHub Pages.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 🛠 Prerequisites

Ensure the following are installed:

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [gh-pages](https://github.com/tschaub/gh-pages) (for deployment)

To install all dependencies:

```bash
npm install
```

## 🚀 Deployment

To deploy to GitHub Pages:

1. Make sure your repository has GitHub Pages enabled.
2. Set the deploy branch to `gh-pages` (in repo settings).
3. Run:

```bash
npm run deploy
```

This will build the app and publish the `build/` folder to the `gh-pages` branch.
