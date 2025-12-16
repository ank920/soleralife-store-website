import React from 'react';
import ProductDetail from '../components/ProductDetail';
import SEO from '../components/SEO';
import productImg from '../assets/intervention-wipes-1.jpg';

const ProductPage = ({ onAddToCart, isIndia }) => {
    // Schema Markups
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Accel INTERVention Disinfectant Wipes",
        "image": [
            "https://soleralife.com/assets/intervention-wipes-1.jpg"
        ],
        "description": "Accel INTERVention Wipes use AHP technology to provide a one-step cleaning and disinfection solution with a 1-minute kill time for MRSA and Norovirus.",
        "sku": "INT-160-W",
        "brand": {
            "@type": "Brand",
            "name": "Diversey"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://soleralife.com/products/accel-wipes",
            "priceCurrency": isIndia ? "INR" : "USD",
            "price": isIndia ? "2000" : "29.99",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "128"
        }
    };

    return (
        <>
            <SEO
                title="Accel INTERVention Disinfectant Wipes - 1 Min Kill Time"
                description="Buy Accel INTERVention Disinfectant Wipes. EPA Category IV, safe for all surfaces, and kills germs in 1 minute. Available in India and Globally."
                canonical="https://soleralife.com/products/accel-wipes"
                schema={productSchema}
            />
            {/* 
              We reuse the logic component, but visually we might want to ensure 
              it acts as the main content. The H1 is inside ProductDetail, 
              so we pass a prop or override styling if needed.
              ProductDetail currently has an H2. We should conceptually treat it as H1 here.
            */}
            <main style={{ marginTop: '80px' }}>
                <ProductDetail onAddToCart={onAddToCart} isIndia={isIndia} />
            </main>
        </>
    );
};

export default ProductPage;
