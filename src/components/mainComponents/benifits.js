// components import
import DataCardWithDots from "@/components/dataCardWithDots";
import SectionTag from "@/components/sectionTag";
import SectionHeading from "@/components/sectionHeading";

// styles import
import styles from "../../styles/benifits.module.scss";

export default function Benifits() {
  return (
    <div className="sectionDiv">
      <SectionTag tagName="Benefits" />
      <SectionHeading
        heading="Our benefits."
        smallHeading="Get unlimited design work for a simple monthly rate. No hourly billing, no surprises — pause or cancel whenever you need."
        position="row"
      />

      <div className={styles.dataDiv}>
        {Array.from({ length: 6 }).map((_, index) => (
          <DataCardWithDots
            key={index}
            image="./assets/arrow.svg"
            text="Predictable Pricing"
            currDot={index + 1}
            totalDots={6}
            smallText="Simple pricing structure that gives you unlimited design."
          />
        ))}
      </div>
    </div>
  );
}
