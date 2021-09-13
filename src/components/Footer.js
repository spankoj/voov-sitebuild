import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.heading}>
        <Router>
          <Link to="/">
            <img className={styles.img} src="/images/logo.png" alt="icon" />
          </Link>
        </Router>
      </div>
      <div className={styles.line} />
      <div className={styles.copy}>
        <p>Copyright &copy; COMPANY Kft.</p>
        <p>Design & web site by Voov</p>
      </div>
    </footer>
  );
}
