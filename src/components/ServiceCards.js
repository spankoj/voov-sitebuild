import 'react-multi-carousel/lib/styles.css';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-multi-carousel';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from '../styles/ServiceCards.module.css';

function ServiceCards() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Router>
      <div className={styles.cardContainer}>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={true}
          infinite={true}
        >
          <div className={styles.card}>
            <img
              className={styles.img}
              src="images/szolg_1.png"
              alt="szolgáltatás 1"
            />
            <div className={styles.cardContent}>
              <h2>Nulla quam nisl</h2>
              <p>
                Donec ut turpis suscipit lectus luctus mattis. Nulla quam nisl,
                lacinia a nisi nec, accumsan luctus quam. In nunc tellus,
                fringilla vel faucibus ut, sodales ac velit. Nunc feugiat et
                elit eu venenatis. In porta diam arcu.
              </p>
              <Link to="/" className={styles.link}>
                Részletek
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faChevronRight}
                  size="sm"
                />
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="images/szolg_2.png"
              alt="szolgáltatás 2"
            />
            <div className={styles.cardContent}>
              <h2>Donec ut turpis suscipit</h2>
              <p>
                Donec ut turpis suscipit lectus luctus mattis. Nulla quam nisl,
                lacinia a nisi nec, accumsan luctus quam. In nunc tellus,
                fringilla vel faucibus ut, sodales ac velit. Nunc feugiat et
                elit eu venenatis. In porta diam arcu.
              </p>
              <Link to="/" className={styles.link}>
                Részletek
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faChevronRight}
                  size="sm"
                />
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="images/szolg_3.png"
              alt="szolgáltatás 3"
            />
            <div className={styles.cardContent}>
              <h2> In porta diam arcu</h2>
              <p>
                Donec ut turpis suscipit lectus luctus mattis. Nulla quam nisl,
                lacinia a nisi nec, accumsan luctus quam. In nunc tellus,
                fringilla vel faucibus ut, sodales ac velit. Nunc feugiat et
                elit eu venenatis. In porta diam arcu.
              </p>
              <Link to="/" className={styles.link}>
                Részletek
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faChevronRight}
                  size="sm"
                />
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.img}
              src="images/szolg_4.jpeg"
              alt="szolgáltatás 4"
            />
            <div className={styles.cardContent}>
              <h2>Negyedik</h2>
              <p>
                Donec ut turpis suscipit lectus luctus mattis. Nulla quam nisl,
                lacinia a nisi nec, accumsan luctus quam. In nunc tellus,
                fringilla vel faucibus ut, sodales ac velit. Nunc feugiat et
                elit eu venenatis. In porta diam arcu.
              </p>
              <Link to="/" className={styles.link}>
                Részletek
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faChevronRight}
                  size="sm"
                />
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </Router>
  );
}

export default ServiceCards;
