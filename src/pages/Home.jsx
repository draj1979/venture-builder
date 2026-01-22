import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import CompanyCard from '../components/CompanyCard';
import './Home.css';

const Home = () => {
    const recentCompanies = portfolioData.slice(0, 3);

    return (
        <div className="container">
            <section className="hero-wrapper">
                <h1 className="hero-headline">
                    We Conceive, Build, and Scale <span style={{ color: 'var(--accent-primary)' }}>AI-First Companies</span>.
                </h1>
                <p className="hero-subline">
                    Kartavya Technology is a Venture Builder. We don't just invest or advise.
                    We provide the leadership, architecture, and execution engine to turn ideas into category-defining AI companies.
                </p>
                <div className="hero-cta-group">
                    <Link to="/model" className="btn btn-primary">Our Model</Link>
                    <Link to="/build" className="btn btn-outline">Build With Us</Link>
                </div>
            </section>

            <div className="divider"></div>

            <section className="section-padding">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">Proof of Execution</h2>
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

            <section className="section-padding manifesto-section">
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Not a Service Firm. Not an Accelerator.</h2>
                <p className="manifesto-text">
                    Traditional models are broken. Consultants lack ownership. Accelerators lack deep operational involvement.
                    We bridge the gap by co-building with high conviction and shared equity.
                </p>
                <Link to="/about" className="manifesto-link">
                    Read our manifesto
                </Link>
            </section>
        </div>
    );
};

export default Home;
