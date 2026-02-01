import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Activity } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

import logo from '../assets/5rings-logo.jpg';


const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <AnimatedSection style={{
                backgroundColor: 'var(--brand-dark)',
                color: 'var(--pure-white)',
                padding: '100px 20px',
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <div className="container">
                    <img
                        src={logo}
                        alt="5RINGS Logo"
                        style={{
                            maxWidth: '300px',
                            marginBottom: '20px',
                            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))'
                        }}
                    />
                    <p style={{ fontSize: '1.5rem', marginBottom: '40px', fontWeight: 300 }}>
                        "Everyone is our customer"
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem' }}>
                        Visit & Play
                    </Link>
                </div>
            </AnimatedSection>

            {/* Welcome Section */}
            {/* Welcome Section */}
            <AnimatedSection style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">Welcome to Our Company</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--text-grey)' }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            We are a premier sports facility and sports technology company dedicated to creating a healthier, more active community.
                            From professional infrastructure to futuristic sports tech solutions, 5RINGS is your partner in excellence.
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* Sports Preview */}
            {/* Sports Preview */}
            <AnimatedSection style={{ backgroundColor: 'var(--light-bg)', padding: '80px 0' }}>
                <div className="container">
                    <span className="section-subtitle">What We Offer</span>
                    <h2 className="section-title">Available Sports</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px',
                        textAlign: 'center'
                    }}>
                        {[
                            { name: 'Kickboxing', img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&q=80' },
                            { name: 'Table Tennis', img: 'https://images.unsplash.com/photo-1534158914592-062992bbe900?auto=format&fit=crop&w=600&q=80' },
                            { name: 'Football', img: 'https://images.unsplash.com/photo-1579952363873-27f3bde9be51?auto=format&fit=crop&w=600&q=80' },
                            { name: 'Cricket', img: 'https://images.unsplash.com/photo-1531415074968-0eccb5823587?auto=format&fit=crop&w=600&q=80' },
                            { name: 'Silambam', img: 'https://placehold.co/600x400?text=Silambam' }, // Specific martial art, placeholder used
                            { name: 'Archery', img: 'https://images.unsplash.com/photo-1511270278143-6c17d7c67226?auto=format&fit=crop&w=600&q=80' }
                        ].map(sport => (
                            <div key={sport.name} style={{
                                position: 'relative',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                height: '250px',
                                group: 'card'
                            }}>
                                <img
                                    src={sport.img}
                                    alt={sport.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    padding: '20px',
                                    paddingTop: '40px',
                                    textAlign: 'left'
                                }}>
                                    <h3 style={{ color: 'var(--pure-white)', margin: 0, fontSize: '1.5rem' }}>{sport.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Features Preview */}
            {/* Features Preview */}
            <AnimatedSection style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
                            <Trophy size={40} color="var(--primary-brand)" style={{ marginBottom: '20px' }} />
                            <h3>World Class Facilities</h3>
                            <p style={{ color: 'var(--text-grey)', marginTop: '10px' }}>Top-tier infrastructure for professional training and leisure.</p>
                        </div>
                        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
                            <Activity size={40} color="var(--primary-brand)" style={{ marginBottom: '20px' }} />
                            <h3>Modern Sports Tech</h3>
                            <p style={{ color: 'var(--text-grey)', marginTop: '10px' }}>Integrating technology for booking, coaching, and performance tracking.</p>
                        </div>
                        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '10px' }}>
                            <Users size={40} color="var(--primary-brand)" style={{ marginBottom: '20px' }} />
                            <h3>Community Focused</h3>
                            <p style={{ color: 'var(--text-grey)', marginTop: '10px' }}>A family-friendly environment where everyone can play.</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <Link to="/services" style={{ color: 'var(--primary-brand)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                            Explore All Services <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Home;
