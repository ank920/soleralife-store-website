import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ cartCount = 0 }) => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Solera<span className="logo-highlight">Life</span>
                </Link>

                <div className="nav-links">
                    <Link to="/products/accel-wipes" style={{ textDecoration: 'none', color: 'inherit' }}>Product</Link>
                    {/* Benefits section isn't implemented as ID yet, mapping to Stats or Tech */}
                    <a href="/#technology">Benefits</a>
                    <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
                    <a href="/#contact">Wholesale (B2B)</a>
                </div>

                <div className="nav-actions">
                    <Link to="/cart" className="cart-btn" aria-label="Cart">
                        <ShoppingCart size={24} />
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                    <button className="mobile-menu-btn" aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
