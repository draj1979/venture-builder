import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, ogType, ogImage, twitterHandle }) => {
    const siteName = 'Kartavya Technology';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const siteUrl = 'https://kartavyatech.com'; // Replace with actual URL

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />

            {/* Canonical link */}
            {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content={ogType || 'website'} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage || '/logo.png'}`} />
            <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage || '/logo.png'}`} />
            {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
        </Helmet>
    );
};

export default SEO;
