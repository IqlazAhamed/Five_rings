import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
    return (
        <div className="about-page" style={{ padding: '80px 0' }}>
            <div className="container">
                <AnimatedSection>
                    <span className="section-subtitle">Our Journey</span>
                    <h2 className="section-title">About 5RINGS</h2>
                </AnimatedSection>

                {/* Timeline */}
                <AnimatedSection style={{ maxWidth: '800px', margin: '0 auto 80px', position: 'relative' }}>
                    <div style={{
                        borderLeft: '2px solid var(--primary-brand)',
                        paddingLeft: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px'
                    }}>
                        {[
                            { year: '2018', title: 'Started Journey', desc: 'Entered the sports industry with a passion.' },
                            { year: '2021', title: 'Multi Sports Facility Launched', desc: 'Opened our first comprehensive facility.' },
                            { year: '2025', title: 'Sports Tech Integration', desc: 'Launching digital solutions for sports management.' },
                            { year: '2026', title: 'Food Tech & Expansion', desc: 'Expanding to Food Tech and new facility in Ayanambakkam.' }
                        ].map((item, index) => (
                            <div key={index} style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '-49px',
                                    top: '0',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--primary-brand)',
                                    border: '2px solid var(--pure-white)'
                                }}></div>
                                <h3 style={{ color: 'var(--primary-brand)', fontSize: '1.5rem' }}>{item.year}</h3>
                                <h4 style={{ fontSize: '1.2rem', margin: '5px 0' }}>{item.title}</h4>
                                <p style={{ color: 'var(--text-grey)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Vision & Mission */}
                <AnimatedSection style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Vision</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Everyone is our customer', 'Sports venues, schools, clubs', 'Digital automation & promotions', 'Sale of sports goods & wellness refreshments', 'Branding & franchising'].map((item, i) => (
                                <li key={i} style={{ marginBottom: '10px', paddingLeft: '20px', borderLeft: '3px solid var(--accent-gold)' }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Multi-sports as family’s one-stop solution', 'Geographical expansion', 'Automation & monitoring of matches', 'Skill development & affiliations', 'Internships & certifications'].map((item, i) => (
                                <li key={i} style={{ marginBottom: '10px', paddingLeft: '20px', borderLeft: '3px solid var(--accent-gold)' }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default About;
