import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from '../assets/5rings-logo.jpg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },

        { name: 'Future Vision', path: '/future-vision' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="header" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(18, 15, 45, 0.85)', // Data-brand-dark with opacity
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            color: 'var(--pure-white)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            borderBottomLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderTop: 'none'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '80px'
            }}>
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--primary-brand)',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '15px'
                }}>
                    <img src={logo} alt="5RINGS" style={{ height: '60px', borderRadius: '5px' }} />
                    5 RINGS
                </Link>

                {/* Desktop Menu */}
                <nav className="desktop-menu" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '20px' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--primary-brand)' : 'var(--pure-white)',
                                        fontWeight: 500,
                                        transition: 'color 0.3s'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    style={{
                        background: 'none',
                        color: 'var(--pure-white)',
                        display: 'block' // Visible on mobile by default, handled by CSS media queries usually but inline for now
                    }}
                    className="mobile-menu-btn"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div style={{
                    backgroundColor: 'var(--brand-dark)',
                    padding: '20px',
                    position: 'absolute',
                    top: '80px',
                    left: 0,
                    width: '100%',
                    borderTop: '1px solid #333'
                }}>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--primary-brand)' : 'var(--pure-white)',
                                        display: 'block',
                                        fontSize: '1.1rem'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <style>{`
                @media (min-width: 768px) {
                    .desktop-menu { display: block !important; }
                    .mobile-menu-btn { display: none !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;
