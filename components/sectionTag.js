// styles import
import styles from "../styles/sectionTag.module.scss";

export default function SectionTag({ tagName }) {
  return (
    <div className={styles.tagDiv}>
      <p className={styles.slash}>//</p>
      <span className={styles.tag}>{tagName}</span>
      <p className={styles.slash}>//</p>
    </div>
  );
}
