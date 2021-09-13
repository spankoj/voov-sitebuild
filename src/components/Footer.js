import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.heading}>
        <a href="#navigation">
          <img src="/images/logo.png" alt="icon" />
        </a>
      </div>
      <div className={styles.line} />
      <div className={styles.copy}>
        <p>Copyright &copy; COMPANY Kft.</p>
        <p>Design & web site by Voov</p>
      </div>
    </footer>
  );
}
