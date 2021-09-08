import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

function Carusel() {
  return (
    <div>
      <Carousel
        autoPlay
        interval={10000}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        swipeable={true}
        infiniteLoop={true}
      >
        <div>
          <img alt="landing1" src="images/landing.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img alt="landing2" src="images/landing-2.jpeg" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img alt="landing3" src="images/landing-3.jpeg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default Carusel;
