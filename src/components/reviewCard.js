// styles import
import styles from "../styles/reviewCard.module.scss";

// nextjs import
import Image from "next/image";

export default function ReviewCard() {
  return (
    <div className={styles.mainCard}>
      <div className={styles.dataCard}>
        <span>4.9 ⭐ RATING</span>
        <p>
          "Proactive, precise, and easy to work with—no hand-holding needed,
          just smooth collaboration from start to finish."
        </p>
      </div>

      <div className={styles.personData}>
        <Image src="/assets/person.avif" width={54} height={54} alt="person" />

        <div className={styles.personInfo}>
          <h3>Jared Kim</h3>
          <span>MARKETING DIRECTOR</span>
        </div>
      </div>
    </div>
  );
}
