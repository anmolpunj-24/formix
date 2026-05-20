// components import
import SectionHeading from "../sectionHeading";
import SectionTag from "../sectionTag";

export default function Faqs() {
  return (
    <div className="sectionDiv faqDiv">
      <SectionTag tagName="Faqs" />
      <SectionHeading
        heading="Faqs"
        smallHeading="Everything you need to know about our design subscription service."
        position="column"
      />
    </div>
  );
}
