---
path: "/components"
title: "Components"
order: "4A"
description: "components in react"
section: "Without React Decoration"
---
Now that we've done that, let's separate this out from a script tag on the DOM to its own script file (best practice.)
  1. Make a new file in your `src` directory called `App.js` and cut and paste your code into it.
  2. Add `<script src="App.js"></script>` before end of the body at `index.html` to link js file

Modify your code, so it looks like:

```javascript
const Product = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Mens Cotton Jacket"),
    React.createElement("h2", {}, "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions,"),
    React.createElement("h2", {}, "55.99$"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "MZ Shop"),
    React.createElement(Product),
    React.createElement(Product),
    React.createElement(Product),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

> 🚨 You will be seeing a console warning `Warning: Each child in a list should have a unique "key" prop.` in your browser console. React's dev warnings are trying to help your code run faster. Basically React tries to keep track of components are swapped in order in a list and it does that by you giving it a unique key it can track. If it sees two things have swapped, it'll just move the components instead of re-rendering.


* To make an element have multiple children, just pass it an array of elements.
* We created a second new component, the `Product` component. This component represents one product. When you have
  distinct ideas represented as markup, that's a good idea to separate that it into a component like we did here.
* Since we have a new `Product` component, we can use it multiple times! We just use multiple calls
  to `React.createElement`
  .
* In `createElement`, the last two parameters are optional. Since Product has no props or children (it could, we just
  didn't make it use them yet) we can just leave them off.

> 🏁 [Click here to see the state of the project up until now - React without Decoration Part 1](https://github.com/mohammedelzanaty/react-guide-with-zanaty/commit/e6f2035958dcedd42ba20615c6bc27e95d54cc6e)


Okay, so we can have multiple product, but it's not a useful component yet as the product contain a lot of properties
like title, price, description and image etc. Let's make it a bit more complicated.

```javascript
const Product = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title),
    React.createElement("h2", {}, props.description),
    React.createElement("h2", {}, props.price),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "MZ Shop"),
    React.createElement(Product, {
      title: "Samsung SE450",
      description: "21.5-inch desktop business monitor offers superior ergonomics and eco-friendly features – constructed with 30%",
      price: "89.99$",
    }),
    React.createElement(Product, {
      title: "Mac Book Pro",
      description: "our perfect pack for everyday use and walks in the forest. 15 inches) in the padded sleeve, your everyday",
      price: "700$",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

Now we have a more flexible component that accepts props from its parent. Props are variables that a parent (App) passes
to its children (the instances of Product.) Now each one can be different! Now that is far more useful than it was since
this Product component can represent not just Mens Cotton Jacket, but any Product. This is the power of React! We can make multiple, re-usable
components. We can then use these components to build larger components, which in turn make up yet-larger components.
This is how React apps are made!

> 🏁 [Click here to see the state of the project up until now - React without Decoration - Part 2](https://github.com/mohammedelzanaty/react-guide-with-zanaty/commit/442679c8cee971e17db7af0d1f49713ed0021aef)
