import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>EleganceFashion</h3>
          <p style={{ color: '#a09090', lineHeight: 1.8 }}>
            Your destination for beautiful women's fashion. 
            From traditional elegance to modern style.
          </p>
        </div>

        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/shop?category=Kurti">Kurti</Link></li>
            <li><Link to="/shop?category=Tops">Tops</Link></li>
            <li><Link to="/shop?category=Sarees">Sarees</Link></li>
            <li><Link to="/shop?category=Western">Western</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="#">divyasri.m018@gmail.com</a></li>
            <li><a href="#">+91 9865324675</a></li>
            <li><a href="#">Tamilnadu, India</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 EleganceFashion. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;