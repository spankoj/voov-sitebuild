/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
      <Layout>
        <Landing />
        <Services />
        <Contact />
        <ProjectInfo />
      </Layout>
    </div>
  );
}
