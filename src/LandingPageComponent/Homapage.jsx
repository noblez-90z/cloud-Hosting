import Hosting from "./HostingSection";
import Rating from "./Rating";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import Started from "./Started";

const Homepage = () => {
  return (
    <div className="">
      <Section />
      <SectionTwo />
      <Hosting />
      <Started />
      <Rating />
    </div>
  );
};

export default Homepage;
