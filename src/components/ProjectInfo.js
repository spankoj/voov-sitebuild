import styles from '../styles/ProjectInfo.module.css';

export default function ProjectInfo() {
  return (
    <section className={styles.pinfo}>
      <div className={styles.headlines}>
        <h1 id="projectInfo" className="headerBlue">
          {' '}
          Donec ut turpis
        </h1>
        <div className="line" />

        <div className={styles.column}>
          <div>
            <p>
              In porta diam arcu: <span>Luctus mattis</span>
            </p>
          </div>
          <div>
            <p>
              Project címe: <span>Lorem ipsum</span>
            </p>
          </div>
          <div>
            <p>
              Donec ut turpis suscipit: <span>In nunc tellus, fringilla</span>
            </p>
          </div>
          <div>
            <p>
              in nunc tellus: <span>35 %</span>
            </p>
          </div>
          <div>
            <p>
              Nunc feugiat et elit eu venenatis:
              <span>
                Donec ut turpis suscipit lectus luctus mattis. Nulla quam nisl,
                lacinia a nisi nec, accumsan luctus quam. In nunc tellus,
                fringilla vel faucibus ut, sodales ac velit. Nunc feugiat et
                elit eu venenatis. In porta diam arcu.
              </span>
            </p>
          </div>
          <button className="btn">Donec ut turpis suscipit 2020</button>
          <button className="btn">Fringilla vel faucibus ut 2021</button>
        </div>
      </div>
    </section>
  );
}
