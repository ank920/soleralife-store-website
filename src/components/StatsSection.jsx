import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Star, Award } from 'lucide-react';
import './StatsSection.css';

const stats = [
    {
        icon: <Clock size={32} />,
        value: "30 Sec",
        label: "Sanitizer",
        desc: "Rapid sanitization for non-critical areas"
    },
    {
        icon: <Star size={32} />,
        value: "23%",
        label: "Less Infection",
        desc: "Reduction in HAI rates vs Quats"
    },
    {
        icon: <Shield size={32} />,
        value: "Cat IV",
        label: "Lowest Toxicity",
        desc: "EPA Category IV - No PPE Required"
    },
    {
        icon: <Award size={32} />,
        value: "58%",
        label: "Cleaner",
        desc: "Reduction in colony counts on surfaces"
    }
];

const StatsSection = () => {
    return (
        <section className="stats-section" id="benefits">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="stat-icon-wrapper">
                                {stat.icon}
                            </div>
                            <h3 className="stat-value">{stat.value}</h3>
                            <h4 className="stat-label">{stat.label}</h4>
                            <p className="stat-desc">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
