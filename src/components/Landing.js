import React from 'react';
import style from '../styles/Landing.module.css';
import Carousel from './Carousel';
import Header from './Header';

function Landing() {
  return (
    <section className={style.landing}>
      <div className={style.carousel}>
        <Header />
        <Carousel />
      </div>
      <div className={style.content}>
        <div className={style.ismerdmeg}>
          <h1>Ismerd meg</h1>
          <h1>szolgáltatásainkat</h1>
        </div>
        <div className={style.line}></div>
        <p className={style.par}>
          Ut posuere, quam id dapibus placerat, dui sem rutrum ante, et aliquet
          erat ipsum sed arcu.
        </p>
      </div>
    </section>
  );
}

export default Landing;
