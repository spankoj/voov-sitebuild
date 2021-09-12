import styles from '../styles/Company.module.css';

export default function Company() {
  return (
    <section>
      <div className={styles.grid}>
        <h1 className={styles.header}>Cégünk</h1>

        <div className={styles.cegunk1}>
          <img alt="cegunk 1" src="images/cegunk_1.png" />
        </div>
        <div className={styles.cegunk2}>
          <img alt="cegunk 2" src="images/cegunk_2.png" />
        </div>
        <div className={styles.cegunk3}>
          <img alt="cegunk 3" src="images/cegunk_3.png" />
        </div>
        <div className={styles.cegunk4}>
          <img alt="cegunk 4" src="images/cegunk_4.png" />
        </div>
        <div className={styles.cegunk5}>
          <img alt="cegunk 5" src="images/cegunk_5.png" />
        </div>
        <div className={styles.cegunk6}>
          <img alt="cegunk 6" src="images/cegunk_6.png" />
        </div>
      </div>
    </section>
  );
}
