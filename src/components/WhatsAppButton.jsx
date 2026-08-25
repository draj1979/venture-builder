import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '../data/whatsapp';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-fab"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-fab-icon" aria-hidden="true" />
            <span className="whatsapp-fab-label">Chat with us</span>
        </a>
    );
};

export default WhatsAppButton;
