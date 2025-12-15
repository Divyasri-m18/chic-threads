import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccess() {
  const orderId = 'EF' + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="success-container">
      <div className="success-icon">✓</div>
      
      <h1>Order Placed Successfully!</h1>
      
      <p>Thank you for your purchase. Your order has been confirmed.</p>
      
      <div className="order-id">
        Order ID: <span>{orderId}</span>
      </div>
      
      <p style={{ fontSize: '0.9rem', color: '#7a6b6b', marginBottom: '30px' }}>
        A confirmation email has been sent to your registered email address.
        You can track your order status in the orders section.
      </p>
      
      <Link to="/shop" className="hero-btn" style={{ display: 'inline-block' }}>
        Continue Shopping
      </Link>
      
      <div style={{ marginTop: '20px' }}>
        <Link to="/" style={{ color: '#7a6b6b', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
