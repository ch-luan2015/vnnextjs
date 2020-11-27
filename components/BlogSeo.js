import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
  console.log("title", title);
  console.log("image", image);
  const date = new Date(publishedAt).toISOString();
  const featuredImage = {
    url: `https://vnnextjs.com${image}`,
    alt: title
  };

  return (
    <>
      <NextSeo
        title={`${title} – Nguyen Chinh Luan`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          url,
          title,
          description: summary,
          images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Nguyen Chinh Luan"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-icon-192x192.png"
        publisherName="Nguyen Chinh Luan"
        title={title}
        url={url}
      />
    </>
  );
};

export default BlogSeo;
