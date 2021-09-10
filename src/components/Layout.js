import Helmet from 'react-helmet';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="discription" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Voov-sitebuild',
  description: 'Exercise',
  keywords: 'Voov, Hire, Webdesign',
};
