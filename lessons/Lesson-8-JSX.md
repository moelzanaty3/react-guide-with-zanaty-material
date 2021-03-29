---
path: "/jsx"
title: "JSX"
order: "8A"
description: "JSX"
section: "Core React Concepts"
---

So far we've been writing React without JSX, something that I don't know anyone that actually does with their apps. _
Everyone_ uses JSX. I show you this way so what JSX is actually doing is demystified to you. It doesn't do hardly
anything. It just makes your code a bit more readable.

If I write `React.createElement("h1", { id: "main-title" }, "My Website");`, what am I actually trying to have rendered
out? `<h1 id="main-title">My Website</h1>`, right? What JSX tries to do is to shortcut this translation layer in your
brain, so you can just write what you mean. Let's convert `Product.js` to using JSX. It will look like this:
```jsx
import React from 'react'

const Product = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.price}</h2>
    </div>
  )
}

export default Product
```

I don't know about you, but I find this far more readable. And if it feels uncomfortable to you to introduce HTML into
your JavaScript, I invite you to give it a shot until the end of the workshop. By then it should feel a bit more
comfortable. And you can always go back to the old way.

However, now you know _what_ JSX is doing for you. It's just translating those HTML tags into `React.createElement`
calls. _That's it._ Really. No more magic here. JSX does nothing else. Many people who learn React don't learn this.

Notice the strange `{props.title}` syntax: this is how you output JavaScript expressions in JSX. An expression is
anything that can be the right side of an assignment operator in JavaScript,
e.g. `const x = <anything that can go here>`. If you take away the `{}` it will literally output `props.title` to the
DOM.

Notice you still have to import React despite React not being explicitly used. Remember that JSX is compiled
to `React.createElement` calls. Anywhere you use JSX, you need to import React.

So now JSX is demystified a bit, let's go convert App.js.

```jsx
import React, { Component } from 'react'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div>
        <h1>MZ Shop!</h1>
        <Product
          title="Samsung SE450"
          description="desktop business monitor offers superior ergonomics"
          price="89.99$"
        />
        <Product
          title="Mac Book Pro"
          description="Stash your laptop (up to 15 inches) in the padded sleeve,"
          price="700$"
        />
      </div>
    )
  }
}

export default App
```

Notice we have Product as a component. Notice that the `P` in `Product` is capitalized. It _must_ be. If you make it lowercase,
it will try to have `product` as a web component and not a React component.

We now pass props down as we add attributes to an HTML tag. Pretty cool.

> 🏁 [Click here to see the state of the project up until now: 04-jsx](https://github.com/mohammedelzanaty/react-guide-with-zanaty/commit/3a5a7260aebd28234cac5f63fa27ab3ef5a9f3ca)
