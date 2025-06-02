import Performance from "../DedicatedServer/Performance";
import HostingPricing from "../DedicatedServer/Plan";
import FaqAccordion from "../LandingPageComponent/Fag";
import Hero from "./Hero";
import LiteSpeed from "./LiteSpeed";

const WordPressHosting = () => {
  return (
    <div className="">
      <Hero />
      <HostingPricing />
      <Performance />
      <LiteSpeed />
      <div className="bg-[#000]">
        {" "}
        <FaqAccordion />
      </div>
    </div>
  );
};

export default WordPressHosting;
