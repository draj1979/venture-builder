const Footer = () => {
    const footerStyles = {
        footer: {
            borderTop: '1px solid var(--border-color)',
            padding: '4rem 0',
            marginTop: 'auto',
            backgroundColor: 'var(--bg-primary)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
        },
        brand: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        copy: {
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
        },
        links: {
            display: 'flex',
            gap: '2rem',
            justifyContent: 'flex-end',
        },
        link: {
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.875rem',
        }
    };

    return (
        <footer style={footerStyles.footer}>
            <div className="container" style={footerStyles.grid}>
                <div style={footerStyles.brand}>
                    <h3 style={{ fontSize: '1.25rem' }}>Kartavya Technology</h3>
                    <p style={footerStyles.copy}>&copy; {new Date().getFullYear()} Kartavya Technology. All rights reserved.</p>
                </div>
                <div style={footerStyles.links}>
                    <a href="#" style={footerStyles.link}>LinkedIn</a>
                    <a href="#" style={footerStyles.link}>Twitter</a>
                    <a href="mailto:hello@kartavya.tech" style={footerStyles.link}>Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
