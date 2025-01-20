const CartPage = ({ cart, updateQuantity, removeFromCart, totalPrice, clearCart }) => {
    return (
      <div>
        <h1 id="list-identifier">Shopping Cart</h1>
        {cart.length > 0 ? (
          <div className="cart">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button id="Bt" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button id="Bt" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button id="Bt" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <h2 id="Total-price">Total Price: ${totalPrice}</h2>
            <button id="Clear" onClick={clearCart}>Clear Cart</button>
          </div>
        ) : (
          <p id="cart-notification">Your cart is empty.</p>
        )}
      </div>
    );
  };
  
export default CartPage;
  
