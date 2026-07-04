# UsingBabble

## What this project does

This directory demonstrates using Babel to compile JSX code written in `script.js` into browser-compatible JavaScript.

## Babel overview

Babel is a JavaScript compiler that transforms modern JavaScript and JSX into code that can run in environments that do not support those features natively.

In this project, Babel is used to:

- transform JSX syntax (`<div>...</div>`) into standard JavaScript function calls
- support React code in the browser using the UMD React and ReactDOM scripts included in `cat.html`

## Configuration

The Babel configuration file is `babel.config.js`.

Current config:

```js
module.exports = {
  presets: [["@babel/preset-react", { runtime: "classic" }]],
  sourceMaps: true,
};
```

This configuration tells Babel to use the React preset with the `classic` runtime and to generate source maps for debugging.

### How I enabled source mapping

I added source mapping in two places:

1. In `babel.config.js`, I set `sourceMaps: true` so Babel generates a `.map` file during compilation.
2. In `package.json`, I added a build script using `--source-maps` so the build command creates the mapping file automatically.

After running the build, Babel creates files such as `lib/script.js` and `lib/script.js.map`.

### Why `classic` runtime?

The project loads React from CDN as UMD builds in `cat.html`:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

With UMD React, the compiled output must use the classic React transform instead of the newer automatic runtime. That avoids generating imports like `react/jsx-dev-runtime`, which do not work in this browser setup.

## Common problems we faced

1. `Bable.config.js` typo

- Problem: Babel only recognizes `babel.config.js` or `.babelrc`.
- Effect: Babel ignored the configuration and did not compile JSX correctly.
- Solution: Rename the file from `Bable.config.js` to `babel.config.js`.

2. Browser output importing `react/jsx-dev-runtime`

- Problem: Babel default JSX transform generated ES module imports for the automatic runtime.
- Effect: The browser could not resolve `react/jsx-dev-runtime` when using UMD React.
- Solution: Configure `@babel/preset-react` with `{ runtime: 'classic' }` so output is compatible with UMD React.

## How to build

From the `UsingBabble` folder, run:

```powershell
npm install
npm run build
```

This compiles `script.js` into `lib/script.js` and generates a source map so browser devtools can trace the compiled output back to the original JSX source.

## Why source maps matter

Source maps are important because they make debugging much easier. When the browser reports an error in the compiled JavaScript, the source map tells devtools which original line in `script.js` created that code. That means you can debug the readable JSX source instead of searching through generated output.

In this project, source maps are enabled in `babel.config.js`, and the build command includes `--source-maps` so debugging stays straightforward.
Make in `babel.config.js` in SourceMap: true
## How to view

Open `cat.html` in a browser. The file includes the compiled script and renders the React element into the `#root` container.

## Notes

- If you want to use the newer JSX automatic runtime in a browser setup, you need a different React build and additional configuration.
- For this project, the `classic` runtime is the simplest and most compatible choice.
