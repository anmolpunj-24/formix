// nextjs import
import Image from "next/image";

// styles import
import styles from "../styles/dataCardWithDots.module.scss";

export default function DataCardWithDots({
  image,
  link,
  text,
  currDot,
  totalDots,
  height,
  width,
  smallText,
}) {
  return (
    <div
      className={styles.dotCard}
      style={{ "--height": height, "--width": width }}
    >
      <div className={styles.imageAndDot}>
        <Image src={image} height={20} width={20} alt="text" title="text" />
        <div className={styles.dots}>
          {Array.from({ length: totalDots }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index < currDot ? styles.active : ""}`}
            />
          ))}
        </div>
      </div>

      {link ? (
        <div className={styles.linkText}>
          <h3>{link}</h3>
          <p>{smallText}</p>
        </div>
      ) : (
        <div className={styles.headingSmallText}>
          <h3>{text}</h3>
          <p>{smallText}</p>
        </div>
      )}
    </div>
  );
}
