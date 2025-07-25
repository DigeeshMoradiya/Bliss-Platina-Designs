import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SEO({ title, description, keywords }) {
    const pathname = usePathname();

    const [fullUrl, setFullUrl] = useState('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const origin = window.location.origin;
            setFullUrl(origin + pathname);
        }
    }, [pathname]);
    return (
        <Head>

            <title>{title ? `${title} | Bliss Platina Designs` : 'Bliss Platina Designs'}</title>
            <meta name="description" content={description || 'Default site description'} />
            <meta name="keywords" content={keywords || 'jewelry, ecommerce, gold, diamond'} />
            {fullUrl && <link rel="canonical" href={fullUrl} />}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
