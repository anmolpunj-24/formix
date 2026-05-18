// components import
import SectionTag from "@/components/sectionTag";
import SectionHeading from "@/components/sectionHeading";

// styles import
import styles from "../../styles/projects.module.scss";

export default function ProjectsAvail() {
  return (
    <div className={styles.projDiv}>
      <section className="section">
        <div className="sectionDiv">
          <SectionTag tagName="Available for projects" />
          <SectionHeading
            heading=""
            smallHeading="Design subscriptions for AI growing startup."
            position="column"
            h1={true}
          />
        </div>
      </section>

      <div></div>
    </div>
  );
}
