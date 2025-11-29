import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url }) {
  return (
    <Helmet>
      {/* Google ke liye Title */}
      <title>{title} | TopOnlineForm</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Social Media (WhatsApp/Facebook) Sharing ke liye */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
