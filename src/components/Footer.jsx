import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Solera<span className="logo-highlight">Life</span></h3>
                        <p>Providing clinical-grade infection prevention solutions for homes and businesses.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <a href="#product">Product</a>
                        <a href="#benefits">Benefits</a>
                        <a href="#contact">Wholesale Inquiry</a>
                        <a href="#">Shipping Policy</a>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <MapPin size={16} />
                            <span>
                                <strong>Solera Life Sciences Pvt. Ltd.</strong><br />
                                124, Uday Park, New Delhi, 110049<br />
                                Warehouse: Jaipur, Rajasthan
                            </span>
                        </div>
                        <div className="contact-item">
                            <Phone size={16} /> <span>+91 99589 66881</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={16} /> <span>soleralife2020@gmail.com</span>
                        </div>
                    </div>

                    <div className="footer-payment">
                        <h4>Secure Payment</h4>
                        <div className="payment-icons">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="invert-on-dark" />
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Solera Life Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
