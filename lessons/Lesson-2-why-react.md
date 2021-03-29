---
path: "/why-react-is-awesome"
title: "Why React is Awesome"
order: "2A"
description: "Why React is Awesome"
section: "Intro"
---
it's been a long time that I want to take a chance to write about one of my fav things in my life which it's react, of
course, react... so let's first start by

**What's is reactjs?**
----------------------

As described

1. [React-js](https://reactjs.org/docs/getting-started.html) documentation it's a JavaScript library for building user
   interfaces.
2. [Wikipedia](https://en.wikipedia.org/wiki/React_(JavaScript_library)) React is a JavaScript library for building user
   interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as
   a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data
   that needs to be recorded.

so after we know simple definitions about react let's dive into **Why I Luv react and why it's really awesome ?!!!**

### Composition

In programming... The composition is combining simple functions to build a more complicated one.

Let's think of composition with another way In
mathematics, [Function Composition](https://en.wikipedia.org/wiki/Function_composition) is an operation that takes two
functions  `f` and g and produces a function h such that `h(x) = g(f(x))` In this operation, the function `g` is applied to the result of applying the function _f_ to _x_. That is, the
functions `f : X → Y and g : Y → Z` are **composed** to yield a function that maps `x in X to g(f(x))
in Z`.

I see that things might go to be more complicated so now let's take an example,
using [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to create a
new array from an initial set of data, and then filtering the result
using [filter()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) as a **
NOTE:**  _map, filter think of them as a factory or containers that given an initial list (array of things), transform
it into something else, while keeping that same original list intact. :_

```jsx
const people = ['Mohammed', 'Yasmeen', 'Elzanaty', 'Hamza', 'Saad']; 
people.map(name => name[0]).filter(char => char === 'M') //'M'
```

### [Imperative Code](https://tylermcginnis.com/imperative-vs-declarative-programming/)

we tell code exactly what to do and how to do it.

```jsx
const people = ['Mohammed', 'Yasmeen', 'Elzanaty', 'Hamza', 'Saad']; 
const excitedPeople = [];
for (let i = 0; i < people.length; i++) {
   excitedPeople[i] = people[i] + '!'
}
// ["Mohammed!", "Yasmeen!", "Elzanaty!", "Hamza!", "Saad!"]
```
### [Declarative Code](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)

It's an easy and better approach for me, bcoz you let the computer do all that you need for you, you just want to
express the logic of a computation without describing its control flow we don't code up all of the steps to get us to
the end result. Instead, we declare what we want to be done, and code will take care of doing it.

```jsx
const people = ['Mohammed', 'Yasmeen', 'Elzanaty', 'Hamza', 'Saad']; 
const excitedPeople = people.map(name => name + '!')
// ["Mohammed!", "Yasmeen!", "Elzanaty!", "Hamza!", "Saad!"]
```

> **Imperative code,** instructs code for how to perform each step.

> **Declarative code**, instructs code for what we want to be done, and let code take care of performing the steps.

### Unidirectional Data Flow

In general, this concept means that data has one, and only one, way to be transferred to other parts of the application.

In React, the data flows from the parent component to a child component. so data flows in only one direction Parent =>
Child. If data is shared between sibling child components, then the data should be stored in the parent component and
passed to both of the child components that need it.

### [Virtual DOM](https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation)

First of all — the _Virtual DOM_ was not invented by React, but React uses it and provides it for free.

The _Virtual DOM_ is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific
implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of
an abstraction.

The Virtual DOM reflects a tree in which each node is an HTML element. React is able to traverse and carry out
operations on this Virtual DOM, saving our app from having "costly" activity on the actual DOM.

![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C5612AQFbwsKzJw4v2A/article-inline_image-shrink_1000_1488/0/1565018330860?e=1622678400&v=beta&t=LrGecxs5TAlZyZnSwzPb7CZwLqzomp3-yuqGKT-o4kw)

### [The Diffing Algorithm](https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm)

Diffing determines how to make efficient changes to the DOM. With diffing, old DOM nodes are taken out and replaced only
when necessary. This way, our app doesn't perform any unnecessary operations to figure out when to render content.
