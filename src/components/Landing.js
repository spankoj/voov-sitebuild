import React from 'react';
import landing from '../images/landing.jpg';

function Landing() {
  return (
    <div>
      <img src={landing} alt="landing" width={1000} height={400} />
      <h1>Ismerd meg szolgáltatásainkat</h1>
      <p>
        Ut posuere, quam id dapibus placerat, dui sem rutrum ante, et aliquet
        erat ipsum sed arcu.
      </p>
    </div>
  );
}

export default Landing;
