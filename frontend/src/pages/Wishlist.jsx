import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

function Wishlist() {
  const { wishlistItems } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your wishlist is empty</h2>
        <p style={{ color: '#7a6b6b', marginBottom: '20px' }}>
          Save items you love by clicking the heart icon
        </p>
        <Link to="/shop" className="continue-shopping-btn">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1 className="page-title">My Wishlist ({wishlistItems.length} items)</h1>
      
      <div className="products-grid">
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
