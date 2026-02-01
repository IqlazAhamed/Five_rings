import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/aashikmubeen7851@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    _subject: "New Contact Form Submission - 5RINGS"
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
                // Reset status after a few seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch (error) {
            console.error("Form submission error", error);
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <div style={{ padding: '80px 0' }}>
            <div className="container">
                <span className="section-subtitle">Get in Touch</span>
                <h2 className="section-title">Contact Us</h2>

                <AnimatedSection style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>

                    {/* Contact Info */}
                    <div>
                        <div style={{ marginBottom: '40px' }}>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <MapPin color="var(--primary-brand)" />
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Sports Facility</h4>
                                    <p style={{ color: 'var(--text-grey)' }}>#90, 1st Main Road, Ambattur Industrial Estate, Chennai – 600058</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <MapPin color="var(--primary-brand)" />
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Registered Office</h4>
                                    <p style={{ color: 'var(--text-grey)' }}>#7A, Sivasakthi Colony, Villivakkam, Chennai – 600049</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <Phone color="var(--primary-brand)" />
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Phone</h4>
                                    <p style={{ color: 'var(--text-grey)' }}>+91 9150277760</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                <Mail color="var(--primary-brand)" />
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Email</h4>
                                    <p style={{ color: 'var(--text-grey)' }}>aashikmubeen7851@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div style={{ width: '100%', height: '250px', backgroundColor: '#eee', borderRadius: '10px', overflow: 'hidden' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.299109723877!2d80.15781231461327!3d13.088195990779705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ca00d6cb25%3A0xc636070773d1326c!2sAmbattur%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1628167823456!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ backgroundColor: 'var(--light-bg)', padding: '40px', borderRadius: '15px' }}>
                        <h3 style={{ marginBottom: '30px' }}>Send Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Phone (Optional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '15px' }}
                                disabled={status === 'sending' || status === 'success'}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : 'Send Message'}
                            </button>
                            {status === 'success' && <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold' }}>Thank you! Your message has been sent.</p>}
                            {status === 'error' && <p style={{ color: 'red', marginTop: '15px' }}>Something went wrong. Please try again.</p>}
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Contact;
