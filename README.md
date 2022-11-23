<div align="center">
<img src="public/icon-128.png" alt="logo"/>
<h1> Chrome Extension Boilerplate with<br/>React + Vite + TypeScript + TailwindCSS</h1>

</div>

## Intro <a name="intro"></a>

This boilerplate is meant to be a quick start for creating chrome extensions using React, Typescript and Tailwind CSS.

- Read more about Chrome manifest v2 support [here](https://developer.chrome.com/docs/extensions/mv2/).
- Read more about Firefox Manifest v3 support [here](https://discourse.mozilla.org/t/manifest-v3/94564).

## Features <a name="features"></a>

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Usage <a name="usage"></a>

### Setup <a name="setup"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Run `pnpm i` (check your node version >= 16)
4. Run `pnpm dev`
5. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
6. If you want to build in production, Just run `pnpm build`.

### Customization

As the template has **all** of the potential Chrome extension pages implemented, you likely have to
customize it to fit your needs.

E.g. you don't want the newtab page to activate whenever you open a new tab:

1. remove the directory `newtab` and its contents in `src/pages`
2. remove the `newtab` rollup input in the `vite.config.ts`

```ts
//...
build: {
    outDir,
    rollupOptions: {
      input: {
        devtools: resolve(pagesDir, 'devtools', 'index.html'),
        panel: resolve(pagesDir, 'panel', 'index.html'),
        content: resolve(pagesDir, 'content', 'index.ts'),
        background: resolve(pagesDir, 'background', 'index.ts'),
        popup: resolve(pagesDir, 'popup', 'index.html'),
        newtab: resolve(pagesDir, 'newtab', 'index.html'),  // <--- REMOVE THIS LINE
        options: resolve(pagesDir, 'options', 'index.html'),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
/...
```

# Tech Docs <a name="tech"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [Chrome Extension with manifest 3](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)
- [Tailwind CSS](https://tailwindcss.com/docs/configuration)

# Credit <a name="credit"></a>

Heavily inspired by [Jonghakseo's vite chrome extension boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite).
It uses SASS instead of TailwindCSS if you want to check it out.
