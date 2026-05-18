// components import
import GetInTouchForm from "../getInTouchForm";
import SectionTag from "@/components/sectionTag";
import SectionHeading from "@/components/sectionHeading";
import DataCardWithDots from "../dataCardWithDots";

// styles import
import styles from "../../styles/contact.module.scss";

export default function ContactUs() {
  return (
    <section className="section contactDiv">
      <div className="sectionDiv" style={{minWidth:"50%"}}>
        <SectionTag tagName="Contact" />
        <SectionHeading
          heading="Let's talk"
          smallHeading="Got questions or ready to start your design project? Let’s bring your ideas to life!"
          position="column"
        />

        <div className={styles.dataDiv}>
          {Array.from({ length: 2 }).map((_, index) => (
            <DataCardWithDots
              key={index}
              image="./assets/arrow.svg"
              text="Predictable Pricing"
              currDot={index + 1}
              totalDots={2}
              link="/chat-to-sales"
              smallText="+91 9876543210"
            />
          ))}
        </div>
      </div>

      <GetInTouchForm />
    </section>
  );
}
