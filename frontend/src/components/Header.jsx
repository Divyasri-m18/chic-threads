import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { getCartCount, wishlistItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          Elegance<span>Fashion</span>
        </Link>

        {/* Navigation */}
        <nav className={mobileMenuOpen ? "nav open" : "nav"}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop?category=Kurti"
                onClick={closeMobileMenu}
                className="nav-link"
              >
                Kurti
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop?category=Sarees"
                onClick={closeMobileMenu}
                className="nav-link"
              >
                Sarees
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop?category=Western"
                onClick={closeMobileMenu}
                className="nav-link"
              >
                Western
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="header-icons">
          <Link to="/wishlist" className="icon-btn" onClick={closeMobileMenu}>
            ♡
            {wishlistItems.length > 0 && (
              <span className="icon-badge">{wishlistItems.length}</span>
            )}
          </Link>

          <Link to="/cart" className="icon-btn" onClick={closeMobileMenu}>
            🛒
            {getCartCount() > 0 && (
              <span className="icon-badge">{getCartCount()}</span>
            )}
          </Link>

          <Link to="/login" className="icon-btn" onClick={closeMobileMenu}>
            👤
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
