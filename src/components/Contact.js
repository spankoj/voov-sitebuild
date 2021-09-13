import styles from '../styles/Contact.module.css';
import MapContainer from './MapContainer';

export default function Contact() {
  return (
    <main className={styles.contact}>
      <div className={styles.contactBorder}>
        <div className={styles.headlines}>
          <h1 className="headerBlue">Kapcsolat</h1>
          <div className="line" />
          <h2 className="header2">Kapcsolati adatok</h2>
        </div>
        <div className={styles.details}>
          <div className={styles.column}>
            <div>
              <p>
                Cégnév: <span>COMPANY Kft.</span>{' '}
              </p>
            </div>
            <div>
              <p>
                Székhely / postacím:
                <br />
                <span>9400 Sopron, Párkány utca 19., II/4.</span>
              </p>
            </div>
            <div>
              <p>
                Szállítási cím / telephely:
                <br />
                <span>9400 Sopron, Párkány utca 19., II/4.</span>
              </p>
            </div>
            <div>
              <p>
                Email: <span>office@company.hu</span>
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div>
              <p>
                Telefon: <span>+36-99/111-222</span>
              </p>
            </div>
            <div>
              <p>
                Fax: <span>+36-99/111-223</span>
              </p>
            </div>
            <div>
              <p>
                Cégjegyzékszám: <span>01-02-0222236</span>
              </p>
            </div>
            <div>
              <p>
                Adószám: <span>12345678-1-00</span>
              </p>
            </div>
            <div>
              <p>
                Közösségi adószám: <span>HU12345678</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <h2 className="header2">Így talál el hozzánk</h2>
      </div>
      <div className={styles.map}>
        <MapContainer />
      </div>
    </main>
  );
}
