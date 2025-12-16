import React from 'react';
import { ShieldCheck, Zap, Heart, Layers, Clock, Activity } from 'lucide-react';
import './TechnologySection.css';

const features = [
    {
        icon: <Zap size={32} />,
        title: "Accelerated Hydrogen Peroxide (AHP®)",
        content: "Patented technology combining low levels of hydrogen peroxide with safe ingredients for increased germicidal potency. Breaks down into water and oxygen."
    },
    {
        icon: <Clock size={32} />,
        title: "Fast & Efficient",
        content: "1-minute kill time for major pathogens (MRSA, Norovirus, TB). Kills before it dries, ensuring compliance and faster room turnover."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Category IV Safety",
        content: "Lowest EPA toxicity rating. Non-irritating to eyes and skin. No PPE required. No VOCs or added fragrance."
    },
    {
        icon: <Layers size={32} />,
        title: "Surface Compatibility",
        content: "Safe on stainless steel, vinyl, glass, and electronics. Non-corrosive properties extend asset life and prevent warranty issues."
    },
    {
        icon: <Activity size={32} />,
        title: "Broad-Spectrum Efficacy",
        content: "Effective against bacteria, viruses, fungi, and spores. Specifically kills C. auris, VRE, MRSA, and C. difficile."
    },
    {
        icon: <Heart size={32} />,
        title: "Proven Results",
        content: "Studies show >23% reduction in HAI rates and >58% reduction in aerobic colony counts on surfaces."
    }
];

const TechnologySection = () => {
    return (
        <section className="tech-section" id="technology">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">The AHP® Advantage</span>
                    <h2>Next-Generation Infection Prevention</h2>
                    <p>
                        Outperforms legacy technologies like Phenolics and Quats with faster kill times,
                        better safety profiles, and superior cleaning performance.
                    </p>
                </div>

                <div className="tech-grid">
                    {features.map((feature, index) => (
                        <div className="tech-card" key={index}>
                            <div className="icon-box">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
