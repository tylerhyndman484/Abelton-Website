# Abelton-Website

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The Project

- Challenged myself to re-create the About page for the Ableton webiste and make it responsive.

### Screenshot

![](/Ableton_Website_Screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/tylerhyndman484/Ableton-Website.git)
- Live Site URL: [Netlify](https://ableton-website-project.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS Transistions and Animations
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

This project taught me a lot and introduced me to things i haven't encountered before. I used JavaScript for the first time to code the dropdown menu of the mobile navigation menu, as well as the More button dropwdown on non-mobile devices. I used animations and transistions with changes of clasess upon click with javascript to achieve the funciontality they original website has.

```css
.normalMobileNavLogo {
      position: relative;
      filter: none;
      z-index: 4;
      width: 5rem;
      height: 3rem;
    }

    .startingMobileNavLogo {
      position: relative;
      filter: none;
      z-index: 4;
      animation: colorWhite .3s linear forwards;
      width: 5rem;
      height: 3rem;
    }

    @keyframes colorWhite {
      0% {
        filter: none;
      }

      100% {
        filter: invert();
      }
    }


    .jsMobileNavLogo {
      position: relative;
      filter: invert();
      z-index: 3;
      animation: colorBlack .3s linear forwards;
      width: 5rem;
      height: 3rem;
    }

    @keyframes colorBlack {
      0% {
        filter: invert()
      }

      100% {
        filter: none;
      }
    }


    .menuButton {
      border: transparent;
      margin-left: 1.2rem;
      padding-top: .75rem;
      font-size: 1.1rem;
      font-family: var(--ff-bold);
      color: black;
      position: relative;
      background-color: transparent;
      z-index: 4;
      animation: menuButtonColorChange .2s linear;
    }

    @keyframes menuButtonColorChange {
      0%  {
        color: white;
      }

      100% {
        color: black;
      }

    }

    .jsMenuButton {
      border: transparent;
      margin-left: 1.2rem;
      font-size: 1.1rem;
      padding-top: .75rem;
      font-family: var(--ff-bold);
      font-weight: 400;
      color: black;
      position: relative;
      background-color: transparent;
      z-index: 4;
      animation: jsMenuButtonColorChange .2s linear forwards;
    }

    @keyframes jsMenuButtonColorChange {
      0% {
        color: black;
      }

      100% {
        color: white;
      }
    }
```

### Continued development

I am excited to keep expanding my knowledge of javascript to make more complex websites and web applications.

## Author

- Website - [No website yet](https://www.your-site.com)
- LinkedIn - [@TylerHyndman](https://www.linkedin.com/in/tyler-hyndman-11327b140/)