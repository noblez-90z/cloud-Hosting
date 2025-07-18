import Layout from "../Layout/Layout";
import Hosting from "./HostingSection";
import Rating from "./Rating";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import Started from "./Started";

const Homepage = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <Section />
        <SectionTwo />
        <Hosting />
        <Started />
        <Rating />
      </div>
    </Layout>
  );
};

export default Homepage;
