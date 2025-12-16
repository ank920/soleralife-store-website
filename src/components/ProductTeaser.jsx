import React from 'react';
import { Link } from 'react-router-dom';
import './ProductTeaser.css';
import productImg from '../assets/intervention-wipes-1.jpg';

const ProductTeaser = ({ isIndia }) => {
    const price = isIndia ? '₹2,000' : '$29.99';

    return (
        <section className="product-teaser container">
            <div className="teaser-grid">
                <div className="teaser-image">
                    <img src={productImg} alt="Accel INTERVention Wipes" />
                </div>
                <div className="teaser-content">
                    <h2>Accel INTERVention Disinfectant Wipes</h2>
                    <p className="teaser-excerpt">Hospital-grade AHP® wipes with a 1-minute kill time for MRSA and Norovirus. Safe for sensitive equipment and high-touch surfaces.</p>
                    <div className="teaser-meta">
                        <span className="teaser-price">{price}</span>
                        <Link to="/products/accel-wipes" className="btn btn-primary teaser-cta">View Product</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductTeaser;
