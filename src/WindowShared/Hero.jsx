import banner1 from "../assets/banner1.png";
import granteed from "../assets/guaranteed.svg";
import response from "../assets/response.svg";
import webHosting from "../assets/web-hosting.svg";
const Hero = () => {
  return (
    <div className="bg-[#000] text-white mt-20 h-fit py-16 md:px-5">
      <div className="container mt-10 md:mt-0 md:h-[400px] md:flex justify-center items-center md:px-3 px-2">
        <div className="row flex-1 md:px-8 px-4 justify-between md:mt-0 mt-4">
          <div className="col-lg-6 col-md-8">
            <h1 className="hero-heading text-4xl md:text-6xl font-bold py-3">
              Windows Shared Hosting - At it's Simplest Best
            </h1>
            <p className="font-[24px] pt-35 py-3  text-gray-300">
              Discover why we’re renowned for excellence in web hosting
              services, reliability, and customer support to deliver a top-tier.
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
        <div className="illustration flex-1  flex justify-center py-8 mt-10 md:mt-0">
          {" "}
          <img src={banner1} alt="" className=" w-[500px]" />{" "}
        </div>
      </div>
      <div className="w-full my-6 py-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6  my-6 py-6 md:px-6 px-4 ">
            <div className="fact-feature  flex justify-center items-center gap-2 ">
              <div className="icon w-10 h-10  flex items-center justify-center border-2 rounded-full shrink-0">
                <svg
                  width="27"
                  height="20"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.28571L7 13L16.8571 1"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl">
                Perfect for a Basic Website
              </h3>
            </div>
            <div className="fact-feature  flex items-center gap-2 mt-6 md:mt-0">
              <div className="icon w-10 h-10 border-2 flex items-center justify-center rounded-full">
                <svg
                  width="27"
                  height="20"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.28571L7 13L16.8571 1"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl">
                A Complex Ecommerce Website
              </h3>
            </div>
            <div className="fact-feature  flex items-center gap-2 mt-6 md:mt-0">
              <div className="icon w-10 h-10 border-2 flex items-center justify-center rounded-full">
                <svg
                  width="27"
                  height="20"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.28571L7 13L16.8571 1"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl">Power-packed with features</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <div className="title-four text-center  py-6 px-3">
              <h2 className="font-bold text-3xl md:text-5xl">
                The Reason We’re Called the Best Web Hosting Services Provider
              </h2>
            </div>
          </div>
        </div>
        <div className="row grid grid-cols-1 md:grid-cols-3 mt-6 py-3">
          <div className="">
            <div className="card-style-seven position-relative text-center  ">
              {" "}
              <img src={response} alt="" className="icon m-auto" />
              <h4 className="font-bold text-xl py-4">
                Plesk for <br />
                Management
              </h4>
            </div>
          </div>
          <div className="col-lg-4 mt-8 md:mt-0">
            <div className="card-style-seven position-relative text-center ">
              {" "}
              <img src={webHosting} alt="" className="icon m-auto" />
              <h4 className="font-bold text-xl py-4">Email included</h4>
            </div>
          </div>
          <div className="col-lg-4 mt-8 md:mt-0">
            <div className="card-style-seven position-relative text-center ">
              <img src={granteed} alt="" className="icon m-auto" />
              <h4 className="font-bold text-xl py-4">99.99% uptime </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
