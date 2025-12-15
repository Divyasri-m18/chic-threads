import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = ['All', 'Kurti', 'Tops', 'Sarees', 'Western'];

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="shop-header">
        <h1 className="shop-title">
          {activeCategory === 'All' ? 'All Products' : activeCategory}
        </h1>
        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <p style={{ color: '#7a6b6b', marginBottom: '20px' }}>
        Showing {filteredProducts.length} products
      </p>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-cart">
          <h2>No products found</h2>
          <p>Try selecting a different category</p>
        </div>
      )}
    </div>
  );
}

export default Shop;
