
// Mock data mimicking a Headless CMS response (Strapi/Contentful)
const posts = [
    {
        id: 1,
        slug: 'ahp-future-hospital-disinfection',
        title: 'Why AHP is the Future of Hospital Disinfection',
        excerpt: 'Discover why Accelerated Hydrogen Peroxide (AHP®) is replacing legacy chemistries in top-tier healthcare facilities worldwide.',
        content: `
            <h2>The Evolution of Disinfection</h2>
            <p>For decades, hospitals relied on quaternary ammonium compounds (Quats) and sodium hypochlorite (Bleach) for surface disinfection. While effective to a degree, these legacy chemistries come with significant drawbacks: long contact times, toxicity concerns, and surface damage.</p>
            
            <h3>Enter Accelerated Hydrogen Peroxide (AHP®)</h3>
            <p>AHP® represents a quantum leap in germicidal technology. By combining low levels of hydrogen peroxide with a proprietary blend of commonly used, safe ingredients, AHP® achieves superior potency and speed without the safety trade-offs.</p>

            <h3>Key Benefits</h3>
            <ul>
                <li><strong>Speed:</strong> 1-minute kill time against critical pathogens like MRSA and VRE.</li>
                <li><strong>Safety:</strong> Non-irritating to eyes and skin, requiring no PPE.</li>
                <li><strong>Sustainability:</strong> Breaks down into water and oxygen.</li>
            </ul>

            <p>As healthcare facilities strive for zero-harm environments, AHP® stands out as the only technology that delivers on both efficacy and safety promises.</p>
        `,
        image: 'https://images.unsplash.com/photo-1584036561566-b93a901dbd1d?auto=format&fit=crop&q=80&w=800',
        author: 'Dr. Sarah Chen, PhD',
        date: 'Oct 12, 2023',
        readTime: '5 min read'
    },
    {
        id: 2,
        slug: 'epa-category-iv-safety-advantage',
        title: 'The Safety Advantage: Why EPA Category IV Disinfectants Require No PPE',
        excerpt: 'Understanding the toxicity ratings of disinfectants and why Category IV is the gold standard for staff and patient safety.',
        content: `
            <h2>Understanding EPA Toxicity Categories</h2>
            <p>The EPA categorizes disinfectants into four toxicity levels, with Category I being the most toxic and Category IV being the least.</p>
            
            <h3>Category IV: The Gold Standard</h3>
            <p>Products in Category IV, like Accel INTERVention, are defined as "Practically Non-Toxic." This means:</p>
            <ul>
                <li>No oral or dermal toxicity.</li>
                <li>No eye or skin irritation.</li>
                <li><strong>No Personal Protective Equipment (PPE) required.</strong></li>
            </ul>

            <h3>Why This Matters</h3>
            <p>Eliminating the need for PPE not only cuts costs but also increases compliance. Staff are more likely to wipe down surfaces frequently if they don't have to don gloves and masks every single time. This directly leads to better infection control outcomes.</p>
        `,
        image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1cca?auto=format&fit=crop&q=80&w=800',
        author: 'Mark Thompson, Infection Preventionist',
        date: 'Nov 05, 2023',
        readTime: '4 min read'
    },
    {
        id: 3,
        slug: 'compatibility-check',
        title: 'Compatibility Check: Protecting Your Assets',
        excerpt: 'Stop destroying your equipment. Learn how AHP technology protects sensitive electronics and surfaces while killing germs.',
        content: `
            <h2>The Hidden Cost of Disinfection</h2>
            <p>Healthcare facilities lose millions annually to damaged equipment. Cracked screens on glucometers, brittle plastic on wires, and corroded stainless steel are often caused by harsh disinfectants like Bleach and Quats.</p>
            
            <h3>AHP®: Tough on Germs, Gentle on Surfaces</h3>
            <p>Accel INTERVention is designed to be compatible with a wide range of materials commonly found in healthcare settings:</p>
            <ul>
                <li>Stainless Steel</li>
                <li>Vinyl & Plastic</li>
                <li>Glass & Touchscreens</li>
                <li>Rubber gaskets</li>
            </ul>

            <p>By switching to a compatible chemistry, facilities can extend the life of their capital equipment and reduce maintenance costs significantly.</p>
        `,
        image: 'https://images.unsplash.com/photo-1516549655169-df83a092dd96?auto=format&fit=crop&q=80&w=800',
        author: 'Solera Technical Team',
        date: 'Dec 01, 2023',
        readTime: '3 min read'
    }
];

export const blogService = {
    getPosts: async () => {
        // Simulate API delay
        return new Promise((resolve) => {
            setTimeout(() => resolve(posts), 300);
        });
    },
    getPostBySlug: async (slug) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const post = posts.find(p => p.slug === slug);
                resolve(post || null);
            }, 300);
        });
    }
};
