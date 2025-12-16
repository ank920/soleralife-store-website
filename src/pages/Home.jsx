import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import StatsSection from '../components/StatsSection';
import TechnologySection from '../components/TechnologySection';
import ProductTeaser from '../components/ProductTeaser';
import WholesaleSection from '../components/WholesaleSection';

const Home = ({ onAddToCart, isIndia }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);
    return (
        <>
            <SEO
                title="Accel INTERVention Wipes - Clinical Grade Disinfectant Wipes"
                description="Buy Accel INTERVention Disinfectant Wipes — hospital-grade AHP® wipes with a 1-minute kill time for MRSA, Norovirus, and more. Ships from India and Canada."
                canonical="https://soleralife.com/"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": "https://soleralife.com",
                    "name": "Solera Life Sciences",
                    "description": "Importer and distributor of hospital-grade infection prevention solutions like Accel INTERVention Wipes."
                }}
            />
            <main>
                <Hero />
                <StatsSection />
                <TechnologySection />
                <ProductTeaser isIndia={isIndia} />
                <WholesaleSection />
            </main>
        </>
    );
};

export default Home;
