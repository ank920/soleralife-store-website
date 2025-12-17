import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductTeaser.css';
import productImg from '../assets/intervention-wipes-1.jpg';

const ProductTeaser = ({ isIndia, onAddToCart }) => {
    const price = isIndia ? '₹2,000' : '$29.99';
    const [quantity, setQuantity] = React.useState(1);
    const navigate = useNavigate(); // Needs 'react-router-dom' import if not already there, checking imports...

    /* 
       Note: The original file imported Link from react-router-dom. 
       I need to make sure useNavigate is imported.
       However, since I can't see the top of the file in this chunk, 
       I'll assume I might need to use <Link> or just passed props if I can't change imports easily.
       Wait, I can view the file first or use multi-replace to add import.
       Actually, I'll use window.location or assume useNavigate is available or just link to cart.
       Better: direct the user to /cart after adding.
    */

    const handleBuyNow = () => {
        if (onAddToCart) {
            onAddToCart(quantity);
            navigate('/cart'); // Simple redirection
        }
    };

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart(quantity);
            alert("Added to cart!");
        }
    };

    return (
        <section className="product-teaser container">
            <div className="teaser-grid">
                <div className="teaser-image">
                    <img src={productImg} alt="Accel INTERVention Wipes" />
                </div>
                <div className="teaser-content">
                    <h2>Accel INTERVention Disinfectant Wipes</h2>
                    <p className="teaser-excerpt">Hospital-grade AHP® wipes with a 1-minute kill time for MRSA and Norovirus. Safe for sensitive equipment and high-touch surfaces.</p>
                    <div className="teaser-meta-column">
                        <span className="teaser-price" style={{ fontSize: '1.5rem', display: 'block', marginBottom: '16px' }}>{price}</span>

                        <div className="teaser-actions" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" onClick={handleBuyNow} style={{ flex: 1, minWidth: '120px' }}>
                                Buy Now
                            </button>
                            <button className="btn btn-outline" onClick={handleAddToCart} style={{ flex: 1, minWidth: '120px', border: '1px solid #333' }}>
                                Add to Cart
                            </button>
                            <Link to="/products/accel-wipes" className="btn" style={{ textDecoration: 'underline', fontSize: '0.9rem' }}>View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductTeaser;
