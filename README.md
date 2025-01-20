# React Shopping Cart Application

## Overview

This is a simple shopping cart application built with React that allows users to browse products, add them to a cart, update quantities, and remove items. The cart data is stored in local storage to persist across sessions.

## Features

-Product listing with images and prices.

-Search functionality to filter products by name.

-Sorting options (by name and price).

-Add products to cart.

-Update or remove items from the cart.

-Persistent cart data using local storage.

-Clear cart option.

## Project Structure
SHOPPING-CART/
|-- node_modules
│-- public/
│-- src/
│   │-- assets/
│   │   ├── tshirt.jpeg
│   │   ├── jeans.jpeg
│   │   ├── sneakers.jpeg
│   │   ├── hats.jpeg
│   │   ├── socks.jpeg
│   │-- components/
│   │   ├── MainPage.jsx
│   │   ├── CartPage.jsx
│   │-- App.css
│   │-- App.jsx
│   │-- index.css
|   |-- main.jsx
|-- eslint.config.js
|-- index.html
|-- package-lock.json
│-- package.json
│-- README.md
|-- vite.config.js

## Installation

1.Clone the repository:
git clone https://github.com/yourusername/shopping-cart-phase2.git

cd shopping-cart-phase2

2.Install dependencies:
npm install

3.Start the development server:
npm start

4.Open the application in your browser:
http://localhost:3000

## Usage

Use the search bar to find products by name.

Use the sorting dropdown to sort products.

Click "Add to Cart" to add items.

Adjust quantities in the cart.

Remove items or clear the cart.

## Components

### App.jsx

Manages application state (products, cart, etc.).

Handles local storage functionality.

Renders MainPage and CartPage components.

### MainPage.jsx

Displays product list with sorting and search functionality.

Allows adding products to the cart.

### CartPage.jsx

Displays the cart items.

Provides functionality to update quantities and remove items.

Shows the total price.

Clear cart button to reset the cart.

## Local Storage

The cart data is saved in local storage under the key cart and is loaded when the application starts. This ensures that the user's cart persists across page reloads.

## License

This project is free software

## Contact

For any inquiries, feel free to reach out:

GitHub: (https://github.com/Amaaaarrrrrr)

## Author
Joy Mutanu

