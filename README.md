# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Stats preview card component solution](#frontend-mentor---stats-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Installation](#installation)
    - [Steps to Setup](#steps-to-setup)
    - [Steps to Run](#steps-to-run)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.jpg)

![Stats preview card component desktop](https://user-images.githubusercontent.com/85683069/176662913-fedd34e3-575a-4219-a959-5f5b5549a5d4.png)
![Stats preview card component mobile](https://user-images.githubusercontent.com/85683069/176662919-80b5b0e3-46b3-47a0-bda0-7b4331edba0d.png)

## Installation

### Steps to Setup

1. Have node JS installed.
2. In the project root directory, run <code>npm install</code>

### Steps to Run

1. In the project root directory, run <code>npm run start</code>

### Links

- Solution URL: [Github](https://github.com/lauriselvijs/stats-preview-card-component)
- Live Site URL: [Netlify](https://9b604f-stats-preview-card-component.netlify.app/)

## My process

### Built with

- HTML5 markup
- [SCSS](https://sass-lang.com/) - advanced variant of CSS
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JS
- [Babel](https://babeljs.io/) - Babel is a JavaScript compiler
- [Webpack](https://webpack.js.org/) - Webpack is a module bundler

### What I learned

Using BEM methodology to improve css reusability

```scss
.stats-card {
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;

  width: 1100px;
  height: 446px;
  background-color: var(--primary-color);

  transition: width 1s, height 1s;

  &--clicked-mode {
    color: var(--primary-dark-color);
    background-color: var(--primary-light-color);
  }

  &__left-section {
    padding-left: 65px;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
  }
```

Using compound components pattern to improve react component reusability

```js
const StatsCard = ({ children, ...restProps }: IStatsCard) => {
  const [clickMode, setClickMode] = useState < boolean > false;

  return (
    <StatsCardContext.Provider value={{ clickMode, setClickMode }}>
      <div
        title="Click me!"
        className={
          clickMode ? "stats-card stats-card--clicked-mode" : "stats-card"
        }
        {...restProps}
        onClick={() => setClickMode(!clickMode)}
      >
        {children}
      </div>
    </StatsCardContext.Provider>
  );
};

StatsCard.LeftSection = StatsCardLeftSection;
StatsCard.RightSection = StatsCardRightSection;
```

### Continued development

Continue to work with BEM methodology

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Docs to better understand typescript
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS docs
- [w3schools CSS docs](https://www.w3schools.com/css/default.asp) - Great documentation to understand CSS
- [w3schools HTML docs](https://www.w3schools.com/html/default.asp) - Great documentation to understand HTML
- [SASS](https://sass-lang.com/documentation/) - Great documentation to understand SASS
- [ReactJS](https://reactjs.org/docs/getting-started.html) - Great documentation to understand ReactJS
- [Docker](https://docs.docker.com/) - Documentation for docker setup and use
- [BAM](http://getbem.com/) - Naming convention for css classes
- [Webpack](https://webpack.js.org/concepts/) - Webpack setup
- [Babel](https://babeljs.io/setup) - Babel setup

## Author

- Website - [Lauris](https://b2cf56-portfolio.netlify.app/projects)
- Frontend Mentor - [lauriselvijs](https://www.frontendmentor.io/profile/lauriselvijs)
