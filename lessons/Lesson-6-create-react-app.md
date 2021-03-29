---
path: "/create-react-app"
title: "Kick off with create-react-app"
order: "6A"
description: "Kick off with create-react-app"
section: "JS Tools"
---

💡 Before Installing `create-react-app` 💡

If you already have Node.js on your machine, it's a good idea to reinstall it to make sure you have the latest version.
Keep in mind that Node.js now comes with `npm` by default.

### **MacOS**

1. Install [Homebrew](https://brew.sh/) by
   running `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` in the
   terminal.
2. Check that it was installed by running `brew --version`. You should see the version number that was installed.
3. Run `brew install node`.
4. Run `node --version`.
5. Check that `npm` was installed as well by running `npm --version`.
6. Run `brew install yarn`.
7. Run `npm --version`.
8. Run `yarn install && yarn --version`

### **Windows**

1. Please download the [Node.js Installer](https://nodejs.org/en/download/), go through the installation process, and
   restart your computer once you're done.
2. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
3. Run `yarn --version` to make sure `yarn` has been successfully installed.

### **Linux**

1. Please follow [these instructions](https://www.ostechnix.com/install-node-js-linux) to
   install [Node.js](https://nodejs.org/en/download/).
2. Run `sudo apt-get install -y build-essential`.
3. Please follow the [`yarn` installation instructions](https://yarnpkg.com/lang/en/docs/install).
4. Run `yarn --version` to make sure `yarn` has been successfully installed.

### **Scaffolding Your React App**

JSX is awesome, but it does need to be transpiled into regular JavaScript before reaching the browser. We typically use
a transpiler like [Babel](https://github.com/babel/babel) to accomplish this for us. We can run Babel through a build
tool, like [Webpack](https://github.com/webpack/webpack) which helps bundle all of our assets (JavaScript files, CSS,
images, etc.) for web projects.

To streamline these initial configurations, we  will use Facebook's Create React App package to manage all the setup for
us! This tool is incredibly helpful to get started in building a React app, as it sets up everything we need with _zero
configuration_! Install Create React App (through the command-line with [npm](https://www.npmjs.com/get-npm)), and then
we can walk through what makes it so great.

> npm install -g create-react-app

If you're seeing errors when trying to install a package globally, feel free to check
out [this article](https://docs.npmjs.com/getting-started/fixing-npm-permissions) in the npm documentation. Note that to
find out where global packages are installed, you can run `npm list -g` in your console (more
information [here](https://stackoverflow.com/questions/5926672/where-does-npm-install-packages)).

### **Set up the API file we will use to make more focus on react**

I will use a fake api that return products to give us the ability to play with it. you can [take a look](https://fakestoreapi.com/docs) at it for more information 
so now we need 4 important function to use 
1. Get Products 
2. Get Product by ID 
3. Delete Product 
4. Search in Products by Query 

so now create a folder in your `src` folder and name it `api` then create a new file called `ProductAPI.js` ad past this code on it. 
```js
const BASE_URL = 'https://fakestoreapi.com'

/**
 * Get Product by Id
 * @param productId
 * @returns {Promise<any>}
 */
export const getProductById = (productId) =>
  fetch(`${BASE_URL}/products/${productId}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error)
    })

/**
 * Delete Product
 * @param productId
 * @returns {Promise<any>}
 */
export const deleteProduct = (productId) =>
  fetch(`${BASE_URL}/products/${productId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error)
    })
/**
 * Get All Products
 * @returns {Promise<any>}
 */
export const getAllProduct = () =>
  fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error)
    })

/**
 * Search in products list
 * @param query
 * @returns {Promise<*>}
 */
export const searchProduct = async (query) => {
  const products = await getAllProduct()
  return products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )
}
```

> 🏁 [Click here to see the state of the project up until now - Starter Code with Fake API](https://github.com/mohammedelzanaty/react-guide-with-zanaty/commit/b5e730932f32e3b438ee2d7070680cccf1d3370d)
