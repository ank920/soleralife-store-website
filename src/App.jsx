import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrustBar from './components/TrustBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';

// Placeholder image import (should really be in a data file)
import productImg from './assets/intervention-wipes-1.jpg';

function App() {
    const [cart, setCart] = useState([]);
    const [isIndia, setIsIndia] = useState(false);

    // Initial Load - Check Geo
    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data.country_code === 'IN') setIsIndia(true);
            })
            .catch(err => console.error("Geo-detect failed", err));
    }, []);

    const addToCart = (qty) => {
        // Since we only have one product for now
        const newItem = {
            id: 'int-wipes-160',
            name: 'Accel INTERVention Disinfectant Wipes',
            spec: '160 Wipes / Canister',
            price: isIndia ? 2000 : 29.99,
            quantity: qty,
            image: productImg
        };

        setCart(prev => {
            const existing = prev.find(item => item.id === newItem.id);
            if (existing) {
                return prev.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + qty }
                        : item
                );
            }
            return [...prev, newItem];
        });
    };

    const updateQuantity = (id, newQty) => {
        if (newQty < 1) return;
        setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="app">
            <TrustBar />
            <Navbar cartCount={cartCount} />

            <Routes>
                <Route path="/" element={
                    <Home onAddToCart={addToCart} isIndia={isIndia} />
                } />
                <Route path="/cart" element={
                    <Cart
                        cartItems={cart}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                        total={cartTotal}
                        isIndia={isIndia}
                    />
                } />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* SEO Routes */}
                <Route path="/products/accel-wipes" element={<ProductPage onAddToCart={addToCart} isIndia={isIndia} />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
