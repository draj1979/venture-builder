import React from 'react';

// eslint-disable-next-line react/prop-types
const CompanyCard = ({ name, category, problem, description }) => {
    return (
        <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            padding: '2rem',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            transition: 'var(--transition-fast)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{name}</h3>
                <span style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '100px'
                }}>
                    {category}
                </span>
            </div>
            <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Problem:</strong> {problem}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CompanyCard;
