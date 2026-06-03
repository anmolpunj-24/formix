// styles import
import styles from "../styles/bigCardsWithLinks.module.scss";

// nextjs import
import Image from "next/image";

export default function BigCardsWithLinks({heading, smallText}) {
  return (
    <div className={styles.bigCard}>
      <Image
        className={styles.bigImg}
        src="/assets/work.avif"
        alt={heading}
        fill
      />
      <div className={styles.textSec}>
        <div>
          <h2>{heading}</h2>
          <p>{smallText}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
