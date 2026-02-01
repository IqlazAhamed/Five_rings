import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import kickboxingImg from '../assets/kickboxing.jpg';

const Services = () => {
    return (
        <div className="services-page" style={{ padding: '80px 0' }}>
            <div className="container">
                <span className="section-subtitle">What We Do</span>
                <h2 className="section-title">Our Services</h2>

                <AnimatedSection style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
                    <div className="service-card" style={{ padding: '30px', backgroundColor: 'var(--light-grey)', borderRadius: '10px' }}>
                        <h3>Facility Features</h3>
                        <ul style={{ marginTop: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li>Sports infrastructure</li>
                            <li>Coaching & training</li>
                            <li>Guest play & memberships</li>
                            <li>Corporate events & matches</li>
                        </ul>
                    </div>
                    <div className="service-card" style={{ padding: '30px', backgroundColor: 'var(--light-grey)', borderRadius: '10px' }}>
                        <h3>Sales & Wellness</h3>
                        <ul style={{ marginTop: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li>Sale of refreshments</li>
                            <li>Sale of sports items</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Ongoing Services</h3>

                {/* Consolidated Grid for Ongoing Services */}
                <AnimatedSection style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px',
                    marginBottom: '60px'
                }}>
                    {[
                        { name: 'Kickboxing', type: 'Indoor', img: kickboxingImg },
                        { name: 'Football', type: 'Indoor', img: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be51?auto=format&fit=crop&w=600&q=80' },
                        { name: 'Box Cricket', type: 'Indoor', img: 'https://images.unsplash.com/photo-1531415074968-0eccb5823587?auto=format&fit=crop&w=600&q=80' },
                        { name: 'Mini Gym', type: 'Indoor', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80' },
                        { name: 'Table Tennis', type: 'Indoor', img: 'https://images.unsplash.com/photo-1534158914592-062992bbe900?auto=format&fit=crop&w=600&q=80' },
                        { name: 'Tennis Cricket', type: 'Outdoor', img: 'https://images.unsplash.com/photo-1531415074968-0eccb5823587?auto=format&fit=crop&w=600&q=80' },
                        { name: 'Silambam', type: 'Outdoor', img: 'https://placehold.co/600x400?text=Silambam' },
                        { name: 'Archery', type: 'Outdoor', img: 'https://images.unsplash.com/photo-1511270278143-6c17d7c67226?auto=format&fit=crop&w=600&q=80' }
                    ].map((service, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                            transition: 'transform 0.3s',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '200px', backgroundColor: '#e0e0e0', overflow: 'hidden' }}>
                                <img
                                    src={service.img}
                                    alt={service.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ padding: '20px' }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: service.type === 'Indoor' ? 'var(--primary-brand)' : 'var(--accent-gold)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}>{service.type}</span>
                                <h3 style={{ marginTop: '10px' }}>{service.name}</h3>
                            </div>
                        </div>
                    ))}
                </AnimatedSection>

                <h3 style={{ fontSize: '2rem', marginBottom: '30px' }}>Upcoming Services</h3>
                <AnimatedSection>
                    <h4 style={{ color: 'var(--primary-brand)', marginBottom: '15px' }}>Indoor</h4>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
                        {['Fencing', 'Kalari Adimurai'].map(s => (
                            <span key={s} style={{ backgroundColor: '#f0f0f0', color: '#666', border: '1px dashed #ddd', padding: '10px 20px', borderRadius: '20px' }}>{s}</span>
                        ))}
                    </div>
                    <h4 style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>Outdoor</h4>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        {['Cricket Nets', 'Volleyball', 'Kabadi', 'Karate'].map(s => (
                            <span key={s} style={{ backgroundColor: '#f0f0f0', color: '#666', border: '1px dashed #ddd', padding: '10px 20px', borderRadius: '20px' }}>{s}</span>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Services;
