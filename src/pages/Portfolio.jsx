import { portfolioData } from '../data/portfolio';
import CompanyCard from '../components/CompanyCard';

const Portfolio = () => {
    return (
        <div className="container section-padding">
            <h1 style={{
                fontSize: '3.5rem',
                marginBottom: '1rem',
                letterSpacing: '-1px'
            }}>Portfolio</h1>
            <p style={{
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                marginBottom: '4rem'
            }}>
                26 companies built, operated, and positioned for scale.
                Focused on solving real problems with applied AI.
            </p>

            <div className="grid-cols-3">
                {portfolioData.map((company, index) => (
                    <CompanyCard key={index} {...company} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
