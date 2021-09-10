import './styles/global.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Layout from './components/Layout';
import ProjectInfo from './components/ProjectInfo';
import Services from './components/Services';

export default function Home() {
  return (
    <div>
      <Layout>
        <Landing />
        <Services />
        <Contact />
        <ProjectInfo />
        <Footer />
      </Layout>
    </div>
  );
}
