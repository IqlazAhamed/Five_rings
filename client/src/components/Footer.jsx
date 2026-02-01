import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--brand-dark)',
            color: 'var(--text-grey)',
            padding: '40px 0 20px',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    {/* Company Info */}
                    <div>
                        <h3 style={{ color: 'var(--primary-brand)', marginBottom: '20px' }}>5RINGS</h3>
                        <p style={{ marginBottom: '10px' }}>Everyone is our customer.</p>
                        <p>Creating professional sports facilities and tech solutions for a healthier future.</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--pure-white)', marginBottom: '20px' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link to="/about" className="footer-link">About Us</Link></li>
                            <li><Link to="/services" className="footer-link">Services</Link></li>

                            <li><Link to="/future-vision" className="footer-link">Future Vision</Link></li>
                            <li><Link to="/team" className="footer-link">Our Team</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: 'var(--pure-white)', marginBottom: '20px' }}>Contact Us</h4>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Facility:</strong> #90, 1st Main Road, Ambattur Industrial Estate, Chennai – 600058
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>Phone:</strong> +91 9150277760
                        </p>
                        <p>
                            <strong>Email:</strong> aashikmubeen7851@gmail.com
                        </p>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #333',
                    paddingTop: '20px',
                    textAlign: 'center',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} 5RINGS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
