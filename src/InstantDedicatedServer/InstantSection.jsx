import HostingPricing from "../DedicatedServer/Plan";
import ComparisonSection from "./ComparisonSection";
import Instantserver from "./InstanstServer";
import InstantDeployment from "./InstantDeployment";

const InstantSection = () => {
  return (
    <div className="">
      <HostingPricing />
      <Instantserver />
      <InstantDeployment />
      <ComparisonSection />
    </div>
  );
};

export default InstantSection;
