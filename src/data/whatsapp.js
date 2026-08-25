// WhatsApp bot contact details. Number is in international format, digits only.
export const WHATSAPP_NUMBER = '917795691794';

export const WHATSAPP_DISPLAY_NUMBER = '+91 77956 91794';

export const WHATSAPP_DEFAULT_MESSAGE =
    "Hi Inferex AI — I'd like to know more about building with you.";

// Builds a wa.me click-to-chat link that opens the bot with a prefilled message.
export const whatsappLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
