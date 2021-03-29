---
path: "/react-state-and-lifecycles"
title: "State and Lifecycle Methods with React"
order: "11A"
description: "State and Lifecycle Methods with React"
section: "React Capabilities"
---

Before dig deeper and dive for getting data from the api let's clear some important concepts and make sure we understand
it well one of these important concepts is `state` so what's the state

#### **State**

As [ReactDOC](https://reactjs.org/docs/faq-state.html)

- plain JavaScript object
- managed within the component (similar to variables declared within a function).
- can only be used in Class Components
- can be updated only by a `setState` function

the code for it will be like

```jsx
class App extends Component {
  // ...
  state = {}
  // ...
}
```

updated with

```jsx
// this give you access to the previous state 
this.setState((prevState) => ({ ... }))
OR
this.setState({ ... }) 
```

> 📝 props get passed to the component (similar to function parameters) and it's immutable i.e. once set the props cannot be changed,

so for now we need to statue our products in the app and initialize it with empty array for now

```jsx
class App extends Component {
  state = {
    products: []
  }

  render() {
    // ...
  }
}
```

the next step will be get the data from the `API` and this will lead us to other important concept

#### **The Component Lifecycle**

As [ReactDOC](https://reactjs.org/docs/react-component.html)
Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You
can use [this lifecycle diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) as a cheat sheet. In
the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use
cases.

so there're three phases  `Mounting`, `Updating`, and `Unmounting` that every component goes through

let's think a little here what we need to achieve in simple words `get products and parse it to the DOM` so logically we
are in the mounting phase there's a lot of stuff happen here but for now let foucs on `componentDidMount` which invoked
immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go
here.  [see more](https://reactjs.org/docs/react-component.html#componentdidmount)

> If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

to apply this at our code

```jsx
import React, { Component } from 'react'
import { getAllProduct } from './api/ProductAPI'

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    // get products
    getAllProduct().then(products => {
      if (Array.isArray(products)) {
        this.setState({ products })
      }
    })
  }

  render() {
    return (
      <div>
        <div className="product-list">
          <pre>
            <code>{JSON.stringify(this.state, null, 2)}</code>
          </pre>
        </div>
      </div>
    )
  }
}

export default App
```

- Whenever a class gets created (React or not), the constructor gets called. If you don't create a constructor, there's
  a default one that silently gets run in the background. Inside we accept the props from whatever parent created it and
  then call `super(props)` since we need to take those props and hand them to React.

- We initiate state here. We are going to be keeping an array of products data that we load from the API. We'll
  initialize that as an empty array so we never have to check if that array exists or not.

- We're calling getAllProduct method. This lets us get all available products.

- Now, after the response comes back from the API, we call a method called setState. setStates takes in an object and
  does a shallow merge with your current state.

- Now we take that API data and output that to the DOM. Notice React is smart enough to re-render itself after a
  setState is called. pre and code are two tags that allow you to output that code pre-formatted.

Let's make the app use the Product Component we made

```jsx
import React, { Component } from 'react'
import { getAllProduct } from './api/ProductAPI'
import Product from './Product'

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    // get products
    getAllProduct().then(products => {
      if (Array.isArray(products)) {
        this.setState({ products })
      }
    })
  }

  render() {
    return (
      <div>
        <div className="product-list">
          {this.state.products &&
          this.state.products.map(product => (
            <Product
              title={product.title}
              image={product.image}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
```

- We use map which takes a JavaScript array, takes a function, applies that function to each array item (i.e. if you
  have an array of length 15, that function gets called 15 times,) and returns a new array containing the results of
  each of those function called. In const x = [1,2,3].map(num => { return num * 2});, x is [2,4,6]. In this case, we
  have an array of Pet data objects, and we transform those into Pet components.

if you open your console now you will find `Warning: Each child in a list should have a unique "key" prop.` bcoz Key is
a unique identifier that we give React, so it can do quick comparisons on objects. If we decide to change how we sort
the list of products, e.g. we sort by title instead of price, we'd re-arrange all the object but they'd be the same
object. All React knows is it got a new list. Without any further hinting, React would just destroy all the DOM objects
and start over. If we give it a unique key for each object, it can track that an object just moved positions and didn't
actually get destroyed and just move the DOM object instead of re-rendering. Big performance win.

so to achieve this and remove warning so the map will

```jsx
this.state.products.map(product => (
  <Product
    key={product.id} /* this line added */
    title={product.title}
    image={product.image}
    price={product.price}
    category={product.category}
    description={product.description}
  />
))
```

> 🏁 [Click here to see the state of the project up until now - State Life Cycle Method](https://github.com/mohammedelzanaty/react-guide-with-zanaty/commit/39c564868e4c0e2fc1dc5c609b7481e94c72a9ea)
