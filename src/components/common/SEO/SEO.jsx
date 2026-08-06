import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  noindex = false,
  keywords,
}) => {
  const siteName = 'Chalachal Technical Services LLC';

  const fullTitle = title
    ? `${title} | Chalachal Technical Services`
    : siteName;

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================== */}

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large'
        }
      />

      <meta
        name="googlebot"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large'
        }
      />


      {/* =========================
          CANONICAL
      ========================== */}

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}


      {/* =========================
          OPEN GRAPH
          Facebook / WhatsApp /
          LinkedIn
      ========================== */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:locale"
        content="en_AE"
      />

      {canonical && (
        <meta
          property="og:url"
          content={canonical}
        />
      )}

      {image && (
        <>
          <meta
            property="og:image"
            content={image}
          />

          <meta
            property="og:image:alt"
            content={fullTitle}
          />
        </>
      )}


      {/* =========================
          X / TWITTER
      ========================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      {image && (
        <meta
          name="twitter:image"
          content={image}
        />
      )}

    </Helmet>
  );
};

export default SEO;