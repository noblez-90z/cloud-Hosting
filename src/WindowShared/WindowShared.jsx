import HostingPricing from "../DedicatedServer/Plan";
import FaqAccordion from "../LandingPageComponent/Fag";
import Layout from "../Layout/Layout";
import Hero from "./Hero";
import Performances from "./Performaces";
import HostingSupport from "./Reliable";
import Section from "./Section";

const WindowShared = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <Hero />
        <HostingPricing />
        <Performances />
        <Section />
        <HostingSupport />
        <div className="bg-[#000]">
          {" "}
          <FaqAccordion />
        </div>
      </div>
    </Layout>
  );
};

export default WindowShared;
