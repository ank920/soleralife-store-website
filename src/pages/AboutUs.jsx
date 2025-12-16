import React from 'react';
import SEO from '../components/SEO';
import heroImg from '../assets/intervention-wipes-1.jpg'; // Replaced missing asset

const AboutUs = () => {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Solera Life Sciences",
        "url": "https://soleralife.com",
        "logo": "https://soleralife.com/logo.png",
        "founder": {
            "@type": "Person",
            "name": "Manish Kothary"
        },
        "description": "Leading provider of advanced infection prevention solutions like Accelerated Hydrogen Peroxide (AHP®).",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9958966881",
            "contactType": "sales",
            "areaServed": ["IN", "CA", "US"],
            "availableLanguage": "English"
        }
    };

    return (
        <>
            <SEO
                title="About Us - Solera Life Sciences"
                description="Solera Life Sciences, led by Manish Kothary, brings hospital-grade infection prevention technologies to homes and businesses."
                canonical="https://soleralife.com/about-us"
                schema={orgSchema}
            />
            <main style={{ paddingTop: '100px' }} className="container">
                <section className="about-hero" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Protecting What Matters Most</h1>
                    <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
                        At Solera Life Sciences, we believe that safety shouldn't come with a compromise.
                    </p>
                </section>

                <section className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h2>
                        <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#444' }}>
                            In a world increasingly aware of the dangers of pathogens, the tools we use to fight them haven't kept up.
                            Legacy chemicals like Bleach and Quats are toxic, slow, and damaging.
                        </p>
                        <p style={{ lineHeight: '1.8', color: '#444' }}>
                            <strong>Solera Life Sciences</strong> was founded to bridge the gap between hospital-grade efficacy and consumer safety.
                            We are the authorized importers and distributors of Diversey's Accelerated Hydrogen Peroxide (AHP®) products.
                        </p>
                    </div>
                    <div style={{ backgroundColor: '#f9f9f9', padding: '40px', borderRadius: '12px' }}>
                        <h3 style={{ marginBottom: '15px' }}>Leadership</h3>
                        <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>Manish Kothary</p>
                        <p style={{ color: '#666', marginBottom: '20px' }}>Founder & CEO</p>
                        <p style={{ fontSize: '0.95rem', color: '#555' }}>
                            With over 20 years of experience in the healthcare supply chain, Manish brings a rigorous focus on
                            quality assurance and regulatory compliance.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default AboutUs;
