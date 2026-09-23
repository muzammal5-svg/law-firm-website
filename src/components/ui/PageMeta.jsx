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
  const siteName = 'Rana M. Zahid Muneer Advocate'
  const fullTitle = title
    ? `${title} | ${siteName}`
    : 'Rana M. Zahid Muneer Advocate | Civil Rights, Disability Benefits, Eviction & Litigation'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Civil rights litigation, disability benefits litigation, eviction litigation, landlord and tenant litigation, traffic ticket litigation, will writing, workers compensation litigation, Rana Zahid Muneer Advocate, Islamabad legal services" />
      <meta property="og:site_name" content={siteName} />
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
