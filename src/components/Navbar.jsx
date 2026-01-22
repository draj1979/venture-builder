import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const isActive = (path) => {
        return location.pathname === path ? { color: 'var(--text-primary)' } : { color: 'var(--text-secondary)' };
    };

    return (
        <header className="header">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img
                        src="/logo.png"
                        alt="Kartavya Logo"
                        className="logo-rotate"
                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                    />
                    Kartavya
                </Link>

                <button
                    className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {['/', '/model', '/portfolio', '/build', '/about', '/contact'].map((path) => {
                        const label = path === '/' ? 'Home' :
                            path === '/model' ? 'Model' :
                                path === '/portfolio' ? 'Portfolio' :
                                    path === '/build' ? 'Build With Us' :
                                        path === '/about' ? 'About' : 'Contact';
                        return (
                            <Link
                                key={path}
                                to={path}
                                className="nav-link"
                                style={isActive(path)}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
