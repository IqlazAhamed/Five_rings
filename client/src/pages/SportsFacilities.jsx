import React from 'react';

const SportsFacilities = () => {
    const sports = [
        { name: 'Kickboxing', type: 'Indoor' },
        { name: 'Table Tennis', type: 'Indoor' },
        { name: 'Football', type: 'Indoor' },
        { name: 'Box Cricket', type: 'Indoor' },
        { name: 'Silambam', type: 'Outdoor' },
        { name: 'Archery', type: 'Outdoor' },
        { name: 'Tennis Cricket', type: 'Outdoor' }
    ];

    return (
        <div style={{ padding: '80px 0' }}>
            <div className="container">
                <span className="section-subtitle">Our Arena</span>
                <h2 className="section-title">Sports & Facilities</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '30px'
                }}>
                    {sports.map((sport, index) => (
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
                            <div style={{ height: '200px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Placeholder for image */}
                                <span style={{ color: '#aaa', fontWeight: 600 }}>{sport.name} Image</span>
                            </div>
                            <div style={{ padding: '20px' }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: sport.type === 'Indoor' ? 'var(--primary-brand)' : 'var(--accent-gold)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase'
                                }}>{sport.type}</span>
                                <h3 style={{ marginTop: '10px' }}>{sport.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SportsFacilities;
