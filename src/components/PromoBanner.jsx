import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './PromoBanner.css';

const PromoBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show banner after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const copyCode = () => {
        navigator.clipboard.writeText("NEWYEAR30");
        const el = document.getElementById("promo-hint");
        if (el) el.innerText = "COPIED!";
        setTimeout(() => {
            if (el) el.innerText = "Click to Copy";
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="promo-banner-overlay">
                    <motion.div
                        className="promo-banner"
                        initial={{ y: 100, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 100, opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <button className="promo-close" onClick={() => setIsVisible(false)}>
                            <X size={18} />
                        </button>
                        
                        <div className="promo-header">
                            <span className="promo-icon">🎉</span>
                            <span>New Year Special!</span>
                        </div>
                        
                        <p className="promo-desc">
                            Unlock a massive <strong>30% OFF</strong> on all orders. Limited time offer!
                        </p>

                        <div className="promo-code-container" onClick={copyCode} title="Click to copy">
                            <span className="promo-label">Use Code</span>
                            <span className="promo-code">NEWYEAR30</span>
                            <span className="promo-copy-hint" id="promo-hint">Click to Copy</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PromoBanner;
