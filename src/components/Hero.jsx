import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';
// Note: Real image paths will need to be updated after generation. 
// For now assuming we move them to src/assets
import productImg from '../assets/intervention-wipes-1.jpg';


const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="hero-badge"><ShieldCheck size={16} /> Clinical Grade Protection</span>
                        <h1 className="hero-title">
                            The Standard in <span className="highlight">Infection Prevention</span>
                        </h1>
                        <p className="hero-subtitle">
                            Accel INTERVention Wipes kill MRSA, Norovirus, and TB in just 1 minute.
                            The power of AHP® technology for your home and business.
                        </p>
                        <div className="hero-actions">
                            <Link to="/products/accel-wipes" className="btn btn-primary btn-lg" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                Buy Now <ArrowRight size={20} className="icon-right" />
                            </Link>
                            <button className="btn btn-text">
                                View Specs
                            </button>
                        </div>
                        <div className="hero-trust">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="payment-icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="payment-icon" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="payment-icon" />
                        </div>
                    </motion.div>
                </div>

                <div className="hero-image">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="image-wrapper"
                    >
                        <img src={productImg} alt="Accel INTERVention Wipes Tub" />
                        <div className="floating-badge">
                            <span className="badge-value">1</span>
                            <span className="badge-unit">Min</span>
                            <span className="badge-label">Kill Time</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
