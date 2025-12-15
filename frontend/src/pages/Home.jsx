import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Home() {
  const featuredProducts = products.slice(0, 8);

  const categories = [
    { name: 'Kurti', icon: '👗', description: 'Traditional elegance' },
    { name: 'Tops', icon: '👚', description: 'Casual & trendy' },
    { name: 'Sarees', icon: '🥻', description: 'Timeless beauty' },
    { name: 'Western', icon: '👠', description: 'Modern style' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Discover Your Style</h1>
        <p>Explore our curated collection of beautiful women's fashion</p>
        <Link to="/shop" className="hero-btn">Shop Now</Link>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              to={`/shop?category=${category.name}`} 
              key={category.name}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p style={{ color: '#7a6b6b', fontSize: '0.9rem', marginTop: '5px' }}>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/shop" className="hero-btn">View All Products</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
