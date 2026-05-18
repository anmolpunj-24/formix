// styles import
import styles from "../../styles/marquee.module.scss";

// nextjs import
import Image from "next/image";

export default function Marquee() {
  return (
    <section className="section">
      <div className="sectionDiv">
        <h3>Worked with: </h3>
        {/* <div className={styles.marqueeImage}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Image
              src="/assets/aven.avif"
              height={80}
              width={120}
              alt={index}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
