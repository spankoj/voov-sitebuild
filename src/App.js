import 'react-responsive-carousel/lib/styles/carousel.min.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Carousel from './components/Carousel';
import Landing from './components/Landing';
import Layout from './components/Layout';
import Services from './components/Services';

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 40px;
`;

export default function Home() {
  return (
    <div>
      <Carousel />
      <Layout>
        <Landing />
        <Services />
      </Layout>
    </div>
  );
}
