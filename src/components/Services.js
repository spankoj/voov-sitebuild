import React from 'react';
import styles from '../styles/Services.module.css';
import Company from './Company';
import ServiceCards from './ServiceCards';

function Services() {
  return (
    <section>
      <div id="services" className={styles.services}>
        <h1 className="headerBlue">Szolgáltatásaink</h1>
        <div className="line" />
      </div>
      <ServiceCards />
      <Company />
    </section>
  );
}

export default Services;
