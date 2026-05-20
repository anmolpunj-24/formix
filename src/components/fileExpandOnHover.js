// nextjs import
import Image from "next/image";

// styles import
import styles from "../styles/fileHover.module.scss";

export default function FileExpandOnHover() {
  return (
    <div className={styles.imgContainer}>
      <Image
        className={styles.fileImage}
        src="/assets/file.svg"
        height={55}
        width={65}
        alt="file-image"
      />

      <div className={styles.fileFront}></div>

      <div className={styles.images}>
        <Image
          className={styles.fileImage1}
          src="/assets/work.avif"
          height={120}
          width={120}
          alt="image"
        />
        <Image
          className={styles.fileImage2}
          src="/assets/work.avif"
          height={120}
          width={120}
          alt="image"
        />
        <Image
          className={styles.fileImage3}
          src="/assets/work.avif"
          height={120}
          width={120}
          alt="image"
        />
      </div>
    </div>
  );
}
