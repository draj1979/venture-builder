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
                    Kartavya Technology was founded on a simple premise: <strong>Building a company is a distinct skill from consulting on one.</strong> We are engineers, product architects, and operators who have shifted from "servicing" clients to "building" assets.
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
