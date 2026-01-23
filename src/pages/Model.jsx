import SEO from '../components/SEO';
import './Model.css';

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
            <SEO
                title="Venture Builder Model"
                description="Discover how Kartavya Technology systematically de-risks startup creation through deep operational control and repeatable execution playbooks."
                canonical="/model"
            />
            <div className="model-header">
                <h1 className="model-title">The Venture Builder Model</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    We systematically de-risk startup creation. Unlike VCs who diversified risk across a portfolio, we concentrate risk and manage it through deep operational control and repeatable execution playbooks.
                </p>
            </div>

            <div className="model-steps">
                {steps.map((step, i) => (
                    <div key={i}>
                        <span className="step-num">{step.num}</span>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                    </div>
                ))}
            </div>

            <div className="comparison-box">
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>How We Differ</h2>
                <div className="comparison-grid">
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
