import FaqAccordion from "../LandingPageComponent/Fag";
import Add_ons from "./Add_ons";
import Blazing from "./Blazing";
import Performance from "./Performance";
import HostingPricing from "./Plan";

const Section = () => {
  return (
    <div className="">
      <HostingPricing />
      <Blazing />
      <Add_ons />
      <Performance />
      <div className="bg-[#000]">
        {" "}
        <FaqAccordion />
      </div>
    </div>
  );
};

export default Section;
