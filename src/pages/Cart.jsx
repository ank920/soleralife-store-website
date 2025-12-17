import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import './Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart, total, isIndia }) => {

    // Calculate totals
    const shipping = isIndia ? 0 : 9.99;
    const taxRate = isIndia ? 0.18 : 0.00; // GST handled in price for India? actually prompt says + GST.
    // Let's keep logic simple: India triggers bank transfer modal on checkout, US goes to Payment Gateway.

    // For consistency with ProductDetail logic:
    // India Price: 2000 + GST (18%)
    // US Price: 29.99 USD

    const currency = isIndia ? '₹' : '$';

    const finalTotal = isIndia
        ? (total * 1.18).toLocaleString()
        : (total + shipping).toFixed(2);

    const handleCheckout = () => {
        if (isIndia) {
            alert(`BANK TRANSFER DETAILS:\n\nAccount Name: SOLERA LIFE SCIENCES PVT. LTD.\nBank: IndusInd Bank\nA/C No: 201000630495\nIFSC: INDB0000148\nBranch: Lajpat Nagar, New Delhi\n\nPlease transfer ₹${finalTotal} (incl 18% GST) and share screenshot to Info@Soleralife.Store`);
        } else {
            alert("Redirecting to Secure Payment Gateway...");
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty-state">
                <div className="container">
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added any clinical-grade protection yet.</p>
                    <Link to="/" className="btn btn-primary">
                        <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <h1 className="page-title">Shopping Cart</h1>

                <div className="cart-layout">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="item-spec">{item.spec}</p>
                                    <div className="item-price">
                                        {currency}{isIndia ? item.price.toLocaleString() : item.price}
                                    </div>
                                </div>
                                <div className="item-actions">
                                    <div className="qty-control">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>{currency}{isIndia ? total.toLocaleString() : total.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>{isIndia ? 'Free (Warehouse)' : `$${shipping}`}</span>
                        </div>
                        {isIndia && (
                            <div className="summary-row">
                                <span>GST (18%)</span>
                                <span>{currency}{(total * 0.18).toLocaleString()}</span>
                            </div>
                        )}
                        <div className="summary-total">
                            <span>Total</span>
                            <span>{currency}{finalTotal}</span>
                        </div>

                        <div className="trust-badges-cart">
                            <div className="badge"><ShieldCheck size={16} /> Secure Checkout</div>
                            <div className="badge"><Lock size={16} /> Encrypted Data</div>
                        </div>

                        <button className="btn btn-primary btn-block checkout-btn" onClick={handleCheckout}>
                            {isIndia ? 'Pay via Bank Transfer' : 'Proceed to Checkout'}
                        </button>

                        {!isIndia && (
                            <div className="express-checkout-cart">
                                <p>Or pay with</p>
                                <div className="express-buttons">
                                    <button className="express-btn shop-pay">Shop Pay</button>
                                    <button className="express-btn gpay"><span className="g-blue">G</span> Pay</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
