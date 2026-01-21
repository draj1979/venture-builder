import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import CompanyCard from '../components/CompanyCard';

const Home = () => {
    const recentCompanies = portfolioData.slice(0, 3);

    const heroStyles = {
        wrapper: {
            padding: '8rem 0 6rem',
            maxWidth: '900px',
        },
        headline: {
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            fontWeight: '700',
            lineHeight: '1.1',
            letterSpacing: '-1.5px',
            marginBottom: '2rem',
        },
        subline: {
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginBottom: '3rem',
        },
        ctaGroup: {
            display: 'flex',
            gap: '1rem',
        }
    };

    return (
        <div className="container">
            <section style={heroStyles.wrapper}>
                <h1 style={heroStyles.headline}>
                    We Conceive, Build, and Scale <span style={{ color: 'var(--accent-primary)' }}>AI-First Companies</span>.
                </h1>
                <p style={heroStyles.subline}>
                    Kartavya Technology is a Venture Builder. We don't just invest or advise.
                    We provide the leadership, architecture, and execution engine to turn ideas into category-defining AI companies.
                </p>
                <div style={heroStyles.ctaGroup}>
                    <Link to="/model" className="btn btn-primary">Our Model</Link>
                    <Link to="/build" className="btn btn-outline">Build With Us</Link>
                </div>
            </section>

            <div style={{ height: '1px', background: 'var(--border-color)', margin: '2rem 0' }}></div>

            <section className="section-padding">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Proof of Execution</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>A glimpse into our 26-company portfolio.</p>
                    </div>
                    <Link to="/portfolio" className="btn btn-outline">View All Ventures</Link>
                </div>

                <div className="grid-cols-3">
                    {recentCompanies.map((company, index) => (
                        <CompanyCard key={index} {...company} />
                    ))}
                </div>
            </section>

            <section className="section-padding" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Not a Service Firm. Not an Accelerator.</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Traditional models are broken. Consultants lack ownership. Accelerators lack deep operational involvement.
                    We bridge the gap by co-building with high conviction and shared equity.
                </p>
                <Link to="/about" style={{ color: 'var(--accent-primary)', fontWeight: '500', textDecoration: 'underline' }}>
                    Read our manifesto
                </Link>
            </section>
        </div>
    );
};

export default Home;
