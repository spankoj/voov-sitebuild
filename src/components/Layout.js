import Helmet from 'react-helmet';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="discription" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Voov-sitebuild',
  description: 'Exercise',
  keywords: 'Voov, Hire, Webdesign',
};
