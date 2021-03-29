---
path: "/component-composition"
title: "Component Composition"
order: "9A"
description: "Component Composition"
section: "Core React Concepts"
---

I remember the first project I made in react and the way of thinking through building the component, just need to create
too many components, but I found at the end of the day that this lead to deeply nested structures which made it a pain
to pass props all the way down. so now react provide a solution for this
by [Composition][https://reactjs.org/docs/composition-vs-inheritance.html] and this lead us to

#### **What's Composition**

In React, composition is a natural pattern of the component model. It's how we build components from other components,
of varying complexity and specialization through props. Depending on how generalized these components are, they can be
used in building many other components.

**Reducing Component Nesting With Composition**

for example here in our application the `Product` component. each product will have various information about the
product including title, price, image and description etc...

```jsx
// Product Card Component 
const ProductCard = props => {
  return (
    <div className="card">
      <img src={props.image} />
      <ProductInfo {...props} />
      ...
    </div>
  )
}
// Product Info Component 
const ProductInfo = ({ title, description, price, category }) => {
  return (
    <div className="product">
      <h1 className="product__title">{title}</h1>
      <ProductCategoryAndPrice price={price} category={category} />/>
      <p className="product__description">{description}</p>
    </div>
  )
}

// ProductCategory And PriceComponent 
const ProductInfo = ({ price, category }) => {
  return (
    <div>
      <h4 className="product__price">{price}</h4>
      <p className="product__category">{category}</p>
    </div>
  )
}
```

so we can do this better here to reduce the nested structure by using `props.children` and by handling specialization
through props.

```jsx
// Card.js
import React from 'react'

const Card = props => {
  return (
    <div className="product">
      {props.image && (
        <img src={props.image} className="product-avatar" alt={`product of ${props.title}`} />
      )}
      <div className="product-details">{props.children}</div>
      <div className="product-remove">remove</div>
    </div>
  )
}

export default Card
```

so now before we continue I have a question

#### **What's Children**

The React docs say that you can use `props.children` on components that represent `generic boxes`
and that ‘don’t know their children ahead of time’. For me, that did not really clear things up. I’m sure for some, that
definition makes perfect sense, but it did not for me. My simple explanation of what `this.props.children` does is that
> it is used to display whatever you include between the opening and closing tags when invoking a component.

A simple example Here’s an example of a stateless function that is used to create a component. Again, since this is a
stateless function, there is no 'this' keyword so just use `props.children`

```jsx
const Product = (props) => {
  return (
    <div>
      <h1>Zanaty</h1>
      {props.children}
    </div>
  )
}
```

This component contains an `<h1>` that is receiving some props, and then it is displaying {props.children}. Whenever
this component is invoked`{props.children}` will also be displayed and this is just a reference to what is between the
opening and closing tags of the component.

so let's back to our code and create a product card in `Product.js`

```jsx
import React from 'react'
import Card from './Card'

const Product = props => {
  return (
    <Card title={props.title} image={props.image}>
      <h3 className="product-title">{props.title}</h3>
      <div className="product-meta">
        <p className="product-price">{props.price}</p>
        <p className="product-category">{props.category}</p>
      </div>
      <p className="product-description">{props.description}</p>
    </Card>
  )
}
export default Product
```

but now as we add more props to our code we need to edit the `Product` component at `App.js` like

```jsx
import React, { Component } from 'react'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div>
        <div className="product-list">
          <Product
            title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            description="Your perfect pack for everyday use and walks in the forest. "
            price="89.99$"
            category="men clothing"
            image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          />

          <Product
            title="Mens Casual Premium Slim Fit T-Shirts"
            description="Slim-fitting style, contrast raglan long sleeve, three-button henley placket,"
            price="89.99$"
            category="men clothing"
            image="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          />
        </div>
      </div>
    )
  }
}

export default App
```

What are some benefits of this change? We now have code (the Card component) that is more reusable as a result of it
being generalized. We create the specialized cards `ProductCard` by passing props through Card. We made our overall code
cleaner by unifying individual components that are not reusable, resulting in a simpler structure that doesn't require
passing props down through many components.

In general I find two reasons to break a component into smaller components: reusability and organization. When you want
to use the same component in multiple places (e.g. a button, a tool tip, etc.) then it's helpful to have one component
to maintain, test, use, etc.

Other times it can be useful to break concepts down into smaller concepts to make a component read better. For example,
if we put all the logic for this entire page into one component, it would become pretty hard to read and manage. By
breaking it down we can make each component easier to understand when you read it and thus maintain.

Looks much better! The links don't go anywhere yet but we'll get there. We don't have a good loading experience yet
though. Right now we just seem unresponsive. Using a new tool to React called Suspense we can make the DOM rendering
wait until we finish loading our data, show a loader, and then once it finishes we can resume rendering it. This is
coming soon; for now you would just keep track of a loading Boolean and then conditionally show your component or a
loading spinner based on whether it was finished loading or not.

It's important to note that this is just a demonstration of a concept and by no means the 'right' way. Depending on your
needs, you may compose your components differently.

> I hear you enough working with static data and let's make stuff more dynamically from the backend 

> 📝 NOTE in the commited code you will find CSS I add to make thing looks nicer

> 🏁 [Click here to see the state of the project up until now: 07-component-composition](https://github.com/mohammedelzanaty/react-guide-with-zanaty/commit/6e1a7c36dec7eb028b8c46efe790c93f6f7ae9d9)
