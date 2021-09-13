import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <section id="landing" className={styles.header}>
        <div>
          <a href="#landing">
            <img src="/images/logo.png" alt="icon" />
          </a>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.ul}>
            <li>
              <a href="#services">Szolgáltatások</a>
            </li>
            <li>
              <a href="#contact">Kapcsolat</a>
            </li>
            <li>
              <a href="#projectInfo">Pályázati Információk</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
