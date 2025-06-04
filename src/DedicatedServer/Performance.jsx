import {
  FaBolt,
  FaRegClock,
  FaCloudDownloadAlt,
  FaCog,
  FaServer,
  FaCloud,
} from "react-icons/fa";

const Performance = () => {
  return (
    <div className="md:px-6 px-4 py-10 bg-[#000] text-[#fff]">
      <div class="container">
        <div class="row">
          <div class="col-xl-11 m-auto">
            <div class="title-four text-center mb-20 lg-mb-40 pe-xl-3 ps-xl-3">
              <h2 class="font-bold text-2xl py-6 mt-6">
                Maximum Performance, Total Control
              </h2>
            </div>
          </div>
        </div>
        <div class="row grid grid-cols-1 md:grid-cols-3 gap-3 md:px-4">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card-one  px-4 py-4  h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div class="icon-width-heading flex items-center gap-4">
                <div class="icon text-2xl border-2 border-[#ffffff1a] bg-[#3d3d3d] rounded-lg py-3 px-3 w-fit ">
                  {" "}
                  <FaBolt aria-hidden="true" style={{ marginRight: "4px" }} />
                </div>
                <h4 className="font-bold text-2xl py-4">
                  Powerful{" "}
                  <span className="text-[#8c32ff]">Configurations </span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Our servers are powered by SSD storage, DDR4 Memory and Xenon D
                processors, and can smoothly handle any type of workload — from
                a critical business application to a high-traffic website.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card-one  px-4 py-4 h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div class="icon-width-heading flex items-center gap-4">
                <div class="icon text-2xl  rounded-lg py-3 px-3 w-fit border-2 border-[#ffffff1a] bg-[#3d3d3d]">
                  {" "}
                  <FaRegClock
                    aria-hidden="true"
                    style={{ marginRight: "4px" }}
                  />{" "}
                </div>
                <h4 className="font-bold text-xl py-4">
                  Quick <span className="text-[#8c32ff]">Provisioning</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                We get you online quickly. Your server is provisioned within
                minutes.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card-one  px-4 py-4 h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div class="icon-width-heading flex items-center gap-4">
                <div class="icon text-2xl  rounded-lg py-3 px-3 w-fit border-2 border-[#ffffff1a] bg-[#3d3d3d]">
                  {" "}
                  <FaServer
                    aria-hidden="true"
                    style={{ marginRight: "4px" }}
                  />{" "}
                </div>
                <h4 className="font-bold text-xl ">
                  Server{" "}
                  <span className="text-[#8c32ff]">Administration Panel</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Never lose access to your server. Our Server Administration
                Panel gives you total control at all times. With features like
                Rebuild, Web-based VNC, Restart, Shutdown and Resource
                Monitoring you can manage your server easily.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card-one  px-4 py-4 h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div class="icon-width-heading flex items-center gap-4">
                <div class="icon text-2xl  rounded-lg py-3 px-3 w-fit border-2 border-[#ffffff1a] bg-[#3d3d3d]">
                  {" "}
                  <FaCloud
                    aria-hidden="true"
                    style={{ marginRight: "4px" }}
                  />{" "}
                </div>
                <h4 className="font-bold text-xl py-4">
                  Additional <span className="text-[#8c32ff]">Storage*</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Our HDD servers come with the flexibility of additional storage.
                You can easily scale the storage as your business grows.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card-one  px-4 py-4 h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div class="icon-width-heading flex items-center gap-4">
                <div class="icon text-2xl  rounded-lg py-3 px-3 w-fit border-2 border-[#ffffff1a] bg-[#3d3d3d]">
                  {" "}
                  <FaCog
                    aria-hidden="true"
                    style={{ marginRight: "4px" }}
                  />{" "}
                </div>
                <h4 className="font-bold text-xl py-4">
                  Easily <span className="text-[#8c32ff]">Configurable</span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                Choose from multiple Linux flavours and hosting panels. You can
                even add WHMCS add-on to have a complete billing solution.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card-one  px-4 py-4 h-80 bg-[#171717] border-2 border-[#ffffff1a] text-[#fff] rounded-2xl">
              <div class="icon-width-heading flex items-center gap-4 ">
                <div class="icon text-2xl  rounded-lg py-3 px-3  w-fit border-2 border-[#ffffff1a] bg-[#3d3d3d]">
                  {" "}
                  <FaCloudDownloadAlt
                    aria-hidden="true"
                    style={{ marginRight: "4px" }}
                  />{" "}
                </div>
                <h4 className="font-bold text-xl py-4">
                  99.99% <span className="text-[#8c32ff]">uptime </span>
                </h4>
              </div>
              <p className="text-lg mt-6">
                {" "}
                Our servers are located a top-tier data centres which are backed
                by redundant ISP links and Neustar DDoS protection to ensure
                your site is up and available all the time.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
