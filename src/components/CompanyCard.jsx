import './CompanyCard.css';

// eslint-disable-next-line react/prop-types
const CompanyCard = ({ name, category, problem, description, url }) => {
    const content = (
        <>
            <div className="card-header">
                <h3 className="card-title">{name}</h3>
                <span className="card-badge">{category}</span>
            </div>
            <div className="card-body">
                <p className="card-info">
                    <span className="card-label">Problem:</span> {problem}
                </p>
                <p className="card-description">
                    {description}
                </p>
            </div>
        </>
    );

    if (url) {
        return (
            <a
                className="card-wrapper card-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </a>
        );
    }

    return <div className="card-wrapper">{content}</div>;
};

export default CompanyCard;
