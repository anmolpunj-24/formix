// components import
import CardWithCArouselAndTAg from "../cardWithCarouselAndTag";
import SectionTag from "../sectionTag";
import SectionHeading from "../sectionHeading";

// styles import
import styles from "../../styles/services.module.scss";

export default function Services() {
  return (
    <div className="sectionDiv">
      <SectionTag tagName="Services" />
      <SectionHeading
        heading="What we do."
        smallHeading="We combine strategy, speed, and skill to deliver exceptional design — every time."
        position="row"
      />

      <div className={styles.cardDiv}>
        {Array.from({ length: 3 }).map((_, index) => (
          <CardWithCArouselAndTAg />
        ))}
      </div>
    </div>
  );
}
