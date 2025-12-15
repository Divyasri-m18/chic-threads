import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="product-category">{product.category}</span>
        <button 
          className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={handleWishlistToggle}
        >
          {isInWishlist(product.id) ? '❤️' : '♡'}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-price">
          <span className="current-price">₹{product.price.toLocaleString()}</span>
          <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          <span className="discount-badge">{product.discount}% OFF</span>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
