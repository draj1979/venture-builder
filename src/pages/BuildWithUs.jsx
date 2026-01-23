import SEO from '../components/SEO';

const BuildWithUs = () => {
    return (
        <div className="container section-padding">
            <SEO
                title="Build With Us"
                description="Partner with Kartavya Technology to co-create the next generation of AI platforms. We provide engineering, product leadership, and shared equity."
                canonical="/build"
            />
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    marginBottom: '2rem',
                    letterSpacing: '-1px'
                }}>Build With Us</h1>
                <p style={{
                    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '4rem'
                }}>
                    We partner with domain experts, serial entrepreneurs, and forward-thinking enterprises to co-create the next generation of AI platforms.
                </p>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', marginBottom: '4rem' }}>
                <div style={{ border: '1px solid var(--border-color)', padding: '2.5rem', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>For Founders</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        You have deep domain expertise and a burning problem to solve. You need a partner who can handle the technology, product architecture, and 0-to-1 execution.
                    </p>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ We provide the engineering team</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ We provide the product leadership</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ We co-found and share equity</li>
                    </ul>
                </div>

                <div style={{ border: '1px solid var(--border-color)', padding: '2.5rem', borderRadius: '8px' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>For Enterprises</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        You have unique data and distribution. You want to launch an AI product but lack the internal DNA to build like a startup. We act as your external innovation engine.
                    </p>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Rapid prototyping and validation</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ IP ownership and licensing models</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Scalable production-grade architecture</li>
                    </ul>
                </div>
            </div>

            <div style={{ textAlign: 'center', background: 'var(--bg-secondary)', padding: 'clamp(2rem, 8vw, 4rem)', borderRadius: '8px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Scale?</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    We are selective. We look for unfair advantages and massive market potential.
                </p>
                <a href="mailto:partners@kartavya.tech" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                    Apply to Co-Build
                </a>
            </div>
        </div>
    );
};

export default BuildWithUs;
