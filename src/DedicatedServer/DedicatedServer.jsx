import Layout from "../Layout/Layout";
import Hero from "./Hero";
import Section from "./Section";

const DedicatedServer = () => {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <div className="bg-[#000]">
          <Hero />
          <Section />
        </div>
      </div>
    </Layout>
  );
};

export default DedicatedServer;
