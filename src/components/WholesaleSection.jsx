import React, { useState } from 'react';
import './WholesaleSection.css';

const WholesaleSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        quantity: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. Our B2B team will contact you shortly.');
        setFormData({ name: '', email: '', company: '', quantity: '', message: '' });
    };

    return (
        <section className="wholesale-section" id="contact">
            <div className="container">
                <div className="wholesale-wrapper">
                    <div className="wholesale-info">
                        <h2>Wholesale & Bulk Orders</h2>
                        <p>
                            Direct supply from Solera Life Sciences Pvt. Ltd. (Importer of Diversey products).
                            <strong>Minimum Order: 5 Cartons (60 Tubs).</strong>
                        </p>
                        <ul className="wholesale-list">
                            <li>Direct Factory Pricing</li>
                            <li>Warehouse: A-37A, 2nd Floor, Ashokpura, New Sanganer Road, Jaipur, Rajasthan 302018</li>
                            <li>Imported from Canada | Manufactured by Diversey, Inc.</li>
                            <li>Contact: Manish Kothary (+91 9958966881) | manish@benellc.com</li>
                        </ul>
                    </div>

                    <form className="wholesale-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Contact Person</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <label>Company / Hospital</label>
                                <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="Organization Name" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="email@org.com" />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" name="phone" required value={formData.phone || ''} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Shipping Country</label>
                                <select name="country" value={formData.country || 'Canada'} onChange={handleChange}>
                                    <option value="Canada">Canada</option>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>End Use</label>
                                <select name="endUse" value={formData.endUse || 'Hospital'} onChange={handleChange}>
                                    <option value="Hospital">Hospital/Healthcare</option>
                                    <option value="Distributor">Distributor</option>
                                    <option value="Institutional">Institutional Buyer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Quantity (Tubs)</label>
                            <input
                                type="number"
                                name="quantity"
                                min="60"
                                required
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="Min. 60 tubs"
                            />
                            <small style={{ color: '#666' }}>Minimum 5 cartons</small>
                        </div>

                        <div className="form-group">
                            <label>Additional Requirements</label>
                            <textarea name="message" rows="3" value={formData.message} onChange={handleChange} placeholder="Shipping deadlines, documentation needs, etc."></textarea>
                        </div>

                        <button type="submit" className="btn btn-secondary btn-block">
                            Request FOB Quote
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default WholesaleSection;
