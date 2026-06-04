import { useState } from 'react';
import './AnnouncementBanner.css';

const AnnouncementBanner = () => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="announcement-banner">
            <div className="announcement-inner">
                <span className="announcement-badge">New</span>
                <p className="announcement-text">
                    Proud to announce that Kartavya Technology is now an official{' '}
                    <strong>Anthropic Partner</strong>.
                </p>
            </div>
            <button
                className="announcement-close"
                onClick={() => setDismissed(true)}
                aria-label="Dismiss announcement"
            >
                ✕
            </button>
        </div>
    );
};

export default AnnouncementBanner;
