// components import
import ReviewCard from "../reviewCard";
import SectionHeading from "../sectionHeading";
import SectionTag from "../sectionTag";

// styles import
import styles from "../../styles/reviews.module.scss";

// nextjs import
import Image from "next/image";

export default function Review() {
  return (
    <div className="sectionDiv ">
      <SectionTag tagName="Reviews" />
      <SectionHeading
        heading="Success stories."
        smallHeading="Discover how our design subscription helps innovative brands grow smarter and faster."
        position="row"
      />

      <div className={styles.mainDiv}>
        <div className={styles.ratingDiv}>
          <div className={styles.topSection}>
            <h1>4.9/5</h1>
            <p>
              We've delivered <br />
              100+ projects that <br />
              drive real results.
            </p>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.avatars}>
              {Array.from({ length: 4 }).map((_, index) => (
                <Image
                  height={52}
                  width={52}
                  key={index}
                  src="/assets/person.avif"
                  alt="person"
                />
              ))}
            </div>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
            <h3>Trusted by 100+ businesses</h3>
            <span>THEY HIT THEIR TARGETS — YOU'RE NEXT.</span>
            <button>Leave a review</button>
          </div>
        </div>

        <div className={styles.cardDiv}>
          {Array.from({ length: 4 }).map((_, index) => (
            <ReviewCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
