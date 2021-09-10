import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Router>
        <div>
          <Link to="/">
            <img className={styles.img} src="/images/logo.png" alt="icon" />
          </Link>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.ul}>
            <li>
              <Link to="/services">Szolgáltatások</Link>
            </li>
            <li>
              <Link to="/contact">Kapcsolat</Link>
            </li>
            <li>
              <Link to="/projectinfo">Pályázati információk</Link>
            </li>
          </ul>
        </nav>
      </Router>
    </header>
  );
}
