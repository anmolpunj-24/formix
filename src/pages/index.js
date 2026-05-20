// component import
import SectionTag from "@/components/sectionTag";
import SectionHeading from "@/components/sectionHeading";
import Seo from "@/components/seo";
import Benifits from "@/components/mainComponents/benifits";
import SelectedWork from "@/components/mainComponents/selectedWork";
import ProjectsAvail from "@/components/mainComponents/projectsAvail";
import ContactUs from "@/components/mainComponents/contactUs";
import Marquee from "@/components/mainComponents/marquee";
import Footer from "@/components/mainComponents/footer";
import ImageCarousel from "@/components/imageCarousel";
import FileExpandOnHover from "@/components/fileExpandOnHover";
import Services from "@/components/mainComponents/services";
import Review from "@/components/mainComponents/review";
import Faqs from "@/components/mainComponents/faqs";

export default function Home() {
  return (
    <>
      <Seo />

      {/* <ImageCarousel /> */}

      {/* projects */}
      <ProjectsAvail />

      {/* services */}
      <Services />

      {/* benefits */}
      <Benifits />

      {/* work */}
      <SelectedWork />

      {/* pricing */}
      {/* <>
        <SectionTag tagName="Pricing" />
        <SectionHeading
          heading="Flexible pricing."
          smallHeading="Pick your plan and start designing today. One flat fee. Unlimited design. Zero stress."
          position="row"
        />
      </> */}

      {/* reviews */}
      <Review />

      {/* marquee */}
      <Marquee />

      {/* faqs */}
      <Faqs />

      {/* contact */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </>
  );
}
