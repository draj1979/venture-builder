import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h3 style={{ fontSize: '1.25rem' }}>Kartavya Technology</h3>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} Kartavya Technology. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">Twitter</a>
                    <a href="mailto:hello@kartavya.tech" className="footer-link">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
