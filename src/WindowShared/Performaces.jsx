import tick from "../assets/tick1.png";
// import { FaBolt } from "react-icons/fa";
import {
  FaBolt,
  FaHeadset,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCloudUploadAlt,
} from "react-icons/fa";
const Performances = () => {
  return (
    <div className="md:px-6 px-4 py-6 bg-[#000] text-white">
      <div className="container">
        <div className="row grid grid-cols-1 md:grid-cols-3 gap-3 md:px-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card-one  px-4 py-4  h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div className="icon-width-heading flex items-center gap-4">
                <div className="icon text-2xl border-2 border-[#ffffff1a] bg-[#3d3d3d] rounded-lg py-3 px-3 w-fit ">
                  {" "}
                  <FaBolt className=" w-6 h-6" aria-hidden="true" />{" "}
                </div>
                <h4 className="font-bold text-2xl py-4">
                  High <span className="text-[#8c32ff]">Performance</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                By utilizing state-of-the-art processors, high-performance RAM,
                and NVMe SSDs, we ensure lightning-fast speed and instant
                responsiveness, keeping your projects running smoothly without
                interruption.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card-one  px-4 py-4  h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div className="icon-width-heading flex items-center gap-4">
                <div className="icon text-2xl border-2 border-[#ffffff1a] bg-[#3d3d3d] rounded-lg py-3 px-3 w-fit ">
                  {" "}
                  <FaHeadset className=" w-6 h-6" aria-hidden="true" />{" "}
                </div>
                <h4 className="font-bold text-2xl py-4">
                  24/7 <span className="text-[#8c32ff]">Expert Support</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Our dedicated support team is available 24/7 to help with any
                questions or issues, ensuring you have expert assistance
                whenever you need it.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card-one  px-4 py-4  h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div className="icon-width-heading flex items-center gap-4">
                <div className="icon text-2xl border-2 border-[#ffffff1a] bg-[#3d3d3d] rounded-lg py-3 px-3 w-fit ">
                  {" "}
                  <FaServer className="w-6 h-6 " aria-hidden="true" />{" "}
                </div>
                <h4 className="font-bold text-2xl py-4">
                  Professional{" "}
                  <span className="text-[#8c32ff]">Web Hosting</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Our premium hosting solutions provide top-tier security, keeping
                your website safe and running smoothly with advanced DDoS
                protection.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card-one  px-4 py-4  h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div className="icon-width-heading flex items-center gap-4">
                <div className="icon text-2xl border-2 border-[#ffffff1a] bg-[#3d3d3d] rounded-lg py-3 px-3 w-fit ">
                  {" "}
                  <FaCloud className="w-6 h-6 " aria-hidden="true" />{" "}
                </div>
                <h4 className="font-bold text-2xl py-4">
                  IP <span className="text-[#8c32ff]">Subnets</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Expand Your Network with More IPv4/IPv6 Addresses. Seamlessly
                add extra IPs to scale your services and accommodate your
                growing demands.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card-one  px-4 py-4  h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div className="icon-width-heading flex items-center gap-4">
                <div className="icon text-2xl border-2 border-[#ffffff1a] bg-[#3d3d3d] rounded-lg py-3 px-3 w-fit ">
                  {" "}
                  <FaDatabase className="w-6 h-6 " aria-hidden="true" />{" "}
                </div>
                <h4 className="font-bold text-2xl py-4">
                  Multiple <span className="text-[#8c32ff]">Data Centers</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Maximize performance and ensure consistent uptime with our
                globally positioned data centers.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card-one px-4 py-4  h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div className="icon-width-heading flex items-center gap-4">
                <div className="icon text-2xl border-2 border-[#ffffff1a] bg-[#3d3d3d] rounded-lg py-3 px-3 w-fit ">
                  {" "}
                  <FaCloudUploadAlt
                    className="w-6 h-6 "
                    aria-hidden="true"
                  />{" "}
                </div>
                <h4 className="font-bold text-2xl py-4">
                  Customised <span className="text-[#8c32ff]">Features</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Elevate your experience with advanced technology and exceptional
                support, crafted to surpass your expectations.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block-feature-twentyFive mt-20 w-full">
        <div className="container lg mx-auto">
          <div className="border-t-2 border-b-2 border-white  pt-10  pb-20 ">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="title-four text-center mb-10 py-6">
                  <h2 className="font-bold text-6xl">Under the hood</h2>
                </div>
              </div>
            </div>
            <div className="row  grid grid-cols-1 md:grid-cols-3 gap-3 md:px-4 justify-center  mx-auto  text-center">
              <div className="col-lg-4   lg:ml-6">
                <div className="text-start mt-10">
                  <h4 className="font-bold text-2xl py-4">
                    State-of-the-Art Servers
                  </h4>
                  <ul className="features list-check-two text-start text-gray-400">
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Dual Intel Xeon Processor E5-2630
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      64 GB RAM
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      256 GB SSD in RAID 1
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Octa Core with 2.40 GHz
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />2 TB SATA in RAID 1
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card-style-twelve text-start mt-10">
                  <h4 className="font-bold text-2xl py-4">
                    Program in Any Language
                  </h4>
                  <ul className="features list-check-two text-start text-gray-400">
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Windows Server 2008
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      IIS 7.0, ASP 10.0 , ASP.NET 3.5, ASP.NET 4.8, PHP
                      7.2,7.3,7.4,8.0,8.1 and 8.2, GD, cURL, CGI, mcrypt
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      MySQL 8 and above, MSSQL 2012
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Ruby On Rails
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Zend Optimizer, Zend Engine, ionCube Loader
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="card-style-twelve text-start mt-10">
                  <h4 className="font-bold text-2xl py-4">
                    Top-Notch Security
                  </h4>
                  <ul className="features list-check-two text-start text-gray-400">
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Anti Spam &amp; Virus Protection
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Password Protect Directories
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Secure FTP Access
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      IP Blocking
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      phpMyAdmin Access
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Hotlink &amp; Leech Protection
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Cron Jobs for Scheduled Tasks
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Customizable Error Page
                    </li>
                    <li className="flex items-center gap-3 text-lg py-3">
                      <img src={tick} alt="" />
                      Advanced Website Statistics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performances;
