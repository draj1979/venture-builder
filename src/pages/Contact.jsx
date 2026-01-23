import { useEffect } from 'react';
import SEO from '../components/SEO';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main className="contact-page">
            <SEO
                title="Contact Us"
                description="Get in touch with Kartavya Technology for partnerships, ventures, or inquiries about AI-first company building."
                canonical="/contact"
            />
            <section className="contact-hero section-padding">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">Let's Build the Future Together</h1>
                        <p className="hero-subtitle">
                            Whether you're a founder with a vision or an investor looking for the next big thing,
                            we're here to talk.
                        </p>
                    </div>
                </div>
            </section>

            <section className="contact-methods section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-card">
                                <h3>Interested in Building?</h3>
                                <p>We are always on the lookout for visionary founders and world-class talent to join our studio.</p>
                                <a href="mailto:hello@kartavyatech.com" className="info-link">hello@kartavyatech.com</a>
                            </div>

                            <div className="info-card">
                                <h3>Office</h3>
                                <p>419, Asset Alcazar, Sarjapur Road, Bangalore, Karnataka, India</p>
                            </div>
                        </div>

                        <div className="calendly-section">
                            <div className="calendly-card">
                                <h3>Schedule a Meeting</h3>
                                <p className="text-secondary mb-4">Select a time that works best for you to discuss your venture or ideas.</p>
                                {/* Calendly inline widget */}
                                <div
                                    className="calendly-inline-widget"
                                    data-url="https://calendly.com/dharam-tiwari/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
                                    style={{ minWidth: '320px', height: '600px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
