import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Team = () => {
    return (
        <div style={{ padding: '80px 0' }}>
            <div className="container">
                <span className="section-subtitle">Our People</span>
                <h2 className="section-title">Meet the Founder</h2>

                {/* Founder */}
                <AnimatedSection style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: '#eee',
                        borderRadius: '50%',
                        margin: '0 auto 30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        {/* Placeholder */}
                        <span style={{ color: '#999' }}>Founder Photo</span>
                    </div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-brand)' }}>Radhakrishnan N</h3>
                    <p style={{ fontWeight: 600, color: 'var(--brand-dark)' }}>MD & Founder</p>
                    <div style={{ maxWidth: '600px', margin: '20px auto', color: 'var(--text-grey)', textAlign: 'left' }}>
                        <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '10px', color: 'var(--brand-dark)' }}>Passion of Sports</p>
                        <p>Son of Weaver, Graduate in Commerce, Career in Chartered Accountant profession, Articled assistant of CA Firm, Internal Auditor of Automobile MNC, Self Employed Consultant and Accountant, Interest in Games, Passionate in Sports - stepped in "5Rings-Multi Sports Facility".</p>
                    </div>
                </AnimatedSection>

                {/* Key Persons */}
                <AnimatedSection style={{ marginBottom: '80px' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--brand-dark)' }}>Key Persons</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                        {['Ashokkumar H', 'Suriyaraaj K', 'Rishikumar'].map(name => (
                            <div key={name} style={{ textAlign: 'center' }}>
                                <div style={{ width: '120px', height: '120px', backgroundColor: '#f5f5f5', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                                <h4>{name}</h4>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Meet the Team Content */}
                <AnimatedSection style={{ marginBottom: '80px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 80px' }}>
                    <h2 className="section-title" style={{ color: 'var(--brand-dark)' }}>Meet the Team</h2>
                    <div style={{ color: 'var(--text-grey)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                        <p style={{ marginBottom: '20px' }}>
                            The company believes conglomerate method of approach where every individual sportsmen/club/team growth represents and build "5rings".
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            "5rings" acts as venue & technology provider shared revenue with qualified well known locational coaches, clubs, academies by providing international standard facilities on revenue sharing model where they able to provide 100% time & skill in the field with affordable cost to large number people.
                        </p>
                        <p>
                            Bringing all sports in one-roof will attract as a family can engage as one inside our venue facilitates that they can spend time, learn, practice & play for fun & fitness.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Partners */}
                <AnimatedSection style={{ backgroundColor: '#f9f9f9', padding: '60px 40px', borderRadius: '20px' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--brand-dark)' }}>Partner Clubs</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        {['FC Tamilions', 'HammerPro Kickboxing', 'MAK Table Tennis', 'King Star Cricket', 'Royal Kings Archery', 'Silambam'].map(club => (
                            <span key={club} style={{
                                padding: '15px 30px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                fontWeight: 600
                            }}>{club}</span>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Team;
