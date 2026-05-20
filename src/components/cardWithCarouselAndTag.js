// styles import
import styles from "../styles/cardWithCarousel.module.scss";

// components import
import FileExpandOnHover from "./fileExpandOnHover";

export default function CardWithCArouselAndTAg() {
  return (
    <div className={styles.mainCard}>
      <div className={styles.innerCard}>
        <FileExpandOnHover />
        <h3>Brand identity</h3>
        <p>
          Elevate your identity: sharp positioning, cohesive visuals, real
          impact.
        </p>
        <div className={styles.tagsWrapper}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className={styles.tag} key={index}>
              <span className={styles.dot}></span>
              <span>Art Direction</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
