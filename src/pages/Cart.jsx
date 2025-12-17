import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShieldCheck, Lock, CheckCircle } from 'lucide-react';
import './Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart, total, isIndia }) => {
    const [showCheckout, setShowCheckout] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);

    // Checkout Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: ''
    });

    const RAZORPAY_KEY = "rzp_live_Rsa57CUtCLd0Fv";
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8Jw4XUtgq7YchxlahQcaWIXvoPQasKGnCDjMT2DR0l_b_02BEjoxs56UuSHpRjobg/exec";

    // Calculate totals
    const shipping = isIndia ? 0 : 9.99;
    const currency = isIndia ? '₹' : '$';

    const finalTotalValue = isIndia ? (total * 1.18) : (total + shipping);
    const finalTotalDisplay = isIndia
        ? Math.round(finalTotalValue).toLocaleString()
        : finalTotalValue.toFixed(2);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitOrderToGoogleSheet = async (paymentId, orderId, status) => {
        try {
            const orderData = {
                orderId: orderId,
                fullName: formData.name, // Updated key
                phone: formData.phone,
                items: cartItems.map(item => `${item.name} (x${item.quantity})`).join(', '),
                amount: `${currency}${finalTotalDisplay}`,
                status: status, // "Paid" or "Cancelled"
                address: `${formData.address}, ${formData.city}, ${formData.pincode}`, // Combined address
                // razorpayPaymentId: paymentId // Removed if not needed by script, or kept if useful. User didn't explicit ask to remove but didn't list it in payload reqs. Keeping it out to match spec strictly if desired, or adding if harmless. 
                // Spec said: "The JSON payload... must include the following fields... orderId, fullName, phone, items, amount, status, address". 
                // It did NOT list razorpayPaymentId. I will omit it to be safe, or include it if I think it helps tracking.
                // Let's stick to the list strictly to avoid error if script is strict.
            };

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData)
            });
            console.log("Order submitted to Google Sheet: " + status);

            // Only set Success for Paid orders
            if (status === "Paid") {
                setLoading(false);
                setOrderSuccess(true);
            }
        } catch (error) {
            console.error("Error submitting to Google Sheet", error);
            if (status === "Paid") setLoading(false); // Ensure loading stops on error too
        }
    };

    const handlePaymentSuccess = (response) => {
        const paymentId = response.razorpay_payment_id;
        const orderId = `SL-${Date.now()}`; // Updated prefix to SL-

        submitOrderToGoogleSheet(paymentId, orderId, "Paid");
    };

    const handlePaymentDismiss = () => {
        const orderId = `SL-${Date.now()}-CX`;
        submitOrderToGoogleSheet("N/A", orderId, "Cancelled");
        setLoading(false);
    };

    const initiatePayment = () => {
        // Basic Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.address) {
            alert("Please fill in all shipping details.");
            return;
        }

        if (!isIndia) {
            alert("International checkout is not yet supported via Razorpay. Please use standard invoice method.");
            return;
        }

        setLoading(true);

        const options = {
            key: RAZORPAY_KEY,
            amount: Math.round(finalTotalValue * 100), // Amount in paise
            currency: "INR",
            name: "Solera Life Sciences",
            description: "Purchase of Accel Wipes",
            image: "https://soleralife.com/assets/logo.png",
            handler: function (response) {
                handlePaymentSuccess(response);
            },
            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone
            },
            theme: {
                color: "#00BFA5"
            },
            modal: {
                ondismiss: function () {
                    handlePaymentDismiss();
                }
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            // alert("Payment Failed: " + response.error.description); 
            // Maybe logging failed status too? Spec didn't mention "Failed", only "Cancelled".
            // I'll leave alert for failed.
            setLoading(false);
        });
        rzp1.open();
    };

    if (cartItems.length === 0 && !orderSuccess) {
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

    if (orderSuccess) {
        return (
            <div className="cart-empty-state">
                <div className="container">
                    <div style={{ color: '#00BFA5', marginBottom: '20px' }}>
                        <CheckCircle size={64} />
                    </div>
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you for your purchase. Your order has been recorded.</p>
                    <p>We will ship your items shortly.</p>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>
                        Back to Home
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
                    {/* Left Column: Cart Items or Checkout Form */}
                    <div className="cart-items">
                        {!showCheckout ? (
                            cartItems.map(item => (
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
                            ))
                        ) : (
                            <div className="checkout-form-container">
                                <h3 className="checkout-form-header">Shipping Details</h3>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="John Doe" value={formData.name} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" name="email" className="form-control" placeholder="john@example.com" value={formData.email} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="phone" className="form-control" placeholder="+91 9876543210" value={formData.phone} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea name="address" className="form-control" placeholder="Flat No, Street, Landmark" value={formData.address} onChange={handleInputChange} rows="3"></textarea>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" name="city" className="form-control" placeholder="City" value={formData.city} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Pincode</label>
                                        <input type="text" name="pincode" className="form-control" placeholder="Pincode" value={formData.pincode} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <button className="btn btn-outline back-btn" onClick={() => setShowCheckout(false)}>
                                    <ArrowLeft size={16} style={{ marginRight: '5px' }} /> Back to Cart
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Order Summary */}
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
                            <span>{currency}{finalTotalDisplay}</span>
                        </div>

                        <div className="trust-badges-cart">
                            <div className="badge"><ShieldCheck size={16} /> Secure Checkout</div>
                            <div className="badge"><Lock size={16} /> Encrypted Data</div>
                        </div>

                        {!showCheckout ? (
                            <button className="btn btn-primary btn-block checkout-btn" onClick={() => setShowCheckout(true)}>
                                Proceed to Checkout
                            </button>
                        ) : (
                            <button className="btn btn-primary btn-block checkout-btn" onClick={initiatePayment} disabled={loading}>
                                {loading ? 'Processing...' : `Pay ${currency}${finalTotalDisplay}`}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
