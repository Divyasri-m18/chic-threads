import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p style={{ color: '#7a6b6b', marginBottom: '20px' }}>
          Looks like you haven't added anything to your cart yet
        </p>
        <Link to="/shop" className="continue-shopping-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                
                <div className="quantity-controls">
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
          </div>
          
          {shipping > 0 && (
            <p style={{ fontSize: '0.85rem', color: '#7cb98b', marginBottom: '15px' }}>
              Add ₹{(1000 - subtotal).toLocaleString()} more for free shipping!
            </p>
          )}
          
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          
          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>
          
          <Link to="/shop" style={{ display: 'block', textAlign: 'center', marginTop: '15px', color: '#7a6b6b' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
