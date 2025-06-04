import Layout from "../Layout/Layout";
import InstantHero from "./InstantHero";
import InstantSection from "./InstantSection";

const InstaneDedicatedServer = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <InstantHero />
        <InstantSection />
      </div>
    </Layout>
  );
};

export default InstaneDedicatedServer;
