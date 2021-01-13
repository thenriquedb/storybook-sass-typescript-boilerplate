# Boilerplate to use with Storybook, Sass, TypeScript and JEST

### What is insided?
*  [TypeScript](https://www.typescriptlang.org/)
*  [Sass](https://sass-lang.com/)
*  [classnames](https://www.npmjs.com/package/classnames)
*  [Storybook](https://storybook.js.org/)
*  [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
*  [Eslint](https://eslint.org/)
*  [Eslint](https://prettier.io/)

### How to use
```shell
yarn && yarn storybook
# or npm install && npm run storybook  
```

### Scripts
* ``test``: run all jest tests
* ``storybook``: run storybook on ``6006`` port
* ``lint``: run the linter on all components
* ``build-storybook``: create the build version of storybook

#### Absolute paths 
**TypeScript** 
```ts
// anyComponent.tsx
import { Component } from 'packages/Component';
import sass from 'sass/*';
```
**SCSS** 
```scss
// component.module.scss
@import "sass/*";
@import "sass/config/colors";
```

