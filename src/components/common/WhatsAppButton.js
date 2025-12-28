'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const WhatsAppButton = ({ phone }) => {
    const [moveUp, setMoveUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setMoveUp(true);
            } else {
                setMoveUp(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!phone) return null;

    // Remove any non-numeric characters from the phone number
    const formattedPhone = phone.replace(/\D/g, '');

    return (
        <div className={`whatsapp-button ${moveUp ? 'move-up' : ''}`}>
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
