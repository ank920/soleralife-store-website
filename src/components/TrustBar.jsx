import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
    return (
        <div className="trust-bar">
            <div className="container trust-bar-content">
                <span>HEALTH CANADA APPROVED</span>
                <span className="separator">•</span>
                <span>Kills MRSA, Norovirus, TB in 1 Minute</span>
                <span className="separator">•</span>
                <span>DIN 02248365</span>
            </div>
        </div>
    );
};

export default TrustBar;
