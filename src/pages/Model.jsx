import { Link } from 'react-router-dom';

const Model = () => {
    const steps = [
        {
            num: "01",
            title: "Ideation & Validation",
            desc: "We identify high-value problems in specific domains. We test rigorous hypotheses before writing a line of code."
        },
        {
            num: "02",
            title: "Core Team Assembly",
            desc: "We assign a Founding Entrepreneur in Residence (EIR) and a technical lead from our internal talent pool."
        },
        {
            num: "03",
            title: "MVP & Traction",
            desc: "We build the product leveraging our pre-built AI functional blocks. Speed to market is our currency."
        },
        {
            num: "04",
            title: "Spin-out & Scale",
            desc: "Once product-market fit is visible, the venture spins out as an independent entity with Kartavya holding equity."
        }
    ];

    return (
        <div className="container section-padding">
            <div style={{ maxWidth: '800px', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', letterSpacing: '-1px' }}>The Venture Builder Model</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    We systematically de-risk startup creation. Unlike VCs who diversified risk across a portfolio, we concentrate risk and manage it through deep operational control and repeatable execution playbooks.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '4rem',
                marginBottom: '6rem'
            }}>
                {steps.map((step, i) => (
                    <div key={i}>
                        <span style={{
                            fontSize: '4rem',
                            fontWeight: '700',
                            color: 'var(--border-color)',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>{step.num}</span>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                    </div>
                ))}
            </div>

            <div style={{
                background: 'var(--bg-secondary)',
                padding: '4rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
            }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>How We Differ</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div>
                        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>vs Venture Studios</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            Most studios offer advice and mild support. We provide the actual engineering and product teams. We are builders, not just connectors.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>vs IT Services</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            Service firms bill for time. We invest for equity. Our incentives are perfectly aligned with the long-term success of the venture.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model;
