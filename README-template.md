# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Ashutosh Khamar](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

1) Click on the 'dice' button and get new quote on 'click' event.

2) I am still not able to adjust the position of 'dice' button on the container.
- 

### Screenshot

(.images/desktop-view.jpg)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Angular](https://Angular.io/) - JS library
- [Node.js](https://nextjs.org/) - Angular framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

```.advice.component.html
	<button class="icon-dice" (click)="getAdvice()">
        </button>
```
```advice.component.css
.icon-dice{
    background-image: url("../../assets/images/icon-dice.svg");
    background-color: hsl(150, 100%, 66%);
    border-radius: 50%;
    width:40px;
    height:40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40%;
    transition:all .1s ease;
    
    position: absolute;
    top:92%;
    border:0;
}
```
```advice.componnet.ts
 getAdvice(){
    this.service.getAdvices().
    subscribe(response=>{
      console.log(response)
      this.advices = response;
      this.advice = this.advices['slip'].advice;
      this.adviceId= this.advices['slip'].id;
      console.log("Advice " + this.advice)


    })
    
  }
```

## Author

- Frontend Mentor - [@ash4chilled](https://www.frontendmentor.io/profile/ash4chilled)