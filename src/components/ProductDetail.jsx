import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './ProductDetail.css';
import productImg from '../assets/intervention-wipes-1.jpg';
import detailsImg from '../assets/wipes_details.webp';

const ProductDetail = ({ onAddToCart, isIndia: isIndiaProp, headingLevel = 'h1' }) => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(productImg);

    // Use prop if available, otherwise local state (though mostly driven by App now)
    const [localIsIndia, setLocalIsIndia] = useState(false);
    const [loading, setLoading] = useState(true);

    // Derive effective isIndia
    const isIndia = isIndiaProp !== undefined ? isIndiaProp : localIsIndia;
    const price = isIndia ? 2000 : 29.99;

    const handleIncrement = () => setQuantity(prev => prev + 1);
    const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    React.useEffect(() => {
        // If prop is undefined, we might need to fetch ourselves (e.g. standalone usage)
        // But since App handles it, we can just respect the prop and stop loading.
        if (isIndiaProp !== undefined) {
            setLoading(false);
            return;
        }

        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data.country_code === 'IN') setLocalIsIndia(true);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [isIndiaProp]);

    return (
        <section className="product-detail" id="product">
            <div className="container product-grid">
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={activeImg} alt="Accel INTERVention Wipes" />
                    </div>
                    <div className="thumbnails">
                        <div className={`thumb ${activeImg === productImg ? 'active' : ''}`} onClick={() => setActiveImg(productImg)}>
                            <img src={productImg} alt="Product Main" />
                        </div>
                        <div className={`thumb ${activeImg === detailsImg ? 'active' : ''}`} onClick={() => setActiveImg(detailsImg)}>
                            <img src={detailsImg} alt="Product Details" />
                        </div>
                        <div className="thumb"><div className="thumb-placeholder"></div></div>
                        <div className="thumb"><div className="thumb-placeholder"></div></div>
                    </div>
                </div>

                <div className="product-info">
                    <div className="product-header">
                        <span className="stock-status"><CheckCircle size={14} /> In Stock - Ready to Ship</span>
                        {React.createElement(headingLevel, { className: 'product-title' }, 'Accel INTERVention Disinfectant Wipes')}
                        <div className="product-meta">
                            <span className="sku">SKU: INT-160-W</span>
                            <span className="rating">★★★★★ (128 Reviews)</span>
                        </div>
                    </div>

                    <div className="pricing-container">
                        {loading ? (
                            <div className="product-price">Loading Price...</div>
                        ) : isIndia ? (
                            <div className="product-price india-price">
                                <div className="price-row">
                                    <span className="amount">₹2,000</span>
                                </div>
                                <span className="unit">+ GST (India Warehouse)</span>
                            </div>
                        ) : (
                            <div className="product-price main-price">
                                <span className="currency">$</span>
                                <span className="amount">29.99</span>
                                <span className="unit">USD / tub (160 wipes)</span>
                            </div>
                        )}
                    </div>

                    <div className="product-description">
                        <p className="lead">
                            The <strong>Most Advanced System</strong> for high-level surface disinfection.
                            Accel INTERVention Wipes use AHP® technology to provide a one-step cleaning and disinfection solution
                            that is faster, safer, and more sustainable than legacy chemistries.
                        </p>

                        <div className="specs-grid">
                            <div className="spec-item">
                                <h4>Efficacy</h4>
                                <ul>
                                    <li><strong>1 Min:</strong> Kill Time (TB, Norovirus)</li>
                                    <li><strong>60 Sec:</strong> Sanitizer</li>
                                    <li><strong>Type:</strong> Broad-Spectrum Oxidizer</li>
                                </ul>
                            </div>
                            <div className="spec-item">
                                <h4>Specifications</h4>
                                <ul>
                                    <li><strong>Shelf Life:</strong> 2 Years (Exp: 06/2027)</li>
                                    <li><strong>Dimensions:</strong> 7" x 6" (160 Wipes)</li>
                                    <li><strong>Active:</strong> Hydrogen Peroxide 0.5% w/w</li>
                                    <li><strong>Origin:</strong> Imported from Canada</li>
                                </ul>
                            </div>
                        </div>

                        <div className="intended-use">
                            <h4>Intended Use</h4>
                            <p>
                                Ideal for Operating Rooms, ICUs, NICUs, Dental Surgery, and Labs.
                                Compatible with stainless steel, vinyl, glass, and sensitive electronics
                                (glucometers, CT equipment).
                            </p>
                        </div>
                    </div>

                    <div className="product-actions">
                        <div className="quantity-selector">
                            <button onClick={handleDecrement}><Minus size={16} /></button>
                            <span className="qty-value">{quantity}</span>
                            <button onClick={handleIncrement}><Plus size={16} /></button>
                        </div>

                        <div className="action-buttons-group" style={{ display: 'flex', gap: '10px', flex: 1 }}>
                            <button className="btn btn-outline" onClick={() => {
                                if (onAddToCart) onAddToCart(quantity);
                                alert("Added to cart");
                            }} style={{ flex: 1, borderColor: '#333', color: '#333' }}>
                                Add to Cart
                            </button>
                            <button className="btn btn-primary" onClick={() => {
                                if (onAddToCart) onAddToCart(quantity);
                                navigate('/cart');
                            }} style={{ flex: 1, backgroundColor: isIndia ? '#00BFA5' : '' }}>
                                {isIndia ? 'Buy Now' : 'Buy Now'} - {isIndia ? '₹' : '$'}{(price * quantity).toLocaleString()}
                            </button>
                        </div>
                    </div>

                    {!isIndia && (
                        <div className="express-checkout">
                            <p className="express-label">International Express Checkout</p>
                            <div className="express-buttons">
                                <button className="express-btn shop-pay">Shop Pay</button>
                                <button className="express-btn gpay">
                                    <span className="g-blue">G</span> Pay
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section >
    );
};

export default ProductDetail;
