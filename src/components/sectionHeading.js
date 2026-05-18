// styles import
import styles from "../styles/sectionHeading.module.scss";

export default function SectionHeading({
  heading,
  smallHeading,
  position,
  h1 = false,
}) {
  return (
    <div className={styles.sectionHeading} style={{ "--position": position }}>
      <h2 className={styles.sectionH2}>{heading}</h2>
      {h1 === true && (
        <h1 className={styles.headingDiv}>
          World-class design partner for <span>AI startups</span>
        </h1>
      )}
      <p className={styles.sectionP}>{smallHeading}</p>
    </div>
  );
}
