
const CartPage = ({ cart, updateQuantity, removeFromCart, totalPrice }) => {
  
    // Render the cart page with product details, quantity controls, and total price
    return (
      <div>
        <h1>Shopping Cart</h1>
        {cart.length > 0 ? (
          <div className="cart">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <h2>Total Price: ${totalPrice}</h2>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  };
  
  export default CartPage;
  