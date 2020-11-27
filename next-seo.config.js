const title = 'Nguyen Chinh Luan – Developer, writer.';
const description = 'Front-end developer.';

const SEO = {
  title,
  description,
  canonical: 'https://vnnextjs.com',
  openGraph: {
    type: 'website',
    locale: 'vi_IE',
    url: 'https://vnnextjs.com',
    title,
    description,
    images: [
      {
        url: 'https://vnnextjs.com/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
};

export default SEO;
