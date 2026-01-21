import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? { color: 'var(--text-primary)' } : { color: 'var(--text-secondary)' };
    };

    const navStyles = {
        header: {
            borderBottom: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-primary)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        },
        navContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '700',
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        },
        links: {
            display: 'flex',
            gap: '2rem',
        },
        link: {
            textDecoration: 'none',
            fontSize: '0.95rem',
            fontWeight: '500',
            transition: 'color 0.2s ease',
        },
        logoDot: {
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--accent-primary)',
            borderRadius: '50%',
            display: 'inline-block'
        }
    };

    return (
        <header style={navStyles.header}>
            <div className="container" style={navStyles.navContainer}>
                <Link to="/" style={navStyles.logo}>
                    Kartavya<span style={navStyles.logoDot}></span>
                </Link>
                <nav style={navStyles.links}>
                    {['/', '/model', '/portfolio', '/build', '/about'].map((path) => {
                        const label = path === '/' ? 'Home' :
                            path === '/model' ? 'Model' :
                                path === '/portfolio' ? 'Portfolio' :
                                    path === '/build' ? 'Build With Us' : 'About';
                        return (
                            <Link
                                key={path}
                                to={path}
                                style={{ ...navStyles.link, ...isActive(path) }}
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
