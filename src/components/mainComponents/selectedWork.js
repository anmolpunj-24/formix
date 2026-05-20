// components import
import SectionTag from "@/components/sectionTag";
import SectionHeading from "@/components/sectionHeading";
import BigCardsWithLinks from "../bigCardsWithLinks";

// styles import
import styles from "../../styles/work.module.scss";

export default function SelectedWork() {
  return (
    <div className="sectionDiv">
      <SectionTag tagName="Work" />
      <SectionHeading
        heading="Selected work."
        smallHeading="A look at some of the brands we’ve helped — and the outcomes we’ve delivered."
        position="row"
      />

      <div className={styles.mainDiv}>
        {Array.from({ length: 6 }).map((_, index) => (
          <BigCardsWithLinks
            key={index}
            heading="Stackwise"
            smallText="Health & Wellness"
          />
        ))}
      </div>
    </div>
  );
}
