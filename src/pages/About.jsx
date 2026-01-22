const About = () => {
    return (
        <div className="container section-padding">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
                    marginBottom: '2rem',
                    letterSpacing: '-1px'
                }}>About Kartavya</h1>
                <p style={{
                    fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '4rem'
                }}>
                    Kartavya Technology is a Venture Builder focused on conceiving, building, and scaling AI-first companies from India with global relevance.

                    We do not operate as a services firm, accelerator, or advisory platform. Our work is centered on company creation—from identifying meaningful problems to building production-grade products, assembling core teams, and scaling ventures with long-term ownership and operational involvement.

                    Our approach combines deep technology expertise with execution discipline. We build ventures by embedding ourselves at the core—owning product architecture, AI strategy, and engineering execution from day one. This allows us to create companies that are capital-efficient, technically strong, and designed for scale.

                    Kartavya Technology functions as a company-building platform. We leverage shared infrastructure, reusable AI systems, and repeatable execution frameworks to reduce the cost and risk of early-stage venture creation. This enables faster validation, stronger foundations, and higher long-term equity value across the portfolio.

                    We work with founders, domain experts, and enterprises who are aligned on one principle: building for the long term. Partnerships are equity-aligned, execution-driven, and grounded in shared ownership rather than transactional engagement.

                    Our vision is to build a portfolio of enduring, AI-driven companies that solve real problems and create lasting value—by combining conviction, technology depth, and disciplined execution.
                </p>

                <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2rem)', marginBottom: '1.5rem' }}>Our Vision</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    To establish India as the global epicenter for building deep-tech AI companies. We believe that with the right structure, India's engineering talent can not just support global companies, but own them.
                </p>

                <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2rem)', marginBottom: '1.5rem' }}>The Team</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    We are a collective of senior technologists and product leaders. Our leadership team has decades of experience building scalable platforms, navigating regulatory landscapes, and exiting to major acquirers. We bring this institutional knowledge to every venture we touch.
                </p>

                <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                    <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                        "We don't bet on companies. We build them. The difference is control, conviction, and responsibility."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
