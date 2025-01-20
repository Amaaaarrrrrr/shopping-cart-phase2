import { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import CartPage from "./components/CartPage";

// Importing images
import tshirtImage from "./assets/tshirt.jpeg";
import jeansImage from "./assets/jeans.jpeg";
import sneakersImage from "./assets/sneakers.jpeg";
import hatImage from "./assets/hats.jpeg";
import socksImage from "./assets/socks.jpeg";

const App = () => {
  // Initialize products array with sample data
  const products = [
    { id: 1, name: "T-Shirt", price: 20, image: tshirtImage },
    { id: 2, name: "Jeans", price: 40, image: jeansImage },
    { id: 3, name: "Sneakers", price: 60, image: sneakersImage },
    { id: 4, name: "Hat", price: 15, image: hatImage },
    { id: 5, name: "Socks", price: 5, image: socksImage },
  ];

  // Retrieve cart items from local storage or initialize as an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart if it doesn't exist, or update quantity if it does
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart by id
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update quantity of a product in cart by id
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Clear the cart and remove data from local storage
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Render the main page and cart page
  return (
    <div className="App">
      <MainPage products={products} addToCart={addToCart} />
      <CartPage
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
        clearCart={clearCart}
      />
    </div>
  );
};

export default App;
