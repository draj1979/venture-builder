import { Link } from 'react-router-dom';
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
                    <a href="https://linkedin.com/company/kartavyatech" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <a href="https://twitter.com/kartavyatech" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
                    <Link to="/contact" className="footer-link">Contact</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
