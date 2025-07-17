import Head from 'next/head';

export default function SEO({ title, description, keywords }) {
    return (
        <Head>
            
            <title>{title ? `${title} | Bliss Platina Designs` : 'Bliss Platina Designs'}</title>
            <meta name="description" content={description || 'Default site description'} />
            <meta name="keywords" content={keywords || 'jewelry, ecommerce, gold, diamond'} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
