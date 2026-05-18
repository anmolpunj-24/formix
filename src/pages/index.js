// component import
import SectionTag from "@/components/sectionTag";
import SectionHeading from "@/components/sectionHeading";
import Seo from "@/components/seo";
import Benifits from "@/components/mainComponents/benifits";
import SelectedWork from "@/components/mainComponents/selectedWork";
import ProjectsAvail from "@/components/mainComponents/projectsAvail";
import ContactUs from "@/components/mainComponents/contactUs";
import Marquee from "@/components/mainComponents/marquee";
import Footer from "@/components/footer";
import ImageCarousel from "@/components/imageCarousel";

export default function Home() {
  return (
    <>
      <Seo />
      <div className="sectionsWrapper">
        {/* projects */}
        <ProjectsAvail />

        <ImageCarousel />

        {/* services */}
        <section className="section">
          <div className="sectionDiv">
            <SectionTag tagName="Services" />
            <SectionHeading
              heading="What we do."
              smallHeading="We combine strategy, speed, and skill to deliver exceptional design — every time."
              position="row"
            />
          </div>
        </section>

        {/* benefits */}
        <Benifits />

        {/* work */}
        <SelectedWork />

        {/* pricing */}
        <section className="section">
          <div className="sectionDiv">
            <SectionTag tagName="Pricing" />
            <SectionHeading
              heading="Flexible pricing."
              smallHeading="Pick your plan and start designing today. One flat fee. Unlimited design. Zero stress."
              position="row"
            />
          </div>
        </section>

        {/* reviews */}
        <section className="section">
          <div className="sectionDiv">
            <SectionTag tagName="Reviews" />
            <SectionHeading
              heading="Success stories."
              smallHeading="Discover how our design subscription helps innovative brands grow smarter and faster."
              position="row"
            />
          </div>
        </section>

        {/* marquee */}
        <Marquee />

        {/* faqs */}
        <section className="section" style={{ alignItems: "center" }}>
          <div className="sectionDiv">
            <SectionTag tagName="Faqs" />
            <SectionHeading
              heading="Faqs"
              smallHeading="Everything you need to know about our design subscription service."
              position="column"
            />
          </div>
        </section>

        {/* contact */}
        <ContactUs />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
