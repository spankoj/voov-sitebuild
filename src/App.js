/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import './fonts/Lato-Black.ttf';
import { css, Global } from '@emotion/react';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Layout from './components/Layout';
import ProjectInfo from './components/ProjectInfo';
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
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          @font-face {
            font-family: 'LatoBlack';
            src: local('LatoBlack'),
              url('./fonts/Lato-Black.ttf') format('truetype');
            font-weight: normal;
          }
          body {
            font-family: 'LatoBlack';
          }
        `}
      />
      <Layout>
        <Landing />
        <Services />
        <Contact />
        <ProjectInfo />
      </Layout>
    </div>
  );
}
