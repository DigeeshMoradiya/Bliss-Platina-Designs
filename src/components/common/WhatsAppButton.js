import Link from 'next/link';

const WhatsAppButton = ({ phone }) => {
    if (!phone) return null;

    // Remove any non-numeric characters from the phone number
    const formattedPhone = phone.replace(/\D/g, '');

    return (
        <div className="whatsapp-button">
            <Link
                href={`https://wa.me/${formattedPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with us on WhatsApp"
            >
                <i className="fa fa-whatsapp"></i>
            </Link>
        </div>
    );
};

export default WhatsAppButton;
