import { Helmet } from 'react-helmet-async'

/**
 * Sets page meta tags (title, description, OG tags) for SEO
 */
export default function PageMeta({ 
  title, 
  description, 
  image,
  url,
  type = 'website'
}) {
  const fullTitle = title ? `${title} | Counsel & Clarity` : 'Counsel & Clarity - Expert Legal Advocacy'
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
