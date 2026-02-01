import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const SportsTech = () => {
    const roadmap = [
        { stage: 'Stage 1', title: 'Slot Booking App', items: ['Book venues by time slots', 'Guest play, tournaments, matches'] },
        { stage: 'Stage 2', title: 'Coaching Management Module', items: ['Attendance, fees, expenses', 'Performance tracking', 'Parent interaction', 'Promotional content'] },
        { stage: 'Stage 3', title: 'Sports Connection Module', items: ['Host sports, organize matches', 'Fixtures & tournaments', 'Split payments'] },
        { stage: 'Stage 4', title: 'Listing Module', items: ['Coaches & academies listing', 'Reviews, testimonials', 'Location-based discovery'] },
    ];

    return (
        <div style={{ padding: '100px 0', backgroundColor: '#FAFAFA' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="section-subtitle">Future Vision</span>
                    <h2 className="section-title">Sports Tech Roadmap</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-grey)' }}>
                        Building a comprehensive ecosystem to revolutionize how sports are managed and played.
                    </p>
                </div>

                <AnimatedSection style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                    gap: '30px'
                }}>
                    {roadmap.map((step, index) => (
                        <div key={index}
                            className="roadmap-card"
                            style={{
                                backgroundColor: 'white',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid rgba(0,0,0,0.04)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = 'var(--primary-brand)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)';
                            }}
                        >
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '8px 16px',
                                backgroundColor: 'rgba(118, 199, 41, 0.1)',
                                color: 'var(--primary-brand)',
                                borderRadius: '100px',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                marginBottom: '25px',
                                letterSpacing: '0.5px'
                            }}>
                                {step.stage.toUpperCase()}
                            </div>

                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '30px',
                                fontWeight: '700',
                                color: 'var(--brand-dark)',
                                minHeight: '60px' // Align titles
                            }}>
                                {step.title}
                            </h3>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {step.items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                                        <CheckCircle2
                                            size={20}
                                            color="var(--primary-brand)"
                                            style={{ flexShrink: 0, marginTop: '2px' }}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </AnimatedSection>
            </div>
        </div>
    );
};

export default SportsTech;
