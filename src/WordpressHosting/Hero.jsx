import banner1 from "../assets/home-banner.webp";
import granteed from "../assets/guaranteed.svg";
import response from "../assets/response.svg";
import webHosting from "../assets/web-hosting.svg";

const Hero = () => {
  return (
    <div className="bg-[#000] text-white mt-20 h-fit py-6">
      <div className="container mt-20 md:mt-0 md:h-[400px] flex justify-center items-center md:px-3">
        <div className="row flex-1 md:px-8 px-4 justify-between md:mt-0 mt-4">
          <div className="col-lg-6 col-md-8">
            <h1 className="hero-heading text-6xl font-bold py-3">
              Transform Your Website into an Interactive Hub
            </h1>
            <p className="font-[24px] pt-35 py-3  text-gray-300">
              Elevate your site with compelling features, top-tier speed, and
              faster page load times.
            </p>
            <p className="font-[22px] mb-6 text-gray-300">
              From{" "}
              <span className="font-[500] text-[32px] text-white">
                $3.99/mo.
              </span>{" "}
              <del>Regular $13.87/mo.</del>
            </p>
            <a
              href="#"
              className="btn-eighteen mt-6 border-2 border-[#8c32ff] rounded-xl py-1 px-4 w-40  font-semibold text-xl text-[#000] bg-[#8c32ff] hover:bg-[#000] hover:text-[#fff] tranistion 0s ease-in-out"
            >
              Start Now
            </a>{" "}
          </div>
        </div>
        <div className="illustration flex-1  flex justify-center py-6">
          {" "}
          <img src={banner1} alt="" className=" w-[500px]" />{" "}
        </div>
      </div>

      <div className="container py-6">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <div className="title-four text-center  py-6">
              <h2 className="font-bold text-6xl">
                The Reason We’re Called the Best Web Hosting Services Provider
              </h2>
            </div>
          </div>
        </div>
        <div className="row flex justify-around mt-6 py-6">
          <div className="">
            <div className="card-style-seven position-relative text-center  pb-45 lg-pb-30">
              {" "}
              <img src={response} alt="" className="icon m-auto" />
              <h4 className="font-bold text-2xl py-4">
                Prompt & Friendly Response
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-style-seven position-relative text-center mt-30 pb-45 lg-pb-30">
              {" "}
              <img src={webHosting} alt="" className="icon m-auto" />
              <h4 className="font-bold text-2xl py-4">
                Free Website Migration
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-style-seven position-relative text-center mt-30 pb-45 lg-pb-30">
              <img src={granteed} alt="" className="icon m-auto" />
              <h4 className="font-bold text-2xl py-4">
                Highest Guaranteed Uptime{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
