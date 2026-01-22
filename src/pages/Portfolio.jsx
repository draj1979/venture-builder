import { portfolioData } from '../data/portfolio';
import CompanyCard from '../components/CompanyCard';

const Portfolio = () => {
    return (
        <div className="container section-padding">
            <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    marginBottom: '1rem',
                    letterSpacing: '-1px'
                }}>Portfolio</h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                }}>
                    26 companies built, operated, and positioned for scale.
                    Focused on solving real problems with applied AI.
                </p>
            </div>

            <div className="grid-cols-3">
                {portfolioData.map((company, index) => (
                    <CompanyCard key={index} {...company} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
