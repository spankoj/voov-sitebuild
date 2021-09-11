import React from 'react';
import styles from '../styles/Services.module.css';
import Company from './Company';
import ServiceCards from './ServiceCards';

function Services() {
  return (
    <section>
      <div className={styles.services}>
        <h1>Szolgáltatásaink</h1>
        <div className={styles.line}></div>
      </div>
      <ServiceCards />
      <Company />
    </section>
  );
}

export default Services;
