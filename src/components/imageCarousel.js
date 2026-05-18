// nextjs import
import Image from "next/image";

// styles import
import styles from "../styles/carousel.module.scss";

export default function ImageCarousel() {
  return (
    <div className={styles.carouselContainer}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Image key={index} src="/assets/motion.avif" fill alt="image" />
      ))}
    </div>
  );
}
